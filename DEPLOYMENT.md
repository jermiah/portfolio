# 🚀 Deployment Guide

This guide will help you deploy your forked React portfolio to GitHub Pages.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- ✅ Node.js installed (v16 or higher)
- ✅ Forked this repository to your GitHub account
- ✅ Cloned your fork locally
- ✅ Updated `vite.config.js` with your repository name
- ✅ Updated `package.json` with your GitHub username and repo name
- ✅ Customized content in `src/content/en.json` and `src/content/fr.json`
- ✅ Replaced `public/photo.jpg` with your photo

---

## 🔄 Step-by-Step Deployment

### Step 1: Fork and Clone

1. **Fork this repository** on GitHub (click the Fork button)
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

### Step 2: Configure for Your GitHub Pages

**Important**: You must update these configuration files with your information!

#### Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // ← Change this to your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
```

#### Update `package.json`:

Find and update the `homepage` field:

```json
{
  "name": "portfolio",
  "version": "2.0.0",
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",  // ← Change this
  // ... rest of the file
}
```

**Example**: If your GitHub username is `johndoe` and your repo is named `my-portfolio`:
- `vite.config.js`: `base: '/my-portfolio/'`
- `package.json`: `"homepage": "https://johndoe.github.io/my-portfolio"`

### Step 3: Customize Your Content

Edit these files with your information:

1. **`src/content/en.json`** - Your English content
2. **`src/content/fr.json`** - Your French content (or delete if not needed)
3. **`public/photo.jpg`** - Replace with your photo

See the [Content Customization Checklist](#-content-customization-checklist) below.

### Step 4: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite
- TailwindCSS
- Framer Motion
- i18next
- React Icons
- canvas-confetti
- gh-pages

### Step 5: Test Locally

```bash
npm run dev
```

Open your browser to `http://localhost:5173` and verify:
- ✅ All sections load correctly
- ✅ Theme toggle works (light/dark)
- ✅ Language toggle works (EN/FR)
- ✅ Animations are smooth
- ✅ Links work correctly
- ✅ Responsive design on mobile
- ✅ Like button triggers confetti

### Step 6: Enable GitHub Pages

Before deploying, enable GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", it will show "GitHub Pages is currently disabled"
4. Don't worry - it will be enabled automatically after first deployment

### Step 7: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 8: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages
4. Your site will be live at `https://jermiah.github.io/portfolio/`

### Step 9: Verify Deployment

1. Wait 1-2 minutes for GitHub Pages to build
2. Go to your repository **Settings** → **Pages**
3. You should see: "Your site is published at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`"
4. Visit your live site
5. Test all features
6. Check on mobile devices

**Troubleshooting**: If you see a 404 error:
- Verify the `base` path in `vite.config.js` matches your repo name exactly
- Check that the `gh-pages` branch was created
- Wait a few more minutes for GitHub Pages to finish building

---

## 🔧 Configuration Details

### Critical Configuration Files

#### 1. `vite.config.js`

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // Must match your GitHub repository name
})
```

#### 2. `package.json`

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

#### 3. GitHub Pages Settings

After first deployment:
1. Go to **Settings** → **Pages**
2. Source should be set to `gh-pages` branch
3. Your site URL will be displayed

### Common Configuration Mistakes

❌ **Wrong**: `base: '/portfolio/'` (when your repo is named `my-site`)
✅ **Correct**: `base: '/my-site/'`

❌ **Wrong**: `homepage: "https://jermiah.github.io/portfolio"`
✅ **Correct**: `homepage: "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"`

---

## 📝 Content Customization Checklist

After forking, update these in `src/content/en.json`:

### Essential Updates

- [ ] **hero.name** - Your full name
- [ ] **hero.title** - Your job title
- [ ] **hero.subtitle** - Your tagline
- [ ] **hero.links.resume** - Link to your resume
- [ ] **hero.links.github** - Your GitHub profile URL
- [ ] **hero.links.linkedin** - Your LinkedIn profile URL
- [ ] **contact.email** - Your email address
- [ ] **contact.phone** - Your phone number (optional)

### Content Sections

- [ ] **overview.content** - Your professional summary
- [ ] **overview.highlights** - Your key strengths
- [ ] **skills.categories** - Your technical and professional skills
- [ ] **education.items** - Your education history
- [ ] **experience.items** - Your work experience
- [ ] **certifications.items** - Your certifications
- [ ] **projects.categories** - Your projects with links
- [ ] **showcase** - Your awards, hackathons, community involvement

### Assets

- [ ] Replace `public/photo.jpg` with your professional photo
- [ ] Update `index.html` meta tags (title, description, author)

### Updating Content After Deployment

1. **Edit JSON files**:
   ```bash
   # Edit English content
   code src/content/en.json
   
   # Edit French content (if using)
   code src/content/fr.json
   ```

2. **Test changes locally**:
   ```bash
   npm run dev
   ```

3. **Rebuild and redeploy**:
   ```bash
   npm run build
   npm run deploy
   ```

4. **Wait 1-2 minutes** for changes to appear on the live site

---

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    light: '#3b82f6',  // Change this
    dark: '#60a5fa',   // Change this
  },
  accent: {
    light: '#8b5cf6',  // Change this
    dark: '#a78bfa',   // Change this
  },
}
```

