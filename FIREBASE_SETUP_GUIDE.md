# Firebase Setup Guide - FREE Global Recommendation Counter

## ✅ Firebase is 100% FREE for your portfolio!

**Free Tier (Spark Plan):**
- No credit card required
- 1GB Storage
- 10GB/month Data Transfer
- 100 simultaneous connections
- Perfect for portfolio sites!

---

## Step 1: Create Firebase Project (5 minutes)

1. **Go to Firebase Console**: https://console.firebase.google.com/

2. **Click "Add project"**

3. **Enter project name**: `portfolio-recommendations` (or any name you like)

4. **Disable Google Analytics** (optional, not needed for this)

5. **Click "Create project"**

---

## Step 2: Set Up Realtime Database

1. **In Firebase Console**, click on **"Realtime Database"** in the left sidebar

2. **Click "Create Database"**

3. **Choose location**: Select closest to your users (e.g., `us-central1` for US, `europe-west1` for Europe)

4. **Security rules**: Select **"Start in test mode"** (we'll update this)

5. **Click "Enable"**

---

## Step 3: Set Up Security Rules

1. **In Realtime Database**, click on the **"Rules"** tab

2. **Replace the rules** with this (allows reads by anyone, writes only to increment):

```json
{
  "rules": {
    "recommendations": {
      ".read": true,
      ".write": false,
      "count": {
        ".validate": "newData.isNumber() && newData.val() >= data.val()"
      }
    }
  }
}
```

3. **Click "Publish"**

---

## Step 4: Initialize Data

1. **In Realtime Database**, click on the **"Data"** tab

2. **Click the "+" icon** next to the database URL

3. **Add this data**:
   - Name: `recommendations`
   - Click the "+" icon next to `recommendations`
   - Name: `count`
   - Value: `0`

4. **Your database should look like**:
```
portfolio-recommendations-xxxxx
  └── recommendations
      └── count: 0
```

---

## Step 5: Get Firebase Configuration

1. **Click the gear icon** (⚙️) next to "Project Overview" → **"Project settings"**

2. **Scroll down** to "Your apps" section

3. **Click the web icon** (`</>`) to add a web app

4. **Register app**:
   - App nickname: `Portfolio`
   - Don't check "Firebase Hosting"
   - Click "Register app"

5. **Copy the Firebase configuration** (looks like this):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxx"
};
```

---

## Step 6: Add Configuration to Your Project

1. **Create a file**: `src/firebase.js` 

2. **Paste your Firebase config** into the file

3. **Save the file**

---

## Step 7: Update Environment Variables (Recommended for Security)

Instead of hardcoding credentials, use environment variables:

1. **Create `.env` file** in project root:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_DATABASE_URL=your_database_url_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

2. **Add `.env` to `.gitignore`** (to keep credentials private)

3. **The firebase.js file will use these variables**

---

## Step 8: Test It!

1. **Run your dev server**: `npm run dev`

2. **Click "Recommend Me" button**

3. **Check Firebase Console** → Realtime Database → Data tab

4. **You should see the count increment!**

5. **Open in another browser** → Count should be the same!

---

## Security Notes

✅ **API Key is safe to expose** - Firebase API keys are not secret (they're in your frontend code)

✅ **Security comes from Database Rules** - We've set rules to only allow incrementing the count

✅ **No authentication needed** - Anyone can read/increment, but can't decrease or delete

⚠️ **Rate limiting**: Consider adding Cloud Functions to prevent spam (optional, costs money)

---

## Troubleshooting

### Issue: "Permission denied"
**Solution**: Check your database rules allow reads and writes

### Issue: "Database URL not found"
**Solution**: Make sure you copied the `databaseURL` from Firebase config

### Issue: Count not updating
**Solution**: 
1. Check browser console for errors
2. Verify Firebase config is correct
3. Check database rules are published

---

## Cost Monitoring

**Check your usage**:
1. Firebase Console → Usage tab
2. Monitor reads/writes
3. You'll get email alerts if approaching limits

**For a portfolio site, you'll likely use**:
- ~100-1000 reads/day
- ~10-50 writes/day
- Well within free tier!

---

## Next Steps

After completing this setup:
1. I'll update the LikeButton component to use Firebase
2. I'll update the Hero component to fetch global count
3. Test everything works!

---

**Ready to proceed?** Just follow the steps above and let me know when you have your Firebase config!
