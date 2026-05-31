# 📸 Image Organization Guide

## Folder Structure

```
adp-engineering-society/public/
├── icons/                    ✅ Favicons (already set up)
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest
├── brand/                    📁 Logo files
│   ├── logo.svg             (Main vector logo)
│   ├── logo.png             (Raster version)
│   ├── logo-white.svg       (For dark backgrounds)
│   └── logo-icon.svg        (Icon only, no text)
├── events/                   ✅ Event photos & videos
│   ├── *.jpg                (Converted from HEIC)
│   ├── *.mp4                (Videos)
│   └── posters/             (Event posters)
├── team/                     👥 Team member photos
│   ├── tin-su.jpg           ✅ Already added
│   ├── joel.jpg             ✅ Already added
│   ├── shannon.jpg          ✅ Already added
│   ├── jay.jpg
│   ├── yu-jie.jpg
│   └── ... (all 16 members)
└── sponsors/                 🏢 Sponsor logos
    ├── company-1.svg
    ├── company-2.png
    └── ...
```

## Current Status

### ✅ Already Set Up
- **Favicons** - All favicon files in `/icons/` are configured in `layout.tsx`
- **Team Photos** - 3 executive photos (Tin Su, Joel, Shannon) added
- **Event Images** - 8 photos + 3 videos in `/events/`

### ⚠️ Needs Attention
- **HEIC Conversion** - Browser can't display `.HEIC` files, need JPG conversion
- **Missing Team Photos** - 13 more team member photos needed
- **Brand Logo** - Add ADP EngSoc logo to `/brand/` folder

## 🔄 Convert HEIC to JPG

### Option 1: Online Converter (Easiest)
1. Go to https://convertio.co/heic-jpg/
2. Upload HEIC files from `/events/`
3. Download JPG versions
4. Replace HEIC files with JPG in the same folder

### Option 2: Command Line (Windows)
Using PowerShell with ImageMagick:
```powershell
# Install ImageMagick first: winget install ImageMagick.ImageMagick

cd adp-engineering-society\public\events
Get-ChildItem *.HEIC | ForEach-Object {
    $outputName = $_.Name -replace '\.HEIC$', '.jpg'
    magick convert $_.FullName $outputName
}
```

### Option 3: Mac/Linux
```bash
cd adp-engineering-society/public/events
for file in *.HEIC; do
    heif-convert "$file" "${file%.HEIC}.jpg"
done
```

## 📐 Image Size Recommendations

| Type | Size | Format | Notes |
|------|------|--------|-------|
| Logo | 800×800px | SVG preferred | Transparent background |
| Favicon | Auto-generated | PNG/ICO | Already configured |
| Team Photos | 800×800px | JPG | Square crop, face centered |
| Event Photos | 1920×1080px | JPG | Landscape orientation |
| Event Posters | 1080×1920px | JPG/PNG | Portrait orientation |
| Sponsor Logos | 400×200px | SVG/PNG | Transparent background |

## 🎯 Next Steps

1. **Convert HEIC Images**
   ```bash
   # After conversion, update these files:
   - IMG_6105.HEIC → IMG_6105.jpg
   - IMG_6135.HEIC → IMG_6135.jpg
   - IMG_6250.HEIC → IMG_6250.jpg
   - IMG_6333.HEIC → IMG_6333.jpg
   - IMG_6581.HEIC → IMG_6581.jpg
   ```

2. **Add Missing Team Photos**
   - Create 800×800 square crops
   - Name them: `jay.jpg`, `yu-jie.jpg`, `germaine.jpg`, etc.
   - Place in `/team/` folder

3. **Add Logo Files**
   ```
   /brand/
   ├── logo.svg        (Main logo)
   ├── logo-white.svg  (For dark mode)
   └── logo-icon.svg   (Just the icon)
   ```

4. **Update Team Page to Use Real Photos**
   Once photos are added, edit `src/app/page.tsx` line ~122:
   ```tsx
   // Replace this:
   <User className="h-16 w-16 text-iron-600" />
   
   // With this:
   <img
     src={`/team/${member.name.toLowerCase().replace(/ /g, '-')}.jpg`}
     alt={member.name}
     className="w-full h-full object-cover"
   />
   ```

## 🖼️ Adding Logo to Header

Edit `src/components/ui/header.tsx`:
```tsx
// Add logo next to "ADP EngSoc" text
<Link href="/" className="flex items-center gap-2">
  <img src="/brand/logo-icon.svg" alt="Logo" className="h-8 w-8" />
  <span className="font-heading font-bold text-xl">ADP EngSoc</span>
</Link>
```

## 📊 Current Event Images in Zoom Parallax

The zoom parallax animation currently uses:
- `/events/20250404_164436.jpg` ✅
- `/events/20250404_171812.jpg` ✅
- `/events/20250404_192445.jpg` ✅
- `/events/IMG_20250404_170100.jpg` ✅
- `/events/IMG_20250714_133926.jpg` ✅

Once HEIC files are converted, you can add:
- `/events/IMG_6105.jpg`
- `/events/IMG_6135.jpg`
- `/events/IMG_6250.jpg`
- `/events/IMG_6333.jpg`
- `/events/IMG_6581.jpg`

## 🎬 Videos

Videos are currently in `/events/` but not displayed. To add them later:
- `IMG_6276 (1).MOV`
- `IMG_6277.MOV`
- `IMG_6278.MOV`
- `VID20250714104920.mp4`

Consider converting MOV to MP4 for better browser compatibility.

## 🚀 Quick Commands

**Test locally after changes:**
```bash
npm run dev
```

**Deploy to Vercel:**
```bash
vercel --prod
```

---

**Questions?** Contact: taylorsengineering2021@gmail.com
