# ADP Engineering Society - Deployment Guide

## 🎉 Project Status: Phase 1 MVP Complete!

The ADP Engineering Society website has been successfully created with all core features from the specification.

## ✅ What's Implemented

### Pages
- ✅ **Home** - Hero with animated gradient background, rotating text, stats, CTAs
- ✅ **About** - Mission, Vision, ADP program explanation, core values
- ✅ **Events** - Event listing with categories and tags (placeholder data)
- ✅ **Team** - Executive committee with filtering by department
- ✅ **Projects** - Project categories showcase (awaiting real project data)
- ✅ **Membership** - Benefits, FAQs, and join process
- ✅ **Sponsors** - Partnership tiers and benefits
- ✅ **Contact** - Contact form and information

### Components
- ✅ Responsive header with mobile menu
- ✅ Animated gradient background (Rust brand colors)
- ✅ Text rotation animation
- ✅ Spotlight/glow cards
- ✅ Tabs for filtering
- ✅ Footer with social links

### Branding
- ✅ ADP Engineering Society color scheme (Rust #BB3A1A)
- ✅ Space Grotesk heading font
- ✅ Inter body font
- ✅ Dark mode enabled by default
- ✅ Consistent spacing and styling

## 🚀 Quick Start

The development server is already running at:
- **Local**: http://localhost:3000
- **Preview**: Check the browser preview panel

## 📦 Deployment to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd c:\Users\tscr\Downloads\TES2
vercel
```

3. Follow prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name: `adp-engineering-society`
   - Directory: `.`
   - Override settings? **N**

4. Your site will be live in ~2 minutes!

### Method 2: GitHub + Vercel Dashboard

1. Create a GitHub repository
2. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - ADP EngSoc website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com)
4. Click "Import Project"
5. Select your GitHub repo
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

## 🔧 Environment Setup

### For Phase 2+ Features

Create `.env.local` file:
```bash
# Site
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Clerk (for auth - Phase 3)
# CLERK_SECRET_KEY=
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

# Database (Phase 2)
# DATABASE_URL=

# Email (Phase 2)
# RESEND_API_KEY=
```

## 📋 Next Steps (Phase 2)

### Immediate Priorities
1. **Add Team Photos**
   - Place 800x800 images in `/public/team/`
   - Update team member avatars in the Team page

2. **Add Real Event Data**
   - Connect to Luma API or create events data file
   - Implement event detail pages

3. **Implement Contact Form**
   - Set up Resend account (free tier)
   - Add API route for form submission
   - Email notifications to officers

4. **Add Project Showcases**
   - Create project data structure
   - Add project detail pages with galleries
   - Link GitHub repos

### Phase 2 Features
- [ ] Event RSVP system
- [ ] Newsletter integration (Mailchimp/Resend)
- [ ] Blog/News section with MDX
- [ ] Photo gallery with lightbox
- [ ] CSV export for officers

### Phase 3 Features
- [ ] Clerk authentication
- [ ] Officer dashboard (protected routes)
- [ ] Event management system
- [ ] Member directory
- [ ] Sponsor management

## 🎨 Customization

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  rust: '#BB3A1A',  // Your primary brand color
  // ...
}
```

### Update Content
- **Mission/Vision**: `src/app/about/page.tsx`
- **Team Data**: `src/data/team.ts`
- **Footer Links**: `src/app/page.tsx` (footer section)

### Add New Pages
```bash
# Create new page
mkdir src/app/your-page
# Add page.tsx
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Image Optimization
Uncomment Image components in Team page when photos are ready:
```tsx
<Image
  src={member.avatarUrl}
  alt={member.name}
  fill
  className="object-cover"
/>
```

## 📊 Performance Checklist

Before going live:
- [ ] Add real team photos (optimized, 800x800)
- [ ] Test all pages on mobile devices
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Set up analytics (Vercel Analytics)
- [ ] Add Open Graph images (1200x630)
- [ ] Test contact form
- [ ] Verify all external links

## 🔐 Security Notes

- Never commit `.env.local` to git
- Use environment variables for API keys
- Implement rate limiting on contact form (Phase 2)
- Add honeypot field to prevent spam

## 📞 Support

**Email**: taylorsengineering2021@gmail.com  
**Instagram**: [@tes.adp](https://www.instagram.com/tes.adp/)  
**Events**: [luma.com/tesadp](https://luma.com/tesadp)

---

## 🎯 Success Metrics (from spec)

Track these once deployed:
- [ ] 20% of visitors click "Join"
- [ ] 60% RSVP capacity for workshops within 72 hours
- [ ] 10+ sponsor inquiries per semester
- [ ] Lighthouse score 90+ (mobile)
- [ ] LCP < 2.0s, CLS < 0.05

---

**Built with ❤️ for ADP Engineering Society**
