import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiAward, FiTrendingUp, FiBookOpen } from 'react-icons/fi';

const Overview = () => {
  const { t } = useTranslation();

  const highlights = t('overview.highlights.items', { returnObjects: true });

  const iconMap = {
    0: <FiAward className="w-8 h-8" />,
    1: <FiTrendingUp className="w-8 h-8" />,
    2: <FiBookOpen className="w-8 h-8" />,
  };

  return (
    <Section id="overview" title={t('overview.title')}>
      <div className="space-y-6">
        {/* Introduction Paragraphs */}
        <div className="space-y-3 text-base text-gray-700 dark:text-gray-300">
          {t('overview.content', { returnObjects: true }).map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {t('overview.highlights.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="card p-5"
              >
                <div className="text-primary-light dark:text-primary-dark mb-3">
                  {iconMap[index]}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Project - Only show if it exists in JSON */}
        {t('overview.featured.title', { defaultValue: '' }) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-5 md:p-6 mt-8 bg-gradient-to-br from-primary-light/10 to-accent-light/10 dark:from-primary-dark/10 dark:to-accent-dark/10"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              {t('overview.featured.title')}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-3">
              {t('overview.featured.description')}
            </p>
            {t('overview.featured.link', { defaultValue: '' }) && (
              <a
                href={t('overview.featured.link')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-light dark:text-primary-dark font-semibold hover:underline text-base"
              >
                {t('overview.featured.linkText')} →
              </a>
            )}
          </motion.div>
        )}

        {/* Closing - Only show if it exists in JSON */}
        {(t('overview.closing', { defaultValue: '' }) || t('overview.note', { defaultValue: '' })) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 space-y-3"
          >
            {t('overview.closing', { defaultValue: '' }) && (
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {t('overview.closing')}
              </p>
            )}
            {t('overview.note', { defaultValue: '' }) && (
              <p className="text-gray-600 dark:text-gray-400 italic">
                {t('overview.note')}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Overview;
