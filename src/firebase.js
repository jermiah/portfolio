import { initializeApp } from 'firebase/app';
import { getDatabase, ref, runTransaction, onValue } from 'firebase/database';

// Firebase configuration
// TODO: Replace with your Firebase project credentials
// Get these from: Firebase Console → Project Settings → Your apps → Web app
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY_HERE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN_HERE",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "YOUR_DATABASE_URL_HERE",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID_HERE",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID_HERE"
};

// Initialize Firebase
let app;
let database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization error:', error);
  console.log('⚠️ Please update src/firebase.js with your Firebase credentials');
  console.log('📖 See FIREBASE_SETUP_GUIDE.md for instructions');
}

// References to database paths
const recommendationsRef = database ? ref(database, 'recommendations/count') : null;
const visitorsRef = database ? ref(database, 'visitors/count') : null;

/**
 * Increment the recommendation count in Firebase
 * @returns {Promise<number>} The new count value
 */
export const incrementRecommendations = async () => {
  if (!recommendationsRef) {
    console.error('Firebase not initialized');
    throw new Error('Firebase not configured. Please see FIREBASE_SETUP_GUIDE.md');
  }

  try {
    const result = await runTransaction(recommendationsRef, (currentValue) => {
      // Increment the current value, or start at 1 if null
      return (currentValue || 0) + 1;
    });

    if (result.committed) {
      console.log('✅ Recommendation count incremented:', result.snapshot.val());
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

export { database };
