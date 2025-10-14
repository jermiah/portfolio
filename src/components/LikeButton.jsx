import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FiHeart } from 'react-icons/fi';

const LikeButton = () => {
  const { t } = useTranslation();
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('likeCount');
    if (savedCount) {
      setLikeCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleLike = () => {
    const newCount = likeCount + 1;
    setLikeCount(newCount);
    localStorage.setItem('likeCount', newCount.toString());

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
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className="group relative p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
          title={t('likeButton.tooltip')}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
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

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
            <p className="font-medium">{t('likeButton.text')}</p>
            <p className="text-xs text-gray-300 mt-1">
              {t('likeButton.counter', { count: likeCount })}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LikeButton;
