import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCarousel = () => {
  const { t } = useTranslation();
  const projectsData = t('projects', { returnObjects: true });

  // Level 1: Professional/Personal toggle
  const [activeSection, setActiveSection] = useState('professional');

  // Level 2: Category within section
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState(0);

  // Get current section data
  const currentSection = projectsData[activeSection];
  const categories = currentSection?.categories || [];

  // Handle section change and reset category
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setActiveCategory(0);
    setDirection(0);
  };

  // Swipe handlers for category navigation
  const handleDragEnd = (event, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -10000) {
      // Swiped left - go to next category
      setDirection(1);
      setActiveCategory((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
    } else if (swipe > 10000) {
      // Swiped right - go to previous category
      setDirection(-1);
      setActiveCategory((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
    }
  };

  const goToNext = () => {
    setDirection(1);
    setActiveCategory((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
  };

  const goToPrevious = () => {
    setDirection(-1);
    setActiveCategory((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
  };

  return (
    <Section id="projects" title={projectsData.title}>
      {/* Level 1: Professional/Personal Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSectionChange('professional')}
          className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeSection === 'professional'
              ? 'bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {projectsData.professional?.title}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSectionChange('personal')}
          className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
            activeSection === 'personal'
              ? 'bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {projectsData.personal?.title}
        </motion.button>
      </div>

      {/* Level 2: Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setDirection(index > activeCategory ? 1 : -1);
              setActiveCategory(index);
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === index
                ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid with smooth animations */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSection}-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
            className="grid md:grid-cols-2 gap-6 cursor-grab active:cursor-grabbing"
          >
            {/* Check if this is "Ongoing Work" category with subcategories */}
            {categories[activeCategory]?.categories ? (
              <>
                {categories[activeCategory].categories.map((subCategory, catIndex) => (
                  <div key={`sub-cat-${catIndex}`} className="col-span-full">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-4">
                      {subCategory.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {subCategory.items.map((project, index) => (
                        <motion.div
                          key={`sub-${catIndex}-${index}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="card p-6 border-l-4 border-accent-light dark:border-accent-dark"
                        >
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                            {project.title}
                          </h4>

                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {project.description}
                          </p>

                          {/* Tags */}
                          {project.tags && (
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 text-xs font-medium bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full"
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
                ))}
              </>
            ) : (
              /* Regular category with items */
              <>
                {categories[activeCategory]?.items?.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="card p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
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
                    {project.links && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.code && (
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiGithub className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevious}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous category"
        >
          <FiChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next category"
        >
          <FiChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </Section>
  );
};

export default ProjectCarousel;
