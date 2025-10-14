# 📝 Content Update Guide

## Quick Answer: Do I Need to Rebuild After Changing JSON?

**Yes, you need to rebuild and redeploy** after changing content in JSON files because:

1. **Vite bundles JSON files** into the JavaScript build
2. **Static site** means content is compiled at build time, not runtime
3. **GitHub Pages serves static files** from the `dist` folder

---

## 🔄 Workflow for Updating Content

### For Local Development (Testing Changes)

```bash
# 1. Edit your JSON files
code src/content/en.json
code src/content/fr.json

# 2. Save the files

# 3. If dev server is running, it will auto-reload!
# If not running, start it:
npm run dev

# 4. Check changes at http://localhost:5173
```

**✅ Hot Module Replacement (HMR)**: When `npm run dev` is running, Vite automatically reloads your changes! You don't need to restart the server.

---

### For Production (Deploying to GitHub Pages)

```bash
# 1. Edit your JSON files
code src/content/en.json

# 2. Test locally first
npm run dev
# Verify changes look good

# 3. Build and deploy
npm run deploy
# This runs: vite build && gh-pages -d dist

# 4. Wait 1-2 minutes for GitHub Pages to update

# 5. Visit your live site
# https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🎯 What Requires Rebuild vs What Doesn't

### ✅ Auto-Reloads (No Rebuild Needed - Dev Only)

When `npm run dev` is running:
- ✅ JSON content changes
- ✅ Component file changes
- ✅ CSS/Tailwind changes
- ✅ Most code changes

### ❌ Requires Rebuild (Production)

For GitHub Pages deployment:
- ❌ Any JSON content changes
- ❌ Any code changes
- ❌ Any styling changes
- ❌ Any configuration changes

**Why?** GitHub Pages serves static files from the `dist` folder, which is only updated when you run `npm run build` or `npm run deploy`.

---

## 💡 Pro Tips

### 1. **Use Dev Server for Quick Edits**

```bash
# Start dev server (leave it running)
npm run dev

# Edit JSON files
# Save → Auto-reload → See changes instantly!
```

### 2. **Batch Your Changes**

Instead of deploying after every small change:
- Make multiple content updates
- Test everything locally with `npm run dev`
- Deploy once when satisfied

### 3. **Quick Deploy Command**

```bash
# One command to build and deploy
npm run deploy
```

This is equivalent to:
```bash
npm run build
gh-pages -d dist
```

---

## 📋 Common Content Updates

### Update Your Name/Title

```json
// src/content/en.json
{
  "hero": {
    "name": "Your New Name",
    "title": "Your New Title"
  }
}
```

**Steps:**
1. Edit `src/content/en.json`
2. Save file
3. If dev server running → See changes instantly
4. When ready: `npm run deploy`

### Add a New Project

```json
// src/content/en.json
{
  "projects": {
    "categories": [
      {
        "name": "Your Category",
        "items": [
          {
            "title": "New Project",
            "description": "Description here",
            "links": {
              "code": "https://github.com/..."
            },
            "tags": ["Tag1", "Tag2"]
          }
        ]
      }
    ]
  }
}
```

**Steps:**
1. Edit JSON
2. Test with `npm run dev`
3. Deploy with `npm run deploy`

### Update Contact Email

```json
// src/content/en.json
{
  "contact": {
    "email": "your.new.email@example.com"
  }
}
```

**Steps:**
1. Edit JSON
2. Deploy: `npm run deploy`

---

## ⚡ Speed Up Your Workflow

### Option 1: Keep Dev Server Running

```bash
# Terminal 1: Keep this running
npm run dev

# Terminal 2: Edit files, commit, deploy
code src/content/en.json
# Make changes, save
# See instant preview in browser
# When satisfied:
npm run deploy
```

### Option 2: Use Watch Mode (Advanced)

Create a script to auto-deploy on changes (optional):

```json
// package.json
{
  "scripts": {
    "watch": "nodemon --watch src/content -e json --exec 'npm run deploy'"
  }
}
```

Then:
```bash
npm install -g nodemon
npm run watch
```

**Warning**: This deploys on every save! Use carefully.

---

## 🐛 Troubleshooting

### Changes Not Showing on Live Site?

1. **Clear browser cache**: Ctrl+Shift+R (hard refresh)
2. **Wait 2-3 minutes**: GitHub Pages takes time to update
3. **Check gh-pages branch**: Verify it was updated on GitHub
4. **Verify build**: Check if `dist` folder has new files

### Dev Server Not Auto-Reloading?

1. **Restart dev server**:
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```

2. **Clear Vite cache**:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

### Build Fails?

```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

---

## 📊 Deployment Time Comparison

| Action | Time | Command |
|--------|------|---------|
| Edit JSON locally | Instant | Just save file |
| See changes in dev | < 1 second | Auto-reload |
| Build for production | 10-30 seconds | `npm run build` |
| Deploy to GitHub Pages | 1-2 minutes | `npm run deploy` |
| GitHub Pages update | 1-2 minutes | Automatic |

**Total time from edit to live**: ~3-5 minutes

---

## ✅ Best Practices

1. **Always test locally first** with `npm run dev`
2. **Batch multiple changes** before deploying
3. **Keep dev server running** while editing
4. **Commit changes to git** before deploying
5. **Wait for GitHub Pages** to finish building

---

## 🎓 Summary

**Development (Local Testing)**:
- ✅ Changes auto-reload with `npm run dev`
- ✅ No rebuild needed
- ✅ Instant feedback

**Production (Live Site)**:
- ❌ Must rebuild: `npm run build`
- ❌ Must redeploy: `npm run deploy`
- ⏱️ Wait 1-2 minutes for GitHub Pages

**Quick Workflow**:
```bash
# 1. Edit JSON
# 2. Test: npm run dev
# 3. Deploy: npm run deploy
# 4. Wait 2 minutes
# 5. Check live site
```

---

*Made with ❤️ to help you update your portfolio easily!*
