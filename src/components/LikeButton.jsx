import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FiHeart, FiEdit3 } from 'react-icons/fi';
import { incrementRecommendations, subscribeToRecommendations, subscribeToTestimonials } from '../firebase';
import TestimonialForm from './TestimonialForm';

const LikeButton = () => {
  const { t } = useTranslation();
  const [likeCount, setLikeCount] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);
  const [hasRecommended, setHasRecommended] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Check if user has already recommended (localStorage)
    const userRecommended = localStorage.getItem('hasRecommended');
    if (userRecommended === 'true') {
      setHasRecommended(true);
    }

    // Subscribe to real-time updates from Firebase
    const unsubscribeLikes = subscribeToRecommendations((count) => {
      setLikeCount(count);
    });

    // Subscribe to testimonials count
    const unsubscribeTestimonials = subscribeToTestimonials((testimonials) => {
      setTestimonialCount(testimonials.length);
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeLikes();
      unsubscribeTestimonials();
    };
  }, []);

  const handleLike = async () => {
    // Check if user has already recommended
    if (hasRecommended) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      return;
    }

    if (isLoading) return; // Prevent double-clicks

    setIsLoading(true);

    try {
      // Increment count in Firebase
      const newCount = await incrementRecommendations();
      setLikeCount(newCount);
      
      // Mark user as having recommended (localStorage)
      setHasRecommended(true);
      localStorage.setItem('hasRecommended', 'true');

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'],
      });

      // Additional confetti burst
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#3b82f6', '#8b5cf6'],
        });
      }, 200);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ec4899', '#f59e0b'],
        });
      }, 400);
    } catch (error) {
      console.error('Failed to increment recommendations:', error);
      // Show error message
      alert('Failed to save recommendation. Please check your internet connection and Firebase configuration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* Write Testimonial Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsFormOpen(true)}
        className="group relative p-4 rounded-full shadow-2xl transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/50 text-white"
      >
        <FiEdit3 className="w-8 h-8" />

        {/* "Write Recommendation" Text - Left side of button */}
        {localStorage.getItem('hasWrittenTestimonial') !== 'true' && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800/70 dark:bg-gray-700/70 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-md shadow-md whitespace-nowrap font-medium text-xs"
          >
            Write Recommendation
          </motion.div>
        )}

        {/* Counter Badge - Testimonials Count */}
        {testimonialCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 text-purple-500 dark:text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border-2 border-purple-500 shadow-lg"
          >
            {testimonialCount}
          </motion.div>
        )}

        {/* Tooltip - Only show if user already wrote testimonial */}
        {localStorage.getItem('hasWrittenTestimonial') === 'true' && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
              <p className="font-medium">Already Written! 💖</p>
              <p className="text-xs text-gray-300 mt-1">Thank you for your recommendation</p>
            </div>
          </div>
        )}
      </motion.button>

      {/* Heart Like Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative"
      >
        {/* "Already Loved" Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-2xl whitespace-nowrap"
            >
              <p className="font-semibold text-sm">You already loved my profile! 💖</p>
              <p className="text-xs mt-1">Heartful thanks with love ❤️</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          disabled={isLoading}
          className={`group relative p-4 rounded-full shadow-2xl transition-all duration-300 ${
            hasRecommended
              ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-500 to-red-500 hover:shadow-pink-500/50'
          } ${isLoading ? 'opacity-50 cursor-wait' : ''} text-white`}
        >
          {/* "Love My Profile" Text - Left side of button */}
          {!hasRecommended && !isLoading && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800/70 dark:bg-gray-700/70 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-md shadow-md whitespace-nowrap font-medium text-xs"
            >
              Love My Profile
            </motion.div>
          )}

          {/* Loading indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-blue-500/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-md shadow-md whitespace-nowrap font-medium text-xs"
            >
              Saving...
            </motion.div>
          )}

          <motion.div
            animate={hasRecommended || isLoading ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <FiHeart className="w-8 h-8 fill-current" />
          </motion.div>

          {/* Counter Badge */}
          {likeCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 text-pink-500 dark:text-pink-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border-2 border-pink-500 shadow-lg"
            >
              {likeCount}
            </motion.div>
          )}
        </motion.button>

        {/* Tooltip - Only show if user already loved */}
        {hasRecommended && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
              <p className="font-medium">Already Loved! 💖</p>
              <p className="text-xs text-gray-300 mt-1">Thank you for your love</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Testimonial Form Modal */}
      <TestimonialForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default LikeButton;