### Update Profile Photo

1. Replace `public/photo.jpg` with your new photo
2. Ensure the filename is `photo.jpg` or update references in:
   - `src/components/Hero.jsx`
   - `index.html` (meta tags)

### Modify Animations

Edit animation settings in component files using Framer Motion:

```javascript
// Example: Change fade-in duration
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.0 }}  // Change this value
>
```

---

## 🐛 Troubleshooting

### Issue: Site shows 404 error

**Solution**: 
- Check that `gh-pages` branch exists
- Verify GitHub Pages is enabled in repository settings
- Ensure `base: '/portfolio/'` is set in `vite.config.js`

### Issue: Assets not loading (images, styles)

**Solution**:
- Verify the base path in `vite.config.js` matches your repository name
- Check that files are in the `public` folder
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: Build fails

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Issue: Theme/Language not persisting

**Solution**:
- Check browser localStorage is enabled
- Clear localStorage: `localStorage.clear()` in browser console
- Verify the toggle functions in `src/App.jsx` and `src/components/Navbar.jsx`

### Issue: Animations not working

**Solution**:
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors
- Verify component imports are correct

---

## 📊 Performance Optimization

### Optimize Images

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize your photo
sharp -i photo.jpg -o public/photo.jpg --quality 85 --progressive
```

### Analyze Bundle Size

```bash
npm run build

# Check dist folder size
du -sh dist/
```

### Enable Compression

GitHub Pages automatically serves files with gzip compression.

---

## 🔒 Security

### Environment Variables

If you need to add API keys or secrets:

1. Create `.env` file (already in `.gitignore`)
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_KEY=your_key_here
   ```
3. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

**Never commit `.env` files to Git!**

---

## 🔄 Keeping Your Fork Updated

### Sync with Original Template

To get the latest features and bug fixes from the original template:

```bash
# One-time setup: Add original repo as upstream
git remote add upstream https://github.com/jermiah/portfolio.git

# Fetch latest changes
git fetch upstream

# Merge updates into your fork
git checkout main
git merge upstream/main

# Resolve any conflicts in your customized files
# Then push to your fork
git push origin main

# Redeploy with updates
npm run build
npm run deploy
```

**Note**: You may need to resolve conflicts in files you've customized (like `en.json`, `fr.json`).

### Automated Deployment with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This will automatically deploy on every push to the main branch.

---

## 📱 Testing

### Test on Multiple Devices

1. **Desktop**: Chrome, Firefox, Safari, Edge
2. **Mobile**: iOS Safari, Chrome Mobile
3. **Tablet**: iPad, Android tablets

### Test Checklist

- [ ] All sections visible and scrollable
- [ ] Navigation works smoothly
- [ ] Theme toggle (light/dark)
- [ ] Language toggle (EN/FR)
- [ ] All links open correctly
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Like button works with confetti
- [ ] Responsive on mobile
- [ ] No console errors

---

## 🆘 Getting Help

If you encounter issues:

1. **Check Configuration**:
   - Verify `vite.config.js` base path matches your repo name
   - Verify `package.json` homepage URL is correct
   - Ensure `gh-pages` branch exists in your repository

2. **Common Issues**:
   - 404 Error → Check base path configuration
   - Assets not loading → Clear browser cache, check base path
   - Build fails → Delete `node_modules` and reinstall

3. **Resources**:
   - Check the browser console for errors (F12)
   - Review the [README.md](README.md) file
   - Check [Vite documentation](https://vitejs.dev/)
   - Check [React documentation](https://react.dev/)
   - Check [GitHub Pages documentation](https://docs.github.com/en/pages)

4. **Get Support**:
   - Open an issue in the original repository
   - Check existing issues for solutions
   - Ask in the discussions section

---

## ✅ Post-Deployment

After successful deployment:

1. ✅ Test the live site thoroughly
2. ✅ Share your portfolio link
3. ✅ Update your LinkedIn/resume with the new link
4. ✅ Monitor GitHub Pages status
5. ✅ Keep content updated regularly

---

**🎉 Congratulations! Your modern portfolio is now live!**

Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🌟 Show Your Support

If this template helped you create your portfolio:

1. ⭐ **Star the original repository**
2. 🍴 **Share it with others**
3. 💬 **Tweet about it** and tag the author
4. 🤝 **Contribute improvements** back to the template

---

## 📊 Post-Deployment Checklist

After successful deployment:

- [ ] Test all sections and navigation
- [ ] Verify all links work (resume, GitHub, LinkedIn, projects)
- [ ] Test theme toggle (light/dark)
- [ ] Test language toggle (EN/FR)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test the "Hire Me" contact form
- [ ] Share your portfolio link!

---

*Made with ❤️ using React, Vite, and modern web technologies*
