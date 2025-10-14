import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiCalendar, FiBriefcase } from 'react-icons/fi';

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true });

  return (
    <Section id="experience" title={t('experience.title')}>
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-light dark:bg-primary-dark rounded-full border-4 border-white dark:border-gray-900 z-10" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                      <FiBriefcase className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-primary-light dark:text-primary-dark">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <FiCalendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-2">
                        <span className="text-primary-light dark:text-primary-dark mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceTimeline;
