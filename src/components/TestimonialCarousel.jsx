import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { subscribeToTestimonials } from '../firebase';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // Subscribe to real-time testimonials
    const unsubscribe = subscribeToTestimonials((fetchedTestimonials) => {
      console.log('📝 Testimonials received in carousel:', fetchedTestimonials);
      setTestimonials(fetchedTestimonials);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Auto-scroll every 5 seconds
    if (!isAutoPlaying || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null; // Don't show carousel if no testimonials
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl"
        >
          {/* Quote Icon */}
          <div className="text-5xl text-blue-500/20 dark:text-blue-400/20 font-serif mb-4">"</div>

          {/* Testimonial Text */}
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 min-h-[100px]">
            {currentTestimonial.text}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {currentTestimonial.name}
              </h4>
              {currentTestimonial.role && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentTestimonial.role}
                </p>
              )}
            </div>

            {/* LinkedIn Link */}
            {currentTestimonial.linkedIn && (
              <a
                href={currentTestimonial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                title="View LinkedIn Profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      )}

      {/* Counter */}
      <div className="text-center mt-2 text-xs text-gray-500 dark:text-gray-400">
        {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
