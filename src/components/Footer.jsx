import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jermiah',
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jermiah-jerome/',
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:jermiah.jerome96@gmail.com',
      icon: <FiMail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-5">
        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <div className="inline-block p-2 md:p-3 bg-gradient-to-r from-primary-light/10 to-accent-light/10 dark:from-primary-dark/10 dark:to-accent-dark/10 rounded-xl">
            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t('footer.message')}
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-3"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          <p className="flex items-center justify-center gap-1.5 text-xs">
            {t('footer.copyright').split('❤️')[0]}
            <FiHeart className="w-2.5 h-2.5 text-red-500 fill-current animate-pulse" />
            {t('footer.copyright').split('❤️')[1]}
          </p>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary-light dark:text-primary-dark font-medium hover:underline text-xs"
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
