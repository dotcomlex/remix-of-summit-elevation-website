
# Hero Section Update — Large Centered Logo + New Background

---

## What Changes

### 1. Add large centered Emerald Paints logo
- Import `logo-emerald.png` and place it prominently above the trust badge
- Size: `h-40 md:h-48 lg:h-56 xl:h-64` — very large and dominant
- Centered with `mx-auto`, enhanced with drop-shadow filter for visibility against the dark background
- No "Emerald Paints" text — the logo speaks for itself

### 2. Replace background image
- Swap `hero-home-new.webp` for a new Unsplash image of a professional painting scene: `https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80`
- Keep the existing dark gradient overlay (`from-black/80 via-black/60 to-black/40`) for text readability

### 3. Everything else stays the same
- Trust badge, headlines, subheadline, CTA button, trust indicators, and bottom text all remain unchanged
- Animations and responsive behavior preserved

---

## Technical Details

### File: `src/components/home/HeroSection.tsx`

**Changes:**
- Add import: `import logoEmerald from "@/assets/logo-emerald.png";`
- Replace `heroImage` import (remove webp asset import, use Unsplash URL string instead)
- Insert logo `<img>` element before the trust badge, wrapped in a `div` with `flex justify-center mb-8 animate-fade-up`
- Logo styling: `h-40 md:h-48 lg:h-56 xl:h-64 w-auto` with `drop-shadow(0 4px 24px rgba(0,0,0,0.5))` filter
