# 🚀 Deployment Guide

This guide will help you deploy your new React portfolio to GitHub Pages.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- ✅ Node.js installed (v16 or higher)
- ✅ Git repository initialized
- ✅ GitHub account with repository access
- ✅ All content updated in `src/content/en.json` and `src/content/fr.json`

---

## 🔄 Step-by-Step Deployment

### Step 1: Backup Old Files (Optional)

If you want to keep your old portfolio files:

```bash
# Create a backup folder
mkdir old-portfolio
mv index.html old-portfolio/
mv script.js old-portfolio/
mv styles_v2.css old-portfolio/
mv webgl.js old-portfolio/
mv README.md old-portfolio/
```

### Step 2: Rename New Files

```bash
# Rename the new files to replace the old ones
mv index-new.html index.html
mv README-new.md README.md
```

### Step 3: Create Public Folder and Move Photo

```bash
# Create public folder if it doesn't exist
mkdir -p public

# Copy photo to public folder
cp photo.jpg public/
```

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

### Step 6: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages
4. Your site will be live at `https://jermiah.github.io/portfolio/`

### Step 8: Verify Deployment

1. Wait 1-2 minutes for GitHub Pages to update
2. Visit `https://jermiah.github.io/portfolio/`
3. Test all features on the live site
4. Check on mobile devices

---

## 🔧 Configuration

### GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Ensure **Source** is set to `gh-pages` branch
4. The site should be published at `https://jermiah.github.io/portfolio/`

### Base Path Configuration

The `vite.config.js` is already configured with:

```javascript
base: '/portfolio/'
```

This ensures all assets load correctly on GitHub Pages.

---

## 📝 Updating Content

### To Update Content After Deployment:

1. **Edit JSON files**:
   ```bash
   # Edit English content
   nano src/content/en.json
   
   # Edit French content
   nano src/content/fr.json
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

## 🔄 Continuous Deployment

### Option 1: Manual Deployment

```bash
npm run deploy
```

### Option 2: GitHub Actions (Automated)

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

1. Check the browser console for errors (F12)
2. Review the [README.md](README.md) file
3. Check [Vite documentation](https://vitejs.dev/)
4. Check [React documentation](https://react.dev/)
5. Check [GitHub Pages documentation](https://docs.github.com/en/pages)

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

Visit: `https://jermiah.github.io/portfolio/`

---

*Made with ❤️ using React, Vite, and modern web technologies*
