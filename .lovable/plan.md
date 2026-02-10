

# Fix Mobile Hero — Center Content Vertically

## Problem
On mobile, the content is pushed to the very bottom of the viewport (`items-end` on line 50), leaving a massive empty space at the top where only the background image shows. This wastes prime screen real estate and makes the hero feel unbalanced.

## Fix
Change the mobile content container from `items-end` to `items-center` so the text, CTA, and trust indicators are vertically centered over the background image. Also adjust padding so there's balanced space above and below.

## Technical Details

### File: `src/components/home/HeroSection.tsx`

**Line 50** — Change mobile content alignment:
- From: `flex items-end min-h-[100dvh]`
- To: `flex items-center min-h-[100dvh]`

**Line 51** — Adjust padding to balance around center:
- From: `px-5 pb-10 pt-32`
- To: `px-5 pb-8 pt-24`

These two small changes will vertically center all hero content over the background image on mobile, eliminating the large empty gap at the top.
