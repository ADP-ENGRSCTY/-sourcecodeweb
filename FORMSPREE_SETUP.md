# 📧 Formspree Contact Form Setup Guide

## 🚀 Quick Setup (5 minutes)

Your contact form is ready to use! You just need to connect it to Formspree.

---

## 📝 Step 1: Create Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" or "Sign Up"
3. Create a free account (supports 50 submissions/month)

---

## 🔧 Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give it a name: **"ADP TES Contact Form"**
3. Click **"Create Form"**

---

## 🎯 Step 3: Get Your Form Endpoint

1. After creating the form, you'll see your **Form ID**
2. It looks like: `https://formspree.io/f/YOUR_FORM_ID`
3. Copy this URL

---

## 💻 Step 4: Update Your Code

1. Open: `src/components/ui/contact-form.tsx`
2. Find line ~67:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID
4. Example:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/xwpklmno';
   ```

---

## ⚙️ Step 5: Configure Form Settings (Optional)

In your Formspree dashboard:

### Email Notifications
- **Email Address:** Enter where you want to receive submissions
- **Subject:** Customize email subject line
- **Reply-To:** Will use the submitter's email

### reCAPTCHA (Recommended)
- Toggle on to prevent spam
- Free with Google reCAPTCHA v2
- Or use Formspree's built-in spam filtering

### Auto-Response
- Send automatic "Thank you" emails to submitters
- Customize the message

---

## 🎨 Form Fields

Your contact form includes:

1. **Name** - Text input
2. **Email** - Email input (used for reply-to)
3. **Subject** - Text input (becomes email subject)
4. **Message** - Textarea for the main message

All fields are required by default.

---

## 🔗 Alternative: Vercel Integration

For easier setup, use the Formspree Vercel Integration:

1. Go to: [https://vercel.com/integrations/formspree](https://vercel.com/integrations/formspree)
2. Click **"Add Integration"**
3. Select your Vercel project: **tesadp**
4. Follow the prompts to connect

**Benefits:**
- Automatic environment variable setup
- Easier form management
- Direct integration with your deployment

---

## 📊 Form Submissions

View all submissions in your Formspree dashboard:
- See who contacted you
- Download as CSV
- Mark as spam
- Archive old submissions

---

## 🆓 Free Tier Limits

Formspree Free Plan includes:
- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (up to 10MB)
- ✅ Custom reply-to emails

**Upgrade** if you need:
- More submissions
- Custom SMTP
- Advanced integrations
- Webhooks

---

## 🔐 Security Features

Your form includes:
- ✅ HTTPS encryption
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Spam filtering
- ✅ No sensitive data stored client-side

---

## 🎯 Testing Your Form

1. **Local Testing:**
   ```bash
   npm run dev
   ```
2. Navigate to the Contact section
3. Fill out the form
4. Submit
5. Check your Formspree dashboard for the submission

2. **Production Testing:**
   - After deployment, submit a test message
   - Verify email notification arrives
   - Check Formspree dashboard

---

## 🐛 Troubleshooting

### Form not submitting?
- ✅ Check your Form ID is correct
- ✅ Verify the endpoint URL format
- ✅ Check browser console for errors
- ✅ Ensure you're using HTTPS in production

### Not receiving emails?
- ✅ Check spam folder
- ✅ Verify email in Formspree settings
- ✅ Check Formspree dashboard for submissions

### Getting CORS errors?
- ✅ Add your domain to Formspree allowed origins
- ✅ In Formspree Settings → CORS

### Rate limit errors?
- ✅ You've hit 50 submissions/month
- ✅ Upgrade to paid plan
- ✅ Or wait for next month

---

## 📱 Form Features

Your contact form includes:

1. **Loading States**
   - Spinner while submitting
   - Disabled button during submission
   - "Sending..." text

2. **Success States**
   - Green success message
   - Check icon
   - Form clears automatically
   - "Sent!" button text

3. **Error Handling**
   - Red error message
   - Alert icon
   - Error details displayed
   - Form remains filled for retry

4. **Validation**
   - All fields required
   - Email format validation
   - Browser native validation
   - Clear error messages

---

## 🎨 Customization

Want to customize the form? Edit:

### Styling
- File: `src/components/ui/contact-form.tsx`
- Tailwind classes for colors, spacing, etc.

### Fields
- Add/remove fields in the component
- Update state management
- Adjust validation

### Success/Error Messages
- Change messages in `handleServerResponse`
- Customize UI components

---

## 📚 Additional Resources

- [Formspree Documentation](https://help.formspree.io/)
- [Formspree React Guide](https://formspree.io/guides/nextjs/)
- [Vercel Integration Guide](https://vercel.com/guides/deploying-react-forms-using-formspree-with-vercel)

---

## ✅ Checklist

Before going live:

- [ ] Created Formspree account
- [ ] Created new form in Formspree
- [ ] Copied Form ID
- [ ] Updated `contact-form.tsx` with your Form ID
- [ ] Tested form submission locally
- [ ] Configured email notifications
- [ ] Set up reCAPTCHA (optional but recommended)
- [ ] Tested on production
- [ ] Verified email delivery

---

## 🎊 You're All Set!

Your contact form is now:
- ✅ Fully functional
- ✅ Beautiful and animated
- ✅ Spam-protected
- ✅ Mobile-responsive
- ✅ Connected to Formspree

**Need help?** Check the Formspree documentation or reach out to their support team!

---

**Updated:** November 8, 2025  
**Status:** Ready to Configure
