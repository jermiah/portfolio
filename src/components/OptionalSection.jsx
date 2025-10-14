import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const OptionalSection = ({ sectionKey, title }) => {
  const { t } = useTranslation();
  
  // Try to get the section data
  const sectionData = t(sectionKey, { returnObjects: true, defaultValue: null });
  
  // Don't render if section doesn't exist or has no items
  if (!sectionData || !sectionData.items || sectionData.items.length === 0) {
    return null;
  }

  return (
    <Section id={sectionKey} title={title || sectionData.title}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionData.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card p-6 h-full flex flex-col"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {item.title || item.name || item.topic || item.project}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              {item.description}
            </p>

            {/* Highlights (for open source projects) */}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                {item.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2">
                    <span className="text-primary-light dark:text-primary-dark mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

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
            {(item.links || item.repo) && (
              <div className="flex flex-wrap gap-3 mt-auto">
                {item.repo && (
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    aria-label="View repository"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                )}
                {item.links?.code && (
                  <a
                    href={item.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    aria-label="View code"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {item.links?.demo && (
                  <a
                    href={item.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    aria-label="View demo"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
                {item.links?.paper && (
                  <a
                    href={item.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    aria-label="View paper"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Paper</span>
                  </a>
                )}
                {item.links?.link && (
                  <a
                    href={item.links.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    aria-label="View link"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Link</span>
                  </a>
                )}
              </div>
            )}

            {/* Single link (backward compatibility) */}
            {item.link && !item.links && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary-light dark:text-primary-dark hover:underline mt-auto"
                aria-label="View more"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Learn More</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default OptionalSection;
