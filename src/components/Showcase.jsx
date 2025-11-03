import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiAward, FiUsers, FiZap, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Showcase = () => {
  const { t } = useTranslation();
  const showcase = t('showcase', { returnObjects: true });

  // Don't render if showcase data is missing
  if (!showcase || typeof showcase !== 'object') {
    return null;
  }

  return (
    <Section id="showcase" title={showcase.title || 'Showcase'}>
      <div className="space-y-12">
        {/* Awards */}
        {showcase.awards && showcase.awards.items && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <FiAward className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{award}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Sports Achievements */}
        {showcase.sports && showcase.sports.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {showcase.sports.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                    <FiAward className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{sport}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Community */}
        {showcase.community && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              className="inline-block text-primary-light dark:text-primary-dark font-semibold hover:underline mb-4"
            >
              View Community Post →
            </a>
            {showcase.community.memberships && showcase.community.memberships.length > 0 && (
              <ul className="space-y-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                {showcase.community.memberships.map((membership, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <FiUsers className="w-5 h-5 text-primary-light dark:text-primary-dark flex-shrink-0" />
                    <span className="text-base md:text-lg font-medium">{membership}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}

        {/* Hackathons */}
        {showcase.hackathons && showcase.hackathons.items && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              {showcase.hackathons.items.map((hackathon, index) => {
                const hackathonData = typeof hackathon === 'string' ? { name: hackathon, link: '' } : hackathon;
                const hasLink = hackathonData.link && hackathonData.link.trim() !== '';

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between gap-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{hackathonData.name}</p>
                    {hasLink && (
                      <a
                        href={hackathonData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="View hackathon link"
                      >
                        <FiExternalLink className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Events */}
        {showcase.events && (showcase.events.attended || showcase.events.conducted) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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

            {/* Events Attended */}
            {showcase.events.attended && showcase.events.attended.items && showcase.events.attended.items.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {showcase.events.attended.title}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {showcase.events.attended.items.map((event, index) => {
                    const eventData = typeof event === 'string' ? { name: event, link: '' } : event;
                    const hasLink = eventData.link && eventData.link.trim() !== '';

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between gap-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <p className="text-gray-700 dark:text-gray-300">{eventData.name}</p>
                        {hasLink && (
                          <a
                            href={eventData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                            title="View event link"
                          >
                            <FiExternalLink className="w-4 h-4 text-green-500" />
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Events Conducted */}
            {showcase.events.conducted && showcase.events.conducted.items && showcase.events.conducted.items.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {showcase.events.conducted.title}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {showcase.events.conducted.items.map((event, index) => {
                    const eventData = typeof event === 'string' ? { name: event, link: '' } : { name: event.title || event.name, link: event.link || '' };
                    const hasLink = eventData.link && eventData.link.trim() !== '';

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between gap-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <p className="text-gray-700 dark:text-gray-300">{eventData.name}</p>
                        {hasLink && (
                          <a
                            href={eventData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                            title="View event link"
                          >
                            <FiExternalLink className="w-4 h-4 text-green-500" />
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Showcase;
