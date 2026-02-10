

# Fix Text Readability + Clean Hamburger Menu

## Overview
Three targeted changes across 2 files. No layout, copy, or structural changes.

## Changes

### 1. Strengthen text shadows (src/index.css)
The shadows ARE applied but need to be even stronger per the new values provided.

- `.text-shadow-hero`: Bump opacity values from `0.8/0.6/0.4/0.3` to `0.9/0.7/0.5/0.4`, and change the last layer from `16px 60px` to `20px 60px`
- `.text-shadow-subtle`: Bump from `0.7/0.5/0.3` to `0.8/0.6/0.4`
- `.text-shadow-strong`: unchanged

### 2. Add subtle frosted backdrop on desktop (src/components/home/HeroSection.tsx)
The content wrapper div (line 33) gets desktop-only classes added: `lg:bg-black/20 lg:backdrop-blur-[2px] lg:rounded-3xl lg:py-16`. Also changes `lg:px-0` to `lg:px-8` for padding inside the backdrop. Mobile stays identical.

### 3. Clean hamburger button (src/components/layout/Navigation.tsx)
Replace the white rounded box (line 88-94) with a cleaner white icon using a drop-shadow filter. Remove `rounded-xl bg-white/90 shadow-lg text-mountain-charcoal backdrop-blur-sm`. Add `text-snow-white` with inline `drop-shadow` filter. Bump icon size from `h-6 w-6` to `h-7 w-7`.

## Technical Details

**src/index.css** (lines 103-115)
- Update `.text-shadow-hero` opacity values to `0.9, 0.7, 0.5, 0.4` and last spread to `20px`
- Update `.text-shadow-subtle` opacity values to `0.8, 0.6, 0.4`

**src/components/home/HeroSection.tsx** (line 33)
- Change `className` from `"w-full max-w-3xl px-5 lg:px-0 py-20 lg:mx-auto lg:text-center"` to `"w-full max-w-3xl px-5 lg:px-8 py-20 lg:mx-auto lg:text-center lg:bg-black/20 lg:backdrop-blur-[2px] lg:rounded-3xl lg:py-16"`

**src/components/layout/Navigation.tsx** (lines 88-94)
- Replace hamburger button: remove background/border styles, add white text with drop-shadow filter, increase icon to h-7

