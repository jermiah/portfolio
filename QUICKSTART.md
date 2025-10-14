# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

---

## 🚀 For Windows Users

1. **Double-click** `setup.bat`
2. Choose option **1** (Initial setup)
3. Wait for installation to complete
4. Choose option **3** to preview locally
5. When ready, choose option **6** to deploy

---

## 🚀 For Mac/Linux Users

1. **Make script executable**:
   ```bash
   chmod +x setup.sh
   ```

2. **Run the setup script**:
   ```bash
   ./setup.sh
   ```

3. Choose option **1** (Initial setup)
4. Wait for installation to complete
5. Choose option **3** to preview locally
6. When ready, choose option **6** to deploy

---

## 🚀 Manual Setup (All Platforms)

### Step 1: Prepare Files

```bash
# Backup old files (optional)
mkdir old-portfolio
mv index.html old-portfolio/
mv script.js old-portfolio/
mv styles_v2.css old-portfolio/
mv webgl.js old-portfolio/

# Rename new files
mv index-new.html index.html
mv README-new.md README.md

# Setup public folder
mkdir public
cp photo.jpg public/
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Step 4: Deploy

```bash
npm run build
npm run deploy
```

Your site will be live at `https://jermiah.github.io/portfolio/`

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at `https://jermiah.github.io/portfolio/`
- [ ] All sections are visible
- [ ] Theme toggle works (☀️/🌙)
- [ ] Language toggle works (🌐 EN/FR)
- [ ] All links open correctly
- [ ] Images display properly
- [ ] Animations are smooth
- [ ] Like button works with confetti 🎉
- [ ] Mobile responsive design works

---

## 🎨 Customization

### Update Content

Edit these files:
- `src/content/en.json` - English content
- `src/content/fr.json` - French content

Then redeploy:
```bash
npm run build && npm run deploy
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#3b82f6',  // Your color here
    dark: '#60a5fa',
  }
}
```

### Update Photo

Replace `public/photo.jpg` with your photo.

---

## 🆘 Troubleshooting

### Issue: npm install fails

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Site shows 404

**Solution**:
- Wait 2-3 minutes after deployment
- Check GitHub Pages settings in repository
- Verify `base: '/portfolio/'` in `vite.config.js`

### Issue: Changes not showing

**Solution**:
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for GitHub Pages to update
- Check if build was successful

---

## 📚 More Information

- **Full Documentation**: See [README.md](README.md)
- **Deployment Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/

---

## 🎉 You're All Set!

Your modern, bilingual, animated portfolio is ready to impress!

**Live Site**: https://jermiah.github.io/portfolio/

---

*Made with ❤️ by Jermiah Jerome*
