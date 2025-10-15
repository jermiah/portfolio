import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiAward, FiCheckCircle, FiClock } from 'react-icons/fi';

const Certifications = () => {
  const { t } = useTranslation();
  const certifications = t('certifications.items', { returnObjects: true });

  return (
    <Section id="certifications" title={t('certifications.title')}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                <FiAward className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2">
                  {cert.status.toLowerCase().includes('certified') || cert.status.toLowerCase().includes('certifié') ? (
                    <>
                      <FiCheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500 font-medium">
                        {cert.status}
                      </span>
                    </>
                  ) : (
                    <>
                      <FiClock className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-500 font-medium">
                        {cert.status}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
