# 📧 Contact Form Setup Guide

Your contact form is now configured to use **Formspree** - the simplest way to receive emails without a backend!

## 🚀 Quick Setup (2 minutes)

### Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Get Started"** (it's FREE!)
3. Sign up with your email or GitHub account

### Step 2: Create a New Form
1. After logging in, click **"+ New Form"**
2. Give it a name like "Script Nova Contact Form"
3. Enter the email address where you want to receive messages
4. Click **"Create Form"**

### Step 3: Get Your Form ID
1. After creating the form, you'll see a form endpoint like:
   ```
   https://formspree.io/f/xyzabc123
   ```
2. Copy the **form ID** (the part after `/f/`, e.g., `xyzabc123`)

### Step 4: Update Your Contact Page
1. Open `contact.html`
2. Find this line (around line 112):
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xyzabc123" method="POST"
   ```
4. Save the file

### Step 5: Test It!
1. Open `contact.html` in your browser
2. Fill out the form and submit
3. Check your email inbox! 📬

## ✨ Features Included

- ✅ **No backend needed** - works with static hosting
- ✅ **Spam protection** - built-in reCAPTCHA
- ✅ **Email notifications** - instant delivery to your inbox
- ✅ **Beautiful UI feedback** - success/error messages
- ✅ **Free tier** - 50 submissions/month
- ✅ **Reply-to support** - respond directly to users

## 🎨 What Changed

### contact.html
- Added Formspree form action
- Added status message display area
- Changed email field name to `_replyto` (for easy replies)
- Added hidden subject field

### js/contact.js
- Simplified to work with Formspree
- Added visual success/error messages
- Removed backend API dependency

## 📊 Free Plan Limits

- **50 submissions/month**
- **Unlimited forms**
- **Email notifications**
- **Spam filtering**

Need more? Upgrade to paid plan for unlimited submissions ($10/month)

## 🆘 Troubleshooting

**Form not working?**
- Make sure you replaced `YOUR_FORM_ID` with your actual form ID
- Check that you're using the correct email in Formspree dashboard
- Verify your internet connection

**Not receiving emails?**
- Check your spam folder
- Verify the email address in your Formspree account
- Make sure the form is active in your Formspree dashboard

## 🔄 Alternative: Even Simpler Option

If you want an even simpler solution (no signup needed), you can use `mailto:`:

```html
<form action="mailto:youremail@example.com" method="post" enctype="text/plain">
```

⚠️ **Note**: This opens the user's email client, which is less user-friendly than Formspree.

---

**That's it!** Your contact form is ready to receive messages. 🎉
