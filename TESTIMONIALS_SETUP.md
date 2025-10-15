# Testimonial System Setup Guide

## Overview

Your portfolio now includes a complete testimonial/recommendation system where visitors can write recommendations with their LinkedIn profiles.

## Features

✅ **Testimonial Form** - Modal popup for submitting recommendations
✅ **Auto-scrolling Carousel** - Displays testimonials
✅ **Responsive Design** - Desktop (left side) & Mobile (below buttons)
✅ **Firebase Integration** - Real-time data storage
✅ **Moderation System** - Manual approval before display

## Firebase Security Rules

Add these rules to your Firebase Realtime Database:

```json
{
  "rules": {
    "recommendations": {
      "count": {
        ".read": true,
        ".write": "!data.exists() || data.val() < newData.val()"
      }
    },
    "visitors": {
      "count": {
        ".read": true,
        ".write": "!data.exists() || data.val() < newData.val()"
      }
    },
    "testimonials": {
      ".read": "data.child('approved').val() === true",
      ".indexOn": ["timestamp", "approved"],
      "$testimonialId": {
        ".write": "!data.exists()",
        ".validate": "newData.hasChildren(['name', 'text', 'timestamp', 'approved'])",
        "name": {
          ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 50"
        },
        "linkedIn": {
          ".validate": "newData.isString() && newData.val().length <= 200"
        },
        "role": {
          ".validate": "newData.isString() && newData.val().length <= 100"
        },
        "text": {
          ".validate": "newData.isString() && newData.val().length >= 20 && newData.val().length <= 500"
        },
        "timestamp": {
          ".validate": "newData.isNumber()"
        },
        "approved": {
          ".validate": "newData.isBoolean() && newData.val() === false"
        }
      }
    }
  }
}
```

### How to Add Rules:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `portfolio-recommendation-b5dd3`
3. Go to **Build** → **Realtime Database**
4. Click the **Rules** tab
5. Replace existing rules with the above
6. Click **Publish**

## Security Features

### Testimonials Rules Explained:

- **Read**: Only approved testimonials can be read publicly
- **Write**: Anyone can submit (`.write: "!data.exists()"`), but only once per entry
- **Validation**:
  - Name: Required, 1-50 characters
  - LinkedIn: Optional, max 200 characters
  - Role: Optional, max 100 characters
  - Text: Required, 20-500 characters
  - Approved: Must be `false` on submission (prevents self-approval)

### Counters Rules:

- **Read**: Anyone can read the counts
- **Write**: Only allows increments (prevents tampering)

## How to Approve Testimonials

Testimonials are submitted with `approved: false` by default. To approve them:

1. Go to Firebase Console → Realtime Database → **Data** tab
2. Navigate to `testimonials` → `[testimonial-id]`
3. Click on the `approved` field
4. Change from `false` to `true`
5. The testimonial will now appear on your website instantly!

## Layout

### Desktop (Large Screens):
- Testimonial carousel appears on the **left side** of the hero section
- Auto-scrolls every 5 seconds
- Width: 320px (w-80)

### Mobile & Tablet:
- Testimonial carousel appears **below** GitHub and LinkedIn buttons
- Takes full width up to 448px (max-w-md)

## Components Created

1. **TestimonialForm.jsx** - Modal form for submitting recommendations
   - Fields: Name, LinkedIn, Role, Testimonial text
   - Validation and error handling
   - Success message after submission

2. **TestimonialCarousel.jsx** - Auto-scrolling carousel
   - Shows approved testimonials only
   - Navigation arrows and dots
   - LinkedIn profile link for each testimonial
   - Auto-scrolls every 5 seconds

3. **Updated Hero.jsx** - Integrated components
   - "Write Recommendation" button (purple/pink gradient)
   - Desktop carousel on left side
   - Mobile carousel below buttons
   - Modal form management

## Firebase Functions Added

### `submitTestimonial(testimonial)`
Submits a new testimonial to Firebase
```javascript
await submitTestimonial({
  name: 'John Doe',
  linkedIn: 'https://linkedin.com/in/johndoe',
  role: 'Software Engineer',
  text: 'Great experience working together!'
});
```

### `getTestimonials(limit = 20)`
Fetches approved testimonials (one-time)
```javascript
const testimonials = await getTestimonials(10);
```

### `subscribeToTestimonials(callback, limit = 20)`
Real-time subscription to testimonials
```javascript
const unsubscribe = subscribeToTestimonials((testimonials) => {
  console.log('Testimonials updated:', testimonials);
});
```

## Testing

1. **Submit a Test Testimonial**:
   - Click "Write Recommendation" button
   - Fill in the form
   - Submit

2. **Check Firebase Console**:
   - Go to Realtime Database → Data
   - Look for `testimonials` → new entry
   - Note: `approved: false`

3. **Approve the Testimonial**:
   - Click on the testimonial entry
   - Change `approved` from `false` to `true`

4. **See it Live**:
   - The testimonial should appear in the carousel immediately
   - Auto-scrolls every 5 seconds

## Customization

### Change Auto-scroll Speed:
Edit `TestimonialCarousel.jsx` line ~26:
```javascript
}, 5000); // Change 5000 to desired milliseconds
```

### Change Carousel Width (Desktop):
Edit `Hero.jsx` line ~83:
```javascript
className="... w-80" // Change w-80 to w-64, w-96, etc.
```

### Change Character Limits:
Edit `TestimonialForm.jsx` validation:
- Name: `maxLength={50}`
- Role: `maxLength={100}`
- Text: `minLength={20}` `maxLength={500}`

## Deployment

When you run `npm run deploy`, the testimonial system will work automatically because:
1. Firebase credentials are bundled during build
2. All components are included in the build
3. Real-time updates work on the live site

## Support

If testimonials aren't showing:
1. Check Firebase Console → Data → testimonials
2. Verify `approved: true` on testimonials
3. Check browser console for errors
4. Verify Firebase rules are published

Enjoy your new testimonial system!
