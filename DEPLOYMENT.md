# 🚀 Deployment Guide

Complete guide for deploying your portfolio to GitHub Pages from any branch.

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Deployment Options](#deployment-options)
- [Step-by-Step Instructions](#step-by-step-instructions)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

---

## 🎯 Quick Start

Deploy from your current branch in 3 commands:

```bash
# 1. Commit your changes
git add .
git commit -m "Your commit message"

# 2. Push to GitHub
git push origin $(git branch --show-current)

# 3. Deploy to GitHub Pages
npm run deploy
```

**That's it!** Your site will be live at: `https://jermiah.github.io/portfolio`

---

## 🔀 Deployment Options

This project uses `gh-pages` package which allows you to deploy from ANY branch.

### Available Deploy Commands:

| Command | Description | Target Branch |
|---------|-------------|---------------|
| `npm run deploy` | Deploy to production | `gh-pages` |
| `npm run deploy:test` | Deploy to test environment | `gh-pages-test` |

---

## 📖 Step-by-Step Instructions

### Option 1: Deploy Feature Branch to Production (Recommended for Testing)

This allows you to test your changes on the live site without merging to `main`.

```bash
# 1. Switch to your feature branch
git checkout your-feature-branch

# 2. Make your changes and commit
git add .
git commit -m "feat: Add new feature"

# 3. Push branch to GitHub
git push origin your-feature-branch

# 4. Deploy from feature branch
npm run deploy

# 5. Wait 1-2 minutes, then visit your site
# https://jermiah.github.io/portfolio
```

**Important:** The `gh-pages` package builds your project and pushes to the `gh-pages` branch. GitHub Pages always serves from `gh-pages` branch, regardless of which source branch you deployed from.

---

### Option 2: Deploy to Test Branch (Separate Testing)

If you want a separate test deployment:

```bash
# 1. Deploy to test branch
npm run deploy:test

# 2. Configure GitHub Pages (one-time setup):
#    - Go to: https://github.com/jermiah/portfolio/settings/pages
#    - Under "Source", select branch: gh-pages-test
#    - Save

# 3. Visit your test site
# https://jermiah.github.io/portfolio
```

**Note:** You can only configure GitHub Pages to serve from ONE branch at a time. To switch between production and test, change the source branch in GitHub settings.

---

### Option 3: Standard Production Deployment (From Main Branch)

The recommended workflow for production releases:

```bash
# 1. Merge your feature branch to main
git checkout main
git merge your-feature-branch

# 2. Push to GitHub
git push origin main

# 3. Deploy to production
npm run deploy

# 4. Visit your site
# https://jermiah.github.io/portfolio
```

---

## 🔧 How It Works

### Deployment Process:

1. **Build**: `vite build` creates optimized production files in `/dist`
2. **Deploy**: `gh-pages -d dist` pushes `/dist` contents to `gh-pages` branch
3. **Serve**: GitHub Pages serves the site from `gh-pages` branch

### Branch Structure:

```
main (or feature-branch)    →  Your source code
    ↓
gh-pages                    →  Built/compiled files (auto-generated)
    ↓
GitHub Pages                →  Live website
```

**Key Point:** You can deploy from ANY source branch (main, feature, dev, etc.), but GitHub Pages always serves from the `gh-pages` branch.

---

## 🌍 Environment Variables

### For Local Development:

Create a `.env` file in the project root:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Admin Panel Password
VITE_ADMIN_PASSWORD=your_secure_password
```

### For Production (GitHub Pages):

**Important:** `.env` files are NOT deployed to GitHub Pages for security reasons.

**Option 1: Hardcode in `firebase.js` (Not Recommended)**
- Only if you're okay with exposing Firebase config (it's client-side anyway)
- Replace `import.meta.env.VITE_*` with actual values

**Option 2: Use GitHub Secrets (Advanced)**
- Requires GitHub Actions workflow
- More secure but complex setup

**Option 3: Environment Variables in Build**
- Set environment variables in your deployment command
- Example: `VITE_FIREBASE_API_KEY=xxx npm run deploy`

For most portfolio use cases, **Option 1 is acceptable** since Firebase config is public in client-side code anyway. Just ensure proper Firebase security rules are set up.

---

## 🧪 Testing Your Deployment

After deploying, verify everything works:

### Checklist:

- [ ] Site loads at `https://jermiah.github.io/portfolio`
- [ ] All pages and sections render correctly
- [ ] Images and assets load properly
- [ ] Language toggle works (EN/FR)
- [ ] Dark mode toggle works
- [ ] Firebase features work:
  - [ ] Like button increments count
  - [ ] Testimonial form submits
  - [ ] Admin panel accessible (if configured)
- [ ] Browser console shows no errors
- [ ] Mobile responsive design works

### Testing Hybrid Fingerprint System:

1. **Clear localStorage**: Open browser DevTools → Console → Run:
   ```javascript
   localStorage.clear()
   ```

2. **Click "Love My Profile"** button
   - Should increment counter
   - Should show confetti animation

3. **Check Firebase Console**:
   - Navigate to Realtime Database
   - Verify `recommendations/count` incremented
   - Verify `recommendations/users/{fingerprint}` exists

4. **Try clicking again**:
   - Should be blocked
   - Should show "Already loved" message

5. **Clear localStorage and try again**:
   - Should STILL be blocked (Firebase catches it)
   - This proves the hybrid system works!

---

## 🐛 Troubleshooting

### Deployment fails

**Problem:** `npm run deploy` gives error

**Solutions:**
```bash
# 1. Make sure gh-pages is installed
npm install gh-pages --save-dev

# 2. Try rebuilding node_modules
rm -rf node_modules package-lock.json
npm install

# 3. Try clearing Vite cache
rm -rf .vite dist
npm run build

# 4. Check git remote is configured
git remote -v
# Should show: origin https://github.com/jermiah/portfolio.git
```

---

### Site shows 404 error

**Problem:** Deployed but site shows "404 Not Found"

**Solutions:**

1. **Check GitHub Pages Settings:**
   - Go to: `https://github.com/jermiah/portfolio/settings/pages`
   - Source should be: `gh-pages` branch, `/ (root)`
   - Wait 1-2 minutes after deployment

2. **Check base path in vite.config.js:**
   ```javascript
   export default {
     base: '/portfolio/'  // Should match repo name
   }
   ```

3. **Check package.json homepage:**
   ```json
   "homepage": "https://jermiah.github.io/portfolio"
   ```

---

### Assets not loading (blank page)

**Problem:** Page loads but no CSS/JS/images

**Solutions:**

1. **Check browser console** for 404 errors on assets

2. **Verify base path** matches your repository name:
   ```javascript
   // vite.config.js
   base: '/portfolio/'  // Must match repo name exactly
   ```

3. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or open in incognito/private window

---

### Firebase not working in production

**Problem:** Firebase features don't work on deployed site

**Solutions:**

1. **Check Firebase config** is available in production:
   - Open browser DevTools → Console
   - Look for Firebase initialization errors

2. **Verify Firebase Security Rules** are published:
   - Go to Firebase Console → Realtime Database → Rules
   - Ensure rules allow read/write as needed

3. **Check Firebase domain whitelist:**
   - Firebase Console → Authentication → Settings
   - Add `jermiah.github.io` to authorized domains

4. **Consider hardcoding credentials** in `firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "actual_key_here",  // Instead of import.meta.env
     // ... other values
   };
   ```

---

### Changes not appearing on live site

**Problem:** Deployed but changes don't show

**Solutions:**

1. **Wait 1-2 minutes** after deployment (GitHub Pages needs time to rebuild)

2. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

3. **Check deployment completed:**
   ```bash
   git branch -r  # Should see remotes/origin/gh-pages
   ```

4. **Check GitHub Actions** (if configured):
   - Go to: `https://github.com/jermiah/portfolio/actions`
   - Ensure latest workflow completed successfully

5. **Verify correct branch is deployed:**
   - GitHub → Settings → Pages
   - Should show: "Your site is published at https://..."

---

## 💡 Best Practices

### 1. Test Locally First

Always test locally before deploying:

```bash
# Build production version locally
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173 and test thoroughly
```

---

### 2. Use Feature Branches

Recommended Git workflow:

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes, commit regularly
git add .
git commit -m "feat: Add new feature"

# Deploy from feature branch for testing
npm run deploy

# Once satisfied, merge to main
git checkout main
git merge feature/new-feature
git push origin main

# Final production deploy from main
npm run deploy
```

---

### 3. Version Control

Tag important releases:

```bash
# After successful deployment
git tag -a v2.0.0 -m "Release v2.0.0 - Hybrid fingerprint system"
git push origin v2.0.0
```

---

### 4. Backup Firebase Data

Before major deployments:

1. Go to Firebase Console → Realtime Database
2. Click menu (⋮) → Export JSON
3. Save backup file locally
4. Store in safe location

---

### 5. Monitor Performance

After deployment, check:

- **Lighthouse Score**: Run in Chrome DevTools
- **Firebase Usage**: Check Firebase Console → Usage
- **GitHub Pages**: Check Settings → Pages for status

---

## 🔐 Security Notes

### What's Safe to Commit:

- ✅ Source code
- ✅ Firebase config (public anyway in client-side code)
- ✅ Package.json
- ✅ Configuration files

### Never Commit:

- ❌ `.env` file (already in .gitignore)
- ❌ `node_modules/` (already in .gitignore)
- ❌ Private keys or secrets
- ❌ `.env.local`, `.env.production`

### Firebase Security:

- Ensure proper Security Rules are configured
- Firebase config is public, security is in the rules
- See [FIREBASE.md](./FIREBASE.md) for detailed setup

---

## 🔄 Rollback to Previous Version

If deployment breaks something:

```bash
# Option 1: Deploy from main branch
git checkout main
npm run deploy

# Option 2: Revert to specific commit
git log  # Find commit hash
git checkout <commit-hash>
npm run deploy

# Option 3: Force push old gh-pages
git checkout gh-pages
git reset --hard <old-commit>
git push origin gh-pages --force
```

---

## 📊 Deployment Checklist

Before deploying:

- [ ] All features tested locally
- [ ] No console errors in browser DevTools
- [ ] Firebase config is correct
- [ ] Firebase Security Rules updated
- [ ] All tests passing (if you have tests)
- [ ] README and documentation updated
- [ ] Git committed with meaningful message
- [ ] Git pushed to GitHub

After deploying:

- [ ] Site loads correctly
- [ ] All features work as expected
- [ ] Mobile responsive
- [ ] Both light/dark themes work
- [ ] Both EN/FR languages work
- [ ] Firebase features working
- [ ] No 404 errors on assets
- [ ] Performance is acceptable

---

## 📚 Related Documentation

- [Setup Guide](./SETUP.md) - Initial project setup
- [Firebase Guide](./FIREBASE.md) - Firebase configuration
- [Admin Panel Guide](./ADMIN.md) - Managing testimonials
- [Main README](./README.md) - Project overview

---

## 🆘 Need Help?

If you encounter issues:

1. Check this guide's [Troubleshooting](#troubleshooting) section
2. Check browser DevTools Console for errors
3. Review GitHub Pages documentation: https://docs.github.com/en/pages
4. Check `gh-pages` package docs: https://www.npmjs.com/package/gh-pages
5. Contact: jermiah.jerome96@gmail.com

---

## 🎉 Success!

After successful deployment, your portfolio is live at:

**🌐 https://jermiah.github.io/portfolio**

Share it with the world! 🚀

---

**Pro Tip:** You can deploy from any branch without merging to main. This allows you to test features in production before finalizing them. Perfect for iterative development!

*Happy deploying! 🎨*
