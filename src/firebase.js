import { initializeApp } from 'firebase/app';
import { getDatabase, ref, runTransaction, onValue, push, set, query, orderByChild, limitToLast, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Firebase configuration
// TODO: Replace with your Firebase project credentials
// Get these from: Firebase Console → Project Settings → Your apps → Web app
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDsp1wpU3fvqqYG7S30Iwg3GcmTyKsnKwc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "portfolio-recommendation-b5dd3.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://portfolio-recommendation-b5dd3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "portfolio-recommendation-b5dd3",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "portfolio-recommendation-b5dd3.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "263692658555",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:263692658555:web:c680fae5d41ad680643fde"
};

// Initialize Firebase
let app;
let database;
let auth;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  auth = getAuth(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization error:', error);
  console.log('⚠️ Please update src/firebase.js with your Firebase credentials');
  console.log('📖 See FIREBASE_SETUP_GUIDE.md for instructions');
}

// References to database paths
const recommendationsRef = database ? ref(database, 'recommendations/count') : null;
const recommendationsUsersRef = database ? ref(database, 'recommendations/users') : null;
const visitorsRef = database ? ref(database, 'visitors/count') : null;
const testimonialsRef = database ? ref(database, 'testimonials') : null;

/**
 * Check if a user fingerprint has already recommended
 * @param {string} fingerprint - The user's browser fingerprint
 * @returns {Promise<boolean>} True if user has already recommended
 */
export const hasUserRecommended = async (fingerprint) => {
  if (!recommendationsUsersRef) {
    console.error('Firebase not initialized');
    return false;
  }

  try {
    const userRef = ref(database, `recommendations/users/${fingerprint}`);
    const snapshot = await get(userRef);
    const exists = snapshot.exists();

    if (exists) {
      console.log('🔍 User fingerprint found in Firebase:', fingerprint);
    } else {
      console.log('✨ New user fingerprint:', fingerprint);
    }

    return exists;
  } catch (error) {
    console.error('❌ Error checking user fingerprint:', error);
    return false;
  }
};

/**
 * Increment the recommendation count in Firebase with fingerprint tracking
 * @param {string} fingerprint - The user's browser fingerprint
 * @returns {Promise<number>} The new count value
 */
export const incrementRecommendations = async (fingerprint) => {
  if (!recommendationsRef || !recommendationsUsersRef) {
    console.error('Firebase not initialized');
    throw new Error('Firebase not configured. Please see FIREBASE_SETUP_GUIDE.md');
  }

  try {
    // Double-check if user already recommended (server-side validation)
    const alreadyRecommended = await hasUserRecommended(fingerprint);
    if (alreadyRecommended) {
      console.warn('⚠️ User already recommended (fingerprint found)');
      throw new Error('USER_ALREADY_RECOMMENDED');
    }

    // Increment the count
    const result = await runTransaction(recommendationsRef, (currentValue) => {
      // Increment the current value, or start at 1 if null
      return (currentValue || 0) + 1;
    });

    if (result.committed) {
      // Store the user fingerprint with timestamp
      const userRef = ref(database, `recommendations/users/${fingerprint}`);
      await set(userRef, {
        timestamp: Date.now(),
        liked: true
      });

      console.log('✅ Recommendation count incremented:', result.snapshot.val());
      console.log('🔐 User fingerprint stored:', fingerprint);
      return result.snapshot.val();
    } else {
      throw new Error('Transaction not committed');
    }
  } catch (error) {
    console.error('❌ Error incrementing recommendations:', error);
    throw error;
  }
};

/**
 * Increment the visitor count in Firebase
 * @returns {Promise<number>} The new count value
 */
export const incrementVisitors = async () => {
  if (!visitorsRef) {
    console.error('Firebase not initialized');
    throw new Error('Firebase not configured. Please see FIREBASE_SETUP_GUIDE.md');
  }

  try {
    const result = await runTransaction(visitorsRef, (currentValue) => {
      // Increment the current value, or start at 1 if null
      return (currentValue || 0) + 1;
    });

    if (result.committed) {
      console.log('✅ Visitor count incremented:', result.snapshot.val());
      return result.snapshot.val();
    } else {
      throw new Error('Transaction not committed');
    }
  } catch (error) {
    console.error('❌ Error incrementing visitors:', error);
    throw error;
  }
};

/**
 * Get the current recommendation count from Firebase
 * @returns {Promise<number>} The current count value
 */
export const getRecommendationCount = () => {
  if (!recommendationsRef) {
    console.error('Firebase not initialized');
    return Promise.resolve(0);
  }

  return new Promise((resolve, reject) => {
    onValue(recommendationsRef, (snapshot) => {
      const count = snapshot.val() || 0;
      console.log('📊 Current recommendation count:', count);
      resolve(count);
    }, (error) => {
      console.error('❌ Error getting recommendation count:', error);
      reject(error);
    }, { onlyOnce: true });
  });
};

