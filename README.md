# 🚀 Modern Portfolio Template

A modern, interactive, and bilingual portfolio website built with React, Vite, TailwindCSS, Framer Motion, and Firebase. Features smooth animations, dark/light theme toggle, dynamic content management,real-time testimonials , visitor counts, and likes!

🌐 **Live Demo**: [https://jermiah.github.io/portfolio](https://jermiah.github.io/portfolio)

 **If you like this template, please give it a star!**

 **Want to use this for your own portfolio? Fork it and follow the setup guide!**

---

##  Features

### Core Features
-  **Modern Design** - Elegant, professional design with smooth animations
-  **Dark/Light Theme** - Smooth theme transitions with localStorage persistence
-  **Bilingual Support** - English/French language toggle (EN/FR)
-  **Fully Responsive** - Mobile-first design that works on all devices
-  **Fast & Optimized** - Built with Vite for lightning-fast performance

### Interactive Elements
-  **Framer Motion Animations** - Scroll-triggered reveals, hover effects, smooth transitions
-  **Animated Hero** - Typing effect and animated testimonial carousel
-  **Project Carousel** - Swipeable project categories with smooth animations
-  **Real-time Testimonials** - Firebase-powered testimonial system with carousel
-  **Like Button** - Fun recommendation feature with confetti animation
-  **Particle Background** - Animated canvas background with connected particles

### Admin Features
-  **Admin Panel** - Firebase Authentication-protected admin dashboard
-  **Testimonial Management** - Approve, reject, and edit testimonials
-  **Firebase Integration** - Real-time database and authentication
-  **Content Management** - Easy JSON-based content editing

---

##  Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion 11
- **Backend**: Firebase Realtime Database
- **Internationalization**: i18next, react-i18next
- **Icons**: React Icons
- **Confetti**: canvas-confetti
- **Deployment**: GitHub Pages (gh-pages)

---

##  Documentation

### Quick Links
- **[Setup Guide](./SETUP.md)** - Fork, customize, and deploy your portfolio
- **[Deployment Guide](./DEPLOYMENT.md)** - Deploy from any branch to GitHub Pages
- **[Firebase Setup](./FIREBASE.md)** - Configure Firebase for testimonials
- **[Admin Panel](./ADMIN.md)** - Manage testimonials and admin features

---

##  Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Visit `http://localhost:5173` to see your portfolio locally.

---

##  Project Structure

```
portfolio/
├── public/
│   └── photo.jpg                    # Profile photo
├── src/
│   ├── components/
│   │   ├── AdminPanel.jsx           # Admin dashboard for testimonials
│   │   ├── Background.jsx           # Animated particle background
│   │   ├── Navbar.jsx               # Navigation with theme/language toggle
│   │   ├── Hero.jsx                 # Hero section with typing animation
│   │   ├── Section.jsx              # Reusable section wrapper
│   │   ├── Overview.jsx             # Professional summary
│   │   ├── Skills.jsx               # Skills grid
│   │   ├── Education.jsx            # Education section
│   │   ├── ExperienceTimeline.jsx   # Work experience timeline
│   │   ├── Certifications.jsx       # Certifications with status
│   │   ├── ProjectCarousel.jsx      # Swipeable projects carousel
│   │   ├── Showcase.jsx             # Awards and achievements
│   │   ├── TestimonialCarousel.jsx  # Testimonials carousel
│   │   ├── TestimonialForm.jsx      # Testimonial submission form
│   │   ├── ContactForm.jsx          # Contact form
│   │   ├── LikeButton.jsx           # Recommendation button
│   │   └── Footer.jsx               # Footer with social links
│   ├── content/
│   │   ├── en.json                  # English content
│   │   └── fr.json                  # French content
│   ├── firebase.js                  # Firebase configuration
│   ├── i18n.js                      # i18next configuration
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles + scale adjustments
├── .env                             # Environment variables (Firebase, admin)
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
├── firebase.json                    # Firebase configuration
├── README.md                        # This file
├── SETUP.md                         # Setup and customization guide
├── DEPLOYMENT.md                    # Deployment guide (deploy from any branch)
├── FIREBASE.md                      # Firebase setup guide
└── ADMIN.md                         # Admin panel guide
```

---

## 🎯 Key Sections

### 1. Hero Section
- Animated greeting with typing effect
- Profile photo with hover effects
- Social links (Resume, GitHub, LinkedIn)
- Real-time testimonial carousel (left side, desktop)

### 2. Overview
- Professional summary with highlights
- Key achievements and expertise

### 3. Skills
- Categorized skills (Expertise, Professional, Technical)
- Animated skill cards

### 4. Education
- Academic background with institution links
- Degree details and graduation dates

### 5. Experience
- Work history in timeline format
- Grouped concurrent roles
- Company details and achievements

### 6. Certifications
- Professional certifications with status indicators
- Green checkmark for "Certified"
- Red clock for "Soon" or pending

### 7. Projects
- Professional and Personal categories
- Swipeable carousel navigation
- Project cards with tags and links
- Support for subcategories (e.g., Ongoing Work)

### 8. Showcase
- Awards and achievements
- Hackathons with optional links
- Events (Attended and Conducted)
- Community involvement

### 9. Testimonials
- Real-time testimonials from Firebase
- Swipeable carousel with navigation
- Submission form for new testimonials
- Admin approval system

### 10. Contact
- Contact form
- Social media links
- Footer with copyright

---

##  Customization

### Theme Colors
Edit `tailwind.config.js` to customize brand colors:

```javascript
colors: {
  primary: {
    light: '#3b82f6',  // Blue
    dark: '#60a5fa',
  },
  accent: {
    light: '#8b5cf6',  // Purple
    dark: '#a78bfa',
  },
}
```

### Content
All content is managed through JSON files:
- `src/content/en.json` - English content
- `src/content/fr.json` - French content

See **[Setup Guide](./SETUP.md)** for detailed content customization.

### Animations
Animations are powered by Framer Motion. Edit component files to adjust:
- Animation duration
- Easing functions
- Hover effects
- Scroll triggers

### Sizing
The portfolio uses a global scale of 0.95 (95% of original size) for all content except the navbar. Edit `src/index.css` to adjust:

```css
main {
  transform: scale(0.95);
  transform-origin: top center;
}
```

---

##  Features Details

### Language Toggle
- Automatic language detection from localStorage
- Toggle between English (EN) and French (FR)
- Click the 🌐 globe icon in navbar
- Preference persists across sessions

### Theme Toggle
- Light and dark mode support
- Respects system preference on first visit
- Click the ☀️/🌙 icon in navbar
- Smooth transitions with Tailwind CSS

### Swipe/Touch Support
- Touch-enabled carousels on mobile
- Mouse drag on desktop
- Works on testimonials and projects sections
- Smooth animations on swipe

### Testimonials System
- Real-time updates from Firebase
- Public submission form
- Admin approval workflow
- Edit capabilities for approved testimonials
- LinkedIn profile links

---

##  Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

##  Troubleshooting

### Build Issues
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Deployment Issues
```bash
# Ensure gh-pages is installed
npm install gh-pages --save-dev

# Verify configuration in vite.config.js and package.json
npm run deploy
```

### Firebase Issues
- Check `.env` file exists with correct Firebase credentials
- Verify Firebase rules in Firebase Console
- See **[Firebase Setup](./FIREBASE.md)** for detailed troubleshooting

---

##  Contributing

Contributions are welcome! If you have suggestions for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Keep the template generic and reusable
- Test on multiple browsers and devices
- Update documentation for new features
- Follow existing code style

---

##  License

This project is open source and available under the MIT License. Feel free to use it for your personal portfolio!

---

##  Author

**Jermiah Jerome**

-  Portfolio: [https://jermiah.github.io/portfolio](https://jermiah.github.io/portfolio)
-  LinkedIn: [jermiah-jerome](https://www.linkedin.com/in/jermiah-jerome/)
-  GitHub: [@jermiah](https://github.com/jermiah)
-  Email: jermiah.jerome96@gmail.com

---

## 📊 Performance

-  Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
-  Bundle Size: Optimized with Vite
-  Load Time: < 2 seconds on 3G
-  Accessibility: WCAG 2.1 AA compliant

---

##  Show Your Support

If this template helped you create your portfolio:

-  Star this repository
-  Fork it for your own use
-  Share it with others
-  Contribute improvements

---

**Made with ❤️ by Jermiah Jerome**
