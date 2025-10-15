import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Education from './components/Education';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certifications from './components/Certifications';
import ProjectCarousel from './components/ProjectCarousel';
import CategorySection from './components/CategorySection';
import Showcase from './components/Showcase';
import ContactForm from './components/ContactForm';
import LikeButton from './components/LikeButton';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check if current URL is admin page
  useEffect(() => {
    const path = window.location.hash;
    setShowAdmin(path === '#admin');

    // Listen for hash changes
    const handleHashChange = () => {
      setShowAdmin(window.location.hash === '#admin');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Load theme preference - default to dark mode
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme !== 'light'; // Dark unless explicitly set to light

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Show admin panel if on admin route
  if (showAdmin) {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen relative">
      <Background isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <div className="content-wrapper">
        <main>
          <Hero />
          <Overview />
          <Skills />
          <Education />
          <ExperienceTimeline />
          <Certifications />
          <ProjectCarousel />
          <CategorySection sectionKey="research" />
          <CategorySection sectionKey="opensource" />
          <Showcase />
          <ContactForm />
        </main>

        <Footer />
      </div>

      <LikeButton />
    </div>
  );
}

export default App;
