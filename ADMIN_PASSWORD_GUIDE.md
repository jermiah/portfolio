# Admin Panel Password Setup Guide

## How to Change Your Admin Password

Your admin panel password is stored in the `.env` file, which is **NOT** committed to GitHub for security reasons.

### Step 1: Edit the `.env` File

1. Open the file: `e:\GitHub\portfolio\.env`
2. Find this line:
   ```
   VITE_ADMIN_PASSWORD=admin123
   ```
3. Change `admin123` to your desired password:
   ```
   VITE_ADMIN_PASSWORD=YourNewSecurePassword123!
   ```
4. Save the file

### Step 2: Restart the Development Server

After changing the password, you **must restart** the development server:

1. Stop the server: Press `Ctrl+C` in the terminal
2. Start it again: `npm run dev`
3. The new password will now be active

## Security Best Practices

### ✅ DO:
- Use a strong, unique password (mix of letters, numbers, symbols)
- Change the password regularly
- Keep the `.env` file secure on your computer
- The `.env` file is already in `.gitignore` - it will NOT be pushed to GitHub

### ❌ DON'T:
- Don't use simple passwords like "password" or "admin"
- Don't share your `.env` file with anyone
- Don't commit the `.env` file to GitHub (it's already ignored)
- Don't hardcode the password directly in the code

## For Production (When Deploying)

When you deploy your portfolio to a hosting service (Vercel, Netlify, etc.):

1. **Don't upload the `.env` file**
2. Instead, add the environment variable through your hosting platform's dashboard:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - Add: `VITE_ADMIN_PASSWORD` with your secure password

## Accessing the Admin Panel

- **Local Development**: `http://localhost:5175/portfolio/#admin`
- **Production**: `https://your-domain.com/portfolio/#admin`

## Default Password

The default password is `admin123` - **Change this immediately!**

## File Security

The following files are automatically ignored by Git and will NOT be pushed to GitHub:
- `.env` ✅ (your password is safe here)
- `.env.local` ✅
- `.env.production` ✅

The `.env.example` file **is committed** to GitHub but contains only placeholder text, not your actual password.
