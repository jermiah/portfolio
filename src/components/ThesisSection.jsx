import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiExternalLink, FiBook } from 'react-icons/fi';

const ThesisSection = () => {
  const { t } = useTranslation();
  
  // Try to get the thesis data
  const thesis = t('thesis', { returnObjects: true, defaultValue: null });
  
  // Don't render if thesis doesn't exist
  if (!thesis || !thesis.title) {
    return null;
  }

  return (
    <Section id="thesis" title={thesis.title}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Card */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-primary-light/10 to-accent-light/10 dark:from-primary-dark/10 dark:to-accent-dark/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary-light/20 dark:bg-primary-dark/20 rounded-lg">
              <FiBook className="w-8 h-8 text-primary-light dark:text-primary-dark" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {thesis.subtitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {thesis.university} • {thesis.year}
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {thesis.description}
          </p>

          {thesis.link && (
            <a
              href={thesis.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary-light dark:text-primary-dark font-semibold hover:underline"
              aria-label="View thesis"
            >
              <FiExternalLink className="w-5 h-5" />
              <span>View Research</span>
            </a>
          )}
        </div>

        {/* Objectives */}
        {thesis.objectives && thesis.objectives.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-6 mb-6"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Research Objectives
            </h4>
            <ul className="space-y-3">
              {thesis.objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark flex items-center justify-center text-sm font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Keywords */}
        {thesis.keywords && thesis.keywords.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-6 mb-6"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Keywords
            </h4>
            <div className="flex flex-wrap gap-2">
              {thesis.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Expected Contributions */}
        {thesis.expectedContributions && thesis.expectedContributions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Expected Contributions
            </h4>
            <ul className="space-y-3">
              {thesis.expectedContributions.map((contribution, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-accent-light dark:text-accent-dark text-xl flex-shrink-0">
                    •
                  </span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default ThesisSection;
