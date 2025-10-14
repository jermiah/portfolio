# ✅ TODO - Portfolio Deployment Checklist

Use this checklist to ensure everything is set up correctly before and after deployment.

---

## 📋 Pre-Deployment Checklist

### 1. File Setup
- [ ] Run setup script (`setup.bat` on Windows or `./setup.sh` on Mac/Linux)
- [ ] OR manually rename `index-new.html` to `index.html`
- [ ] OR manually rename `README-new.md` to `README.md`
- [ ] Create `public` folder and copy `photo.jpg` into it
- [ ] Backup old files to `old-portfolio` folder (optional)

### 2. Dependencies
- [ ] Node.js v16+ installed
- [ ] npm installed
- [ ] Run `npm install` successfully
- [ ] No installation errors

### 3. Content Review
- [ ] Review `src/content/en.json` for accuracy
- [ ] Review `src/content/fr.json` for accuracy
- [ ] Update resume link in JSON files
- [ ] Verify all external links work
- [ ] Check email and phone number
- [ ] Update social media links if needed

### 4. Assets
- [ ] Profile photo (`photo.jpg`) is in `public` folder
- [ ] Photo is optimized (< 500KB recommended)
- [ ] Photo is square or circular crop
- [ ] Photo looks good at 160x160px

### 5. Configuration
- [ ] `vite.config.js` has correct base path (`/portfolio/`)
- [ ] `package.json` has correct homepage URL
- [ ] Repository name matches base path
- [ ] Git repository is initialized

### 6. Local Testing
- [ ] Run `npm run dev` successfully
- [ ] Site loads at `http://localhost:5173`
- [ ] All sections visible and scrollable
- [ ] Navigation works smoothly
- [ ] Theme toggle works (☀️/🌙)
- [ ] Language toggle works (🌐 EN/FR)
- [ ] All links open correctly
- [ ] Images display properly
- [ ] Animations are smooth
- [ ] Like button triggers confetti
- [ ] Mobile responsive (test with browser dev tools)
- [ ] No console errors

---

## 🚀 Deployment Checklist

### 1. Build
- [ ] Run `npm run build` successfully
- [ ] No build errors
- [ ] `dist` folder created
- [ ] Check `dist` folder size (should be < 5MB)

### 2. Deploy
- [ ] Run `npm run deploy` successfully
- [ ] No deployment errors
- [ ] `gh-pages` branch created/updated
- [ ] GitHub Actions completed (if using)

### 3. GitHub Settings
- [ ] Go to repository Settings → Pages
- [ ] Source is set to `gh-pages` branch
- [ ] Custom domain (if any) is configured
- [ ] HTTPS is enforced

---

## ✅ Post-Deployment Checklist

### 1. Initial Verification (Wait 2-3 minutes after deployment)
- [ ] Visit `https://jermiah.github.io/portfolio/`
- [ ] Site loads without errors
- [ ] No 404 errors
- [ ] All assets load (images, fonts, styles)

### 2. Functionality Testing
- [ ] All sections visible
- [ ] Smooth scrolling works
- [ ] Navigation highlights active section
- [ ] Theme toggle works and persists
- [ ] Language toggle works and persists
- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Resume link works
- [ ] GitHub link works
- [ ] LinkedIn link works
- [ ] Email link works
- [ ] Phone link works

### 3. Content Verification
- [ ] Hero section displays correctly
- [ ] Overview section shows all content
- [ ] Skills are categorized properly
- [ ] Education timeline is correct
- [ ] Experience timeline is accurate
- [ ] Certifications display correctly
- [ ] Projects show with correct links
- [ ] Showcase section is complete
- [ ] Footer message displays
- [ ] Copyright year is current

### 4. Visual Testing
- [ ] Profile photo loads and looks good
- [ ] Particle background animates smoothly
- [ ] Typing animation works in hero
- [ ] Scroll animations trigger correctly
- [ ] Hover effects work on cards
- [ ] Timeline displays properly
- [ ] Project carousel works
- [ ] Like button is visible and functional
- [ ] Confetti animation triggers on like
- [ ] Footer displays correctly

