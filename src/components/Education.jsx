import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Education = () => {
  const { t } = useTranslation();
  const educationItems = t('education.items', { returnObjects: true });

  return (
    <Section id="education" title={t('education.title')}>
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="card p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.school}
                </h3>
                <p className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">
                  {item.degree}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
              {item.description}
            </p>

            {item.links && (
              <div className="flex flex-wrap gap-3">
                {Object.entries(item.links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark hover:underline"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    {key === 'school' ? 'Website' : key === 'emlyon' ? 'emlyon' : 'McGill'}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
