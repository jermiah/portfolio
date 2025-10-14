import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiMail, FiBriefcase, FiMessageSquare, FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Resume Request from ${formData.role || 'Potential Employer'}`;
    const body = `Hi Jermiah,

I'd like to request your tailored resume for the following role:

Role: ${formData.role}
Description: ${formData.message}
Contact Email: ${formData.email}

Looking forward to hearing from you!`;

    const mailtoLink = `mailto:jermiah.jerome96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="max-w-2xl mx-auto"
      >
        {/* Centered Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          {t('contact.title', 'Want to Hire Me?')}
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
          {t('contact.subtitle', 'Fill out the form below and I\'ll send you a tailored resume for your role.')}
        </p>

        <form onSubmit={handleSubmit} className="card p-8 space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FiMail className="w-4 h-4" />
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@company.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
            />
          </div>

          {/* Role Field */}
          <div>
            <label htmlFor="role" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FiBriefcase className="w-4 h-4" />
              Role / Position
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              placeholder="e.g., Senior AI Engineer, ML Researcher"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FiMessageSquare className="w-4 h-4" />
              Job Description / Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Brief description of the role, company, or any specific requirements..."
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiSend className="w-5 h-5" />
            Send Request
          </motion.button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            This will open your default email client with a pre-filled message
          </p>
        </form>
      </motion.div>
    </Section>
  );
};

export default ContactForm;
