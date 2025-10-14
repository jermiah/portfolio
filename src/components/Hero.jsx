import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText, FiMail, FiPhone } from 'react-icons/fi';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const { t } = useTranslation();
  
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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/portfolio/photo.jpg"
            alt="Jermiah Jerome"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary-light dark:border-primary-dark shadow-2xl"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
        >
          {t('hero.name')}
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 min-h-[3rem] md:min-h-[4rem]">
            <TypewriterText 
              texts={textsToType}
              loop={loop}
              typingSpeed={typingSpeed}
              deletingSpeed={deletingSpeed}
              pauseDuration={pauseDuration}
            />
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base"
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

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={t('hero.links.resume')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <FiFileText />
            {t('hero.cta.resume')}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={t('hero.links.github')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
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
            className="btn-secondary flex items-center gap-2"
          >
            <FiLinkedin />
            {t('hero.cta.linkedin')}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
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
