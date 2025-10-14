import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const CategorySection = ({ sectionKey }) => {
  const { t } = useTranslation();
  const sectionData = t(sectionKey, { returnObjects: true });
  const [activeCategory, setActiveCategory] = useState(0);

  if (!sectionData || !sectionData.categories || sectionData.categories.length === 0) {
    return null;
  }

  const currentCategory = sectionData.categories[activeCategory];

  return (
    <Section id={sectionKey} title={sectionData.title}>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {sectionData.categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === index
                ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentCategory.items && currentCategory.items.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.items.map((item, index) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No items in this category yet. Check back soon!
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default CategorySection;
