import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ResearchSection = () => {
  const { t } = useTranslation();
  const research = t('research', { returnObjects: true, defaultValue: null });

  // Don't render if research section doesn't exist
  if (!research || !research.items) {
    return null;
  }

  return (
    <Section id="research" title={research.title}>
      <div className="grid md:grid-cols-2 gap-6">
        {research.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {item.title}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {item.description}
            </p>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            {item.links && (
              <div className="flex flex-wrap gap-3">
                {item.links.code && (
                  <a
                    href={item.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark hover:underline"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                )}
                {item.links.demo && (
                  <a
                    href={item.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark hover:underline"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Ongoing Work Section */}
      {research.ongoingWork && research.ongoingWork.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Ongoing Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {research.ongoingWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-6 border-l-4 border-accent-light dark:border-accent-dark"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
};

export default ResearchSection;