### 5. Responsive Testing
- [ ] Test on mobile phone (iOS/Android)
- [ ] Test on tablet
- [ ] Test on desktop (various sizes)
- [ ] Mobile menu works
- [ ] Touch interactions work
- [ ] Text is readable on all devices
- [ ] Images scale properly
- [ ] No horizontal scrolling

### 6. Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 7. Performance Testing
- [ ] Page loads in < 3 seconds
- [ ] Animations are smooth (60fps)
- [ ] No lag when scrolling
- [ ] Images load quickly
- [ ] No console errors
- [ ] No console warnings

### 8. SEO & Meta Tags
- [ ] Page title is correct
- [ ] Meta description is present
- [ ] Open Graph tags work (test with Facebook debugger)
- [ ] Twitter card tags work
- [ ] Favicon displays

---

## 🔄 Regular Maintenance Checklist

### Monthly
- [ ] Review and update content
- [ ] Check all external links
- [ ] Update resume link if changed
- [ ] Add new projects
- [ ] Update certifications
- [ ] Check for dependency updates

### Quarterly
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Update dependencies (`npm update`)
- [ ] Review and optimize images
- [ ] Check Google Analytics (if added)
- [ ] Review and improve content

### Annually
- [ ] Update copyright year
- [ ] Review entire portfolio content
- [ ] Update profile photo if needed
- [ ] Major dependency updates
- [ ] Performance audit
- [ ] Accessibility audit

---

## 🐛 Troubleshooting Checklist

### If site doesn't load:
- [ ] Wait 2-3 minutes after deployment
- [ ] Check GitHub Pages settings
- [ ] Verify `gh-pages` branch exists
- [ ] Check base path in `vite.config.js`
- [ ] Clear browser cache
- [ ] Try incognito/private mode

### If assets don't load:
- [ ] Check browser console for errors
- [ ] Verify files are in `public` folder
- [ ] Check file paths in components
- [ ] Verify base path is correct
- [ ] Rebuild and redeploy

### If animations don't work:
- [ ] Check browser console for errors
- [ ] Verify Framer Motion is installed
- [ ] Check component imports
- [ ] Test in different browser
- [ ] Check for JavaScript errors

### If theme/language doesn't persist:
- [ ] Check localStorage is enabled
- [ ] Clear localStorage and test again
- [ ] Check browser console for errors
- [ ] Verify toggle functions work
- [ ] Test in incognito mode

---

## 📱 Share Your Portfolio

After successful deployment:

- [ ] Update LinkedIn profile with portfolio link
- [ ] Update resume with portfolio link
- [ ] Share on Twitter/X
- [ ] Share on relevant communities
- [ ] Add to email signature
- [ ] Update GitHub profile README
- [ ] Share with friends and colleagues

---

## 🎯 Optional Enhancements

Consider adding these features later:

- [ ] Google Analytics integration
- [ ] Contact form
- [ ] Blog section
- [ ] More language options
- [ ] Dark mode auto-switch
- [ ] Reading progress indicator
- [ ] Print stylesheet
- [ ] PWA features
- [ ] RSS feed
- [ ] Sitemap

---

## 📊 Success Metrics

Track these metrics after deployment:

- [ ] Page views
- [ ] Unique visitors
- [ ] Average session duration
- [ ] Bounce rate
- [ ] Most viewed sections
- [ ] Device breakdown (mobile/desktop)
- [ ] Geographic distribution
- [ ] Referral sources

---

## ✨ Final Steps

- [ ] Celebrate! 🎉
- [ ] Share your portfolio
- [ ] Get feedback from peers
- [ ] Make improvements based on feedback
- [ ] Keep content updated regularly

---

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Last Updated**: _____________

**Deployed URL**: https://jermiah.github.io/portfolio/

---

*Good luck with your new portfolio! 🚀*
