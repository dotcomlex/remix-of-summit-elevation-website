

# Hero Section Updates

## Overview
Three changes to the hero section: swap in the new uploaded hero image, add a green-tinted overlay on mobile for better text contrast (matching the desktop feel), and center the content horizontally on desktop.

## Changes

### 1. Replace hero image
Copy the uploaded image (`hf_20260210_044225...webp`) to `src/assets/hero-home-colorado.webp`, replacing the existing file. No import changes needed since the filename stays the same.

### 2. Add green overlay on mobile
The desktop gradient already uses the `--section-dark` color (a deep green, `153 30% 8%`), giving it that subtle green tint. On mobile, the gradient is lighter and doesn't provide enough contrast. The fix: increase the mobile gradient opacity values so the dark green overlay is stronger, similar to the desktop experience.

Current mobile gradient:
- `from-section-dark/0.9 via-section-dark/0.5 to-section-dark/0.1`

New mobile gradient (stronger mid and top):
- `from-section-dark/0.92 via-section-dark/0.65 to-section-dark/0.3`

This keeps the image visible but adds enough of the green-dark tint to make white text pop.

### 3. Center content on desktop
Currently the content wrapper uses `px-5 lg:px-16 xl:px-20` which left-aligns everything. On desktop, we'll center the content block by adding `lg:mx-auto lg:text-center lg:flex lg:flex-col lg:items-center` to the inner wrapper and removing the left padding override.

## Technical Details

**File: `src/assets/hero-home-colorado.webp`**
- Replaced with the uploaded image (copy operation)

**File: `src/components/home/HeroSection.tsx`**
- Line 20: Update mobile gradient opacity values to `0.92 / 0.65 / 0.3`
- Line 27-28: Change the content container to center on desktop:
  - Outer div: add `lg:justify-center` and keep `items-center`
  - Inner div (line 28): change from `w-full max-w-2xl px-5 lg:px-16 xl:px-20 py-20` to `w-full max-w-2xl px-5 lg:px-0 py-20 lg:mx-auto lg:text-center`
- Trust badge, CTA, and trust indicators: add `lg:justify-center` or `lg:mx-auto` as needed so they center properly
- The `max-w-lg` on subheadline gets `lg:mx-auto` to center within the centered layout

No other files change. No new dependencies.
