import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  texts = [], 
  loop = true, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Handle empty or invalid texts array
  if (!texts || texts.length === 0) {
    return <span>Data Scientist & AI Engineer</span>;
  }

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayText === currentText) {
      // Finished typing current text
      if (texts.length === 1 && !loop) {
        // Single text, no loop - stay complete
        return;
      }
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentIndex, texts, loop, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default TypewriterText;
