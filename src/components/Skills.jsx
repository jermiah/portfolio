import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiCode, FiBriefcase, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  const iconMap = {
    'Expertise': <FiCpu className="w-6 h-6" />,
    'Professional': <FiBriefcase className="w-6 h-6" />,
    'Technical': <FiCode className="w-6 h-6" />,
    'Professionnel': <FiBriefcase className="w-6 h-6" />,
    'Technique': <FiCode className="w-6 h-6" />,
  };

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary-light dark:text-primary-dark">
                {iconMap[category.name]}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-primary-light dark:text-primary-dark mt-1">•</span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
