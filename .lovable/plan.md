

# Hero Overlay, Text Wrapping & Logo Size Fixes

## Overview
Three targeted fixes to the hero section and navigation. No copy changes, no layout restructuring, no new imports.

## Changes

### 1. Hero Gradient Overlays (HeroSection.tsx)

**Desktop (line 23):** Replace the left-to-right gradient with a centered radial vignette that darkens behind the centered text without favoring one side.

**Mobile (line 20):** Increase the mid-section opacity from `0.65` to `0.72` and top from `0.3` to `0.35` for better text contrast.

### 2. Text Wrapping (HeroSection.tsx)

- Content wrapper: `max-w-2xl` changes to `max-w-3xl` (line 28)
- Subheadline: `max-w-lg` changes to `max-w-xl` (line 58)
- Headline font size clamp: `4.2rem` changes to `4.5rem` (line 46)

### 3. Logo Size (Navigation.tsx)

**Desktop logo (line 47):** `h-24 xl:h-28` becomes `h-36 xl:h-40` with `-my-4` added to prevent layout push.

**Mobile logo (line 82):** `h-20 sm:h-24` becomes `h-28 sm:h-32` with `-my-3` added.

No changes to header padding, nav pill structure, mobile menu, or any text content.

## Technical Details

**File: `src/components/home/HeroSection.tsx`**
- Line 20: Mobile gradient — update via opacity to `0.72`, to opacity to `0.35`
- Line 23: Desktop gradient — replace `bg-gradient-to-r` div with inline `style` radial-gradient: `radial-gradient(ellipse 80% 70% at 50% 55%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)`
- Line 28: `max-w-2xl` to `max-w-3xl`
- Line 46: headline clamp max from `4.2rem` to `4.5rem`
- Line 58: `max-w-lg` to `max-w-xl`

**File: `src/components/layout/Navigation.tsx`**
- Line 47: Desktop logo — `h-24 xl:h-28` to `h-36 xl:h-40 -my-4`
- Line 82: Mobile logo — `h-20 sm:h-24` to `h-28 sm:h-32 -my-3`