/**
 * Get the current visitor count from Firebase
 * @returns {Promise<number>} The current count value
 */
export const getVisitorCount = () => {
  if (!visitorsRef) {
    console.error('Firebase not initialized');
    return Promise.resolve(0);
  }

  return new Promise((resolve, reject) => {
    onValue(visitorsRef, (snapshot) => {
      const count = snapshot.val() || 0;
      console.log('👥 Current visitor count:', count);
      resolve(count);
    }, (error) => {
      console.error('❌ Error getting visitor count:', error);
      reject(error);
    }, { onlyOnce: true });
  });
};

/**
 * Subscribe to real-time updates of the recommendation count
 * @param {Function} callback - Function to call when count changes
 * @returns {Function} Unsubscribe function
 */
export const subscribeToRecommendations = (callback) => {
  if (!recommendationsRef) {
    console.error('Firebase not initialized');
    return () => {};
  }

  return onValue(recommendationsRef, (snapshot) => {
    const count = snapshot.val() || 0;
    callback(count);
  });
};

/**
 * Subscribe to real-time updates of the visitor count
 * @param {Function} callback - Function to call when count changes
 * @returns {Function} Unsubscribe function
 */
export const subscribeToVisitors = (callback) => {
  if (!visitorsRef) {
    console.error('Firebase not initialized');
    return () => {};
  }

  return onValue(visitorsRef, (snapshot) => {
    const count = snapshot.val() || 0;
    callback(count);
  });
};

/**
 * Submit a new testimonial to Firebase
 * @param {Object} testimonial - The testimonial data {name, linkedIn, role, text}
 * @returns {Promise<string>} The ID of the created testimonial
 */
export const submitTestimonial = async (testimonial) => {
  if (!testimonialsRef) {
    console.error('Firebase not initialized');
    throw new Error('Firebase not configured. Please see FIREBASE_SETUP_GUIDE.md');
  }

  try {
    const newTestimonialRef = push(testimonialsRef);
    const testimonialData = {
      ...testimonial,
      timestamp: Date.now(),
      approved: false // For moderation - you can approve manually in Firebase Console
    };

    await set(newTestimonialRef, testimonialData);
    console.log('✅ Testimonial submitted:', newTestimonialRef.key);
    return newTestimonialRef.key;
  } catch (error) {
    console.error('❌ Error submitting testimonial:', error);
    throw error;
  }
};

/**
 * Get all approved testimonials from Firebase
 * @param {number} limit - Maximum number of testimonials to fetch (default: 20)
 * @returns {Promise<Array>} Array of testimonials
 */
export const getTestimonials = async (limit = 20) => {
  if (!testimonialsRef) {
    console.error('Firebase not initialized');
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const testimonialsQuery = query(
      testimonialsRef,
      orderByChild('timestamp'),
      limitToLast(limit)
    );

    onValue(testimonialsQuery, (snapshot) => {
      const testimonials = [];
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        // Only include approved testimonials - handle both boolean true and string "true"
        if (data.approved === true || data.approved === 'true') {
          testimonials.push({
            id: childSnapshot.key,
            ...data
          });
        }
      });
      // Reverse to show newest first
      testimonials.reverse();
      console.log('📝 Fetched testimonials:', testimonials.length);
      resolve(testimonials);
    }, (error) => {
      console.error('❌ Error fetching testimonials:', error);
      reject(error);
    }, { onlyOnce: true });
  });
};

/**
 * Subscribe to real-time updates of testimonials
 * @param {Function} callback - Function to call when testimonials change
 * @param {number} limit - Maximum number of testimonials (default: 20)
 * @returns {Function} Unsubscribe function
 */
export const subscribeToTestimonials = (callback, limit = 20) => {
  if (!testimonialsRef) {
    console.error('Firebase not initialized');
    return () => {};
  }

  const testimonialsQuery = query(
    testimonialsRef,
    orderByChild('timestamp'),
    limitToLast(limit)
  );

  return onValue(testimonialsQuery, (snapshot) => {
    const testimonials = [];
    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      console.log('Testimonial data:', data); // Debug log
      // Only include approved testimonials - handle both boolean true and string "true"
      if (data.approved === true || data.approved === 'true') {
        testimonials.push({
          id: childSnapshot.key,
          ...data
        });
      }
    });
    // Reverse to show newest first
    testimonials.reverse();
    console.log('📝 Final approved testimonials:', testimonials);
    callback(testimonials);
  }, (error) => {
    console.error('❌ Error fetching testimonials:', error);
  });
};

export { database, auth };
