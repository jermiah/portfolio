import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart, FiUsers, FiEdit3 } from 'react-icons/fi';
import TypewriterText from './TypewriterText';
import TestimonialCarousel from './TestimonialCarousel';
import { subscribeToRecommendations, subscribeToVisitors, incrementVisitors, subscribeToTestimonials } from '../firebase';

const Hero = () => {
  const { t } = useTranslation();
  const [recommendationCount, setRecommendationCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);

  useEffect(() => {
    // Track visitor (only once per device/browser)
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      incrementVisitors().catch(error => {
        console.error('Failed to increment visitor count:', error);
      });
      localStorage.setItem('hasVisited', 'true');
    }

    // Subscribe to real-time updates from Firebase
    const unsubscribeRecommendations = subscribeToRecommendations((count) => {
      setRecommendationCount(count);
    });

    const unsubscribeVisitors = subscribeToVisitors((count) => {
      setVisitorCount(count);
    });

    const unsubscribeTestimonials = subscribeToTestimonials((testimonials) => {
      setTestimonialCount(testimonials.length);
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeRecommendations();
      unsubscribeVisitors();
      unsubscribeTestimonials();
    };
  }, []);

  // Get typewriter configuration from JSON
  const titles = t('hero.titles', { returnObjects: true, defaultValue: null });
  const title = t('hero.title', { defaultValue: 'Data Scientist & AI Engineer' });
  const typewriterConfig = t('hero.typewriter', { returnObjects: true, defaultValue: {} });

  // Determine texts to display
  const textsToType = Array.isArray(titles) && titles.length > 0 ? titles : [title];

  // Typewriter settings with defaults
  const typingSpeed = typewriterConfig.speedMs || 100;
  const deletingSpeed = typewriterConfig.deleteSpeedMs || 50;
  const pauseDuration = typewriterConfig.pauseMs || 2000;
  const loop = typewriterConfig.loop !== undefined ? typewriterConfig.loop : true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative">
      {/* Testimonial Carousel - Desktop Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:block absolute left-4 bottom-8 w-80 max-h-[60vh] overflow-y-auto"
      >
        <TestimonialCarousel />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/portfolio/photo.jpg"
            alt="Jermiah Jerome"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto object-cover border-4 border-primary-light dark:border-primary-dark shadow-2xl"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-3"
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 gradient-text"
        >
          {t('hero.name')}
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 min-h-[2.5rem] md:min-h-[3.5rem]">
            <span className="inline-block whitespace-nowrap md:whitespace-normal">
              <TypewriterText
                texts={textsToType}
                loop={loop}
                typingSpeed={typingSpeed}
                deletingSpeed={deletingSpeed}
                pauseDuration={pauseDuration}
              />
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* AI Collective Membership */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/portfolio/Logo.svg"
            alt="The AI Collective Logo"
            className="h-8 md:h-12 w-auto transition-transform"
          />
          <p className="text-base md:text-lg text-blue-300 dark:text-blue-300 text-center">
            Member — The AI Collective, Paris Chapter
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-6 text-sm"
        >
          <a
            href={`mailto:${t('contact.email')}`}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FiMail />
            <span className="hidden sm:inline">{t('contact.email')}</span>
          </a>
          <a
            href={`tel:${t('contact.phone')}`}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FiPhone />
            <span className="hidden sm:inline">{t('contact.phone')}</span>
          </a>
        </motion.div>

        {/* Stats Badges - Shows global counts from Firebase */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {/* Visitor Count */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg cursor-help"
            title="Live visitor count tracked via Firebase Realtime Database"
          >
            <FiUsers className="w-4 h-4" />
            <span className="font-semibold text-sm">
              {visitorCount.toLocaleString()} {visitorCount === 1 ? 'Unique Visitor' : 'Unique Visitors'}
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg shadow-xl z-50">
              <p className="font-semibold mb-1">👥 Total Visitors</p>
              <p className="text-gray-300">Total unique visitors to this portfolio, tracked via Firebase Realtime Database. Each device is counted once.</p>
            </div>
          </motion.div>

          {/* Loves Count (Quick Heart Clicks) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg cursor-help"
            title="People who loved my profile"
          >
            <FiHeart className="w-4 h-4 fill-current" />
            <span className="font-semibold text-sm">
              {recommendationCount} {recommendationCount === 1 ? 'Love' : 'Loves'}
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg shadow-xl z-50">
              <p className="font-semibold mb-1">💖 Profile Loves</p>
              <p className="text-gray-300">People who loved my profile, tracked via Firebase Realtime Database. Each device can love once.</p>
            </div>
          </motion.div>

          {/* Written Recommendations Count */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg cursor-help"
            title="Written recommendations received"
          >
            <FiEdit3 className="w-4 h-4" />
            <span className="font-semibold text-sm">
              {testimonialCount} {testimonialCount === 1 ? 'Recommendation' : 'Recommendations'}
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg shadow-xl z-50">
              <p className="font-semibold mb-1">✍️ Written Recommendations</p>
              <p className="text-gray-300">Detailed recommendations received on this portfolio, tracked via Firebase Realtime Database. Each person can write once.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={t('hero.links.github')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <FiGithub />
            {t('hero.cta.github')}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={t('hero.links.linkedin')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <FiLinkedin />
            {t('hero.cta.linkedin')}
          </motion.a>
        </motion.div>

        {/* Testimonial Carousel - Mobile Below Buttons */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden max-w-md mx-auto"
        >
          <TestimonialCarousel />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
