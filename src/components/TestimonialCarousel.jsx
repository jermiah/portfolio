import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { subscribeToTestimonials } from '../firebase';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Subscribe to real-time testimonials
    const unsubscribe = subscribeToTestimonials((fetchedTestimonials) => {
      console.log('📝 Testimonials received in carousel:', fetchedTestimonials);
      setTestimonials(fetchedTestimonials);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Auto-scroll every 5 seconds (disabled on mobile)
    if (!isAutoPlaying || testimonials.length === 0 || isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, isMobile]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (_event, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -10000) {
      goToNext();
    } else if (swipe > 10000) {
      goToPrevious();
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="relative overflow-hidden flex items-stretch min-h-[200px] sm:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl cursor-grab active:cursor-grabbing w-full flex flex-col"
          >
            {/* Quote Icon */}
            <div className="text-3xl sm:text-4xl text-blue-500/20 dark:text-blue-400/20 font-serif mb-2 sm:mb-3">"</div>

            {/* Testimonial Text */}
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-4 sm:line-clamp-5">
              {currentTestimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between gap-2 mt-auto">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm truncate">
                  {currentTestimonial.name}
                </h4>
                {currentTestimonial.role && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
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
                  className="p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors flex-shrink-0"
                  title="View LinkedIn Profile"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-1.5 sm:p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-1 sm:gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-5 sm:w-6'
                    : 'w-1.5 sm:w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-1.5 sm:p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      )}
    </>
  );
};

export default TestimonialCarousel;
