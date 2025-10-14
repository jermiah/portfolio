import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiAward, FiUsers, FiZap, FiCalendar, FiTrophy } from 'react-icons/fi';

const Showcase = () => {
  const { t } = useTranslation();
  const showcase = t('showcase', { returnObjects: true });

  return (
    <Section id="showcase" title={t('showcase.title')}>
      <div className="space-y-12">
        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <FiAward className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {showcase.awards.title}
            </h3>
          </div>
          <ul className="space-y-3">
            {showcase.awards.items.map((award, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <FiTrophy className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>{award}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Sports Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {showcase.sports.map((sport, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                  <FiTrophy className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{sport}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-8 bg-gradient-to-br from-primary-light/10 to-accent-light/10 dark:from-primary-dark/10 dark:to-accent-dark/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-light/20 dark:bg-primary-dark/20 rounded-lg">
              <FiUsers className="w-8 h-8 text-primary-light dark:text-primary-dark" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {showcase.community.title}
            </h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {showcase.community.description}
          </p>
          <a
            href={showcase.community.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary-light dark:text-primary-dark font-semibold hover:underline"
          >
            View Community Post →
          </a>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg">
              <FiZap className="w-8 h-8 text-accent-light dark:text-accent-dark" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {showcase.hackathons.title}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {showcase.hackathons.items.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium">{hackathon}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <FiCalendar className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {showcase.events.title}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {showcase.events.items.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <p className="text-gray-700 dark:text-gray-300">{event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Showcase;
