# 📝 Setup Guide

Complete guide to fork, customize, and deploy this portfolio template for your own use.

---

## 🍴 Fork & Clone

### 1. Fork the Repository

1. Click the **"Fork"** button at the top right of the [original repository](https://github.com/jermiah/portfolio)
2. This creates a copy in your GitHub account
3. Choose a repository name (e.g., `portfolio`, `my-portfolio`, etc.)

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, TailwindCSS, Framer Motion, Firebase, and more.

---

## ⚙️ Configuration

### 1. Configure Vite for GitHub Pages

Edit `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // Change this to match your repository name
})
```

**Example:**
- If your repo is `my-portfolio`, use `base: '/my-portfolio/'`
- If your repo is just `portfolio`, use `base: '/portfolio/'`

### 2. Update Package.json

Edit `package.json` and change the homepage:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

**Example:**
```json
{
  "homepage": "https://johndoe.github.io/portfolio"
}
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **"Source"**, it will show **"Deploy from a branch"**
4. After your first deployment, select **gh-pages** branch
5. Click **Save**

---

## 🎨 Customize Content

All your personal content is stored in JSON files. No coding required!

### Main Content Files

- **`src/content/en.json`** - English content
- **`src/content/fr.json`** - French content (optional)

### Content Customization Checklist

Open `src/content/en.json` and update these sections:

#### 1. Hero Section
```json
"hero": {
  "greeting": "Hi, I'm",
  "name": "Your Full Name",              // Your name
  "title": "Your Job Title",             // e.g., "Full Stack Developer"
  "subtitle": "Your tagline/subtitle",   // Brief description
  "links": {
    "resume": "LINK_TO_YOUR_RESUME",     // Google Drive, Dropbox, etc.
    "github": "https://github.com/YOUR_USERNAME",
    "linkedin": "https://linkedin.com/in/YOUR_PROFILE"
  }
}
```

#### 2. Contact Information
```json
"contact": {
  "title": "Get In Touch",
  "email": "your.email@example.com",     // Your email
  "phone": "+1234567890"                 // Your phone (optional)
}
```

#### 3. Overview Section
```json
"overview": {
  "title": "About Me",
  "content": "Your professional summary here...",
  "highlights": [
    "Highlight 1",
    "Highlight 2",
    "Highlight 3"
  ]
}
```

#### 4. Skills
```json
"skills": {
  "title": "Skills & Expertise",
  "categories": [
    {
      "name": "Expertise",
      "items": ["Skill 1", "Skill 2", "Skill 3"]
    },
    {
      "name": "Professional",
      "items": ["Skill 1", "Skill 2"]
    },
    {
      "name": "Technical",
      "items": ["Tech 1", "Tech 2", "Tech 3"]
    }
  ]
}
```

#### 5. Education
```json
"education": {
  "title": "Education",
  "items": [
    {
      "degree": "Your Degree",
      "institution": "University Name",
      "period": "2018 - 2022",
      "location": "City, Country",
      "link": "https://university-website.com"
    }
  ]
}
```

#### 6. Experience
```json
"experience": {
  "title": "Work Experience",
  "items": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "Jan 2023 - Present",
      "location": "City, Country",
      "description": "What you did in this role...",
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

#### 7. Projects
```json
"projects": {
  "title": "Projects",
  "professional": {
    "title": "Professional Projects",
    "categories": [
      {
        "name": "Web Development",
        "items": [
          {
            "title": "Project Name",
            "description": "Project description...",
            "tags": ["React", "Node.js", "MongoDB"],
            "links": {
              "code": "https://github.com/...",
              "demo": "https://demo-link.com"
            }
          }
        ]
      }
    ]
  },
  "personal": {
    "title": "Personal Projects",
    "categories": [
      // Same structure as professional
    ]
  }
}
```

#### 8. Certifications
```json
"certifications": {
  "title": "Certifications",
  "items": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "status": "Certified"  // or "Soon"
    }
  ]
}
```

Note: Status colors:
- "Certified" or "Certifié" → Green with checkmark ✅
- "Soon" or anything else → Red with clock 🕐

#### 9. Showcase
```json
"showcase": {
  "title": "Achievements & Awards",
  "awards": {
    "title": "Awards",
    "items": ["Award 1", "Award 2"]
  },
  "hackathons": {
    "title": "Hackathons & Challenges",
    "items": [
      {
        "name": "Hackathon Name",
        "link": "https://optional-link.com"  // Leave empty "" if no link
      }
    ]
  },
  "events": {
    "title": "Events",
    "attended": {
      "title": "Events Attended",
      "items": [
        {
          "name": "Event Name",
          "link": ""
        }
      ]
    },
    "conducted": {
      "title": "Events Conducted",
      "items": [
        {
          "title": "Event Title",
          "description": "Event description",
          "tags": ["AI", "Workshop"],
          "link": "https://event-link.com"
        }
      ]
    }
  }
}
```

### Replace Profile Photo

1. Replace `public/photo.jpg` with your own photo
2. Keep the same filename `photo.jpg` or update the reference in `src/components/Hero.jsx`
3. Recommended size: 400x400px or larger, square aspect ratio

---

## 🧪 Test Locally

Before deploying, test your changes locally:

```bash
npm run dev
```

Visit `http://localhost:5173/YOUR_REPO_NAME/` in your browser.

### Testing Checklist:
- [ ] All your personal information appears correctly
- [ ] Links work (resume, GitHub, LinkedIn)
- [ ] Profile photo displays properly
- [ ] Projects and experience are up-to-date
- [ ] Skills and certifications are accurate
- [ ] Contact form has your email
- [ ] Theme toggle works (light/dark mode)
- [ ] Language toggle works (if using bilingual support)
- [ ] Responsive design works on mobile

---

## 🚀 Deploy to GitHub Pages

Once everything looks good locally:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build your portfolio for production
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### First Deployment

1. Run `npm run deploy`
2. Go to your repository Settings → Pages
3. Select **gh-pages** branch as source (if not already selected)
4. Wait 1-2 minutes for GitHub Pages to build
5. Visit `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Updating Your Site

After making changes:

```bash
# Test locally first
npm run dev

# Then deploy
npm run deploy
```

Your changes will be live in 1-2 minutes.

---

## 🎨 Advanced Customization

### Theme Colors

Edit `tailwind.config.js` to change brand colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',  // Change to your brand color
          dark: '#60a5fa',   // Lighter shade for dark mode
        },
        accent: {
          light: '#8b5cf6',  // Accent color
          dark: '#a78bfa',   // Lighter shade for dark mode
        },
      },
    },
  },
}
```

### Font

Edit `src/index.css` to change the font:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800&display=swap');

@layer base {
  body {
    font-family: 'YOUR_FONT', system-ui, -apple-system, sans-serif;
  }
}
```

### Adjust Size Scaling

The portfolio scales all content to 95% except the navbar. To adjust:

Edit `src/index.css`:

```css
main {
  transform: scale(0.95);  /* Change 0.95 to your preferred scale (0.90, 0.92, etc.) */
  transform-origin: top center;
}
```

### Remove French Language

If you don't need bilingual support:

1. Delete `src/content/fr.json`
2. Edit `src/components/Navbar.jsx` and remove the language toggle button
3. Simplify `src/i18n.js` to only load English

---

## 🔄 Keeping Up-to-Date

To get the latest features and improvements from the original template:

### One-Time Setup

```bash
# Add the original repo as upstream
git remote add upstream https://github.com/jermiah/portfolio.git
```

### Get Updates

```bash
# Fetch latest changes from original
git fetch upstream

# Merge updates into your fork
git checkout main
git merge upstream/main

# Resolve any conflicts (usually in content files)

# Push updates to your fork
git push origin main

# Rebuild and deploy
npm run deploy
```

**Note:** After syncing, you may need to resolve conflicts in your customized content files (`en.json`, `fr.json`). Keep your personal content and merge new features carefully.

---

## 📝 Content Tips

### Writing Your Bio

- Keep it concise but informative
- Highlight your unique value proposition
- Use active voice and strong action verbs
- Include relevant keywords for SEO

### Project Descriptions

- Start with what the project does
- Mention technologies used
- Highlight your role and contributions
- Include measurable results if possible

### Professional Summary

- Start with your current role or expertise
- Mention years of experience
- List 2-3 key specializations
- End with your career goal or passion

---

## 🐛 Troubleshooting

### Site not loading after deployment

1. Check `vite.config.js` has correct `base` path
2. Verify `package.json` has correct homepage URL
3. Ensure gh-pages branch exists and is selected in Settings
4. Wait 5 minutes and clear browser cache

### Local development not working

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors

Check for:
- Syntax errors in JSON files (missing commas, quotes)
- Invalid links or URLs
- Missing required fields in content

---

## 📧 Need Help?

If you run into issues:

1. Check the [main README](./README.md) for general information
2. Review [Firebase Setup](./FIREBASE.md) if using testimonials
3. Read [Admin Panel Guide](./ADMIN.md) for admin features
4. Open an issue on the original repository
5. Contact: jermiah.jerome96@gmail.com

---

**Good luck with your portfolio! 🎉**

*Remember to star the original repository if this template helped you!*
