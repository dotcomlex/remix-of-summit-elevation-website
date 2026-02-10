

# Hero Section Redesign — Split Layout

## Current Problem
The current hero uses a centered full-screen background image with stacked content, which looks too similar to the 14ers Renovations website.

## New Design: Split Layout
A two-column hero with content on the left and a striking image on the right, creating a distinct, modern look.

### Layout
- **Left side (55%)**: Dark background with headline, subtext, CTA button, and trust indicators — all left-aligned
- **Right side (45%)**: A large, high-quality painting image with a subtle rounded corner or diagonal clip for visual interest
- **Mobile**: Stacks vertically — image on top (shorter), content below

### Content (Left Side)
- Small trust badge pill: "Licensed & Insured · Since 2017"
- Headline: **"Beautiful Homes Start with Great Paint"** — left-aligned, with "Great Paint" in gold/primary accent
- Subheadline paragraph
- CTA button: "Get Free Estimate"
- Trust indicators row (5.0 Rating, 1,000+ Homes) inline below the button

### Image (Right Side)
- Generate a new hero image specifically composed for a portrait/tall crop — showing a beautifully painted Colorado home exterior or a stunning interior result
- Slight decorative overlay or border accent in the brand green color

### Visual Differentiators from 14ers
- Left-aligned text instead of centered
- No full-bleed background image — clean split with a solid dark left panel
- Image is a contained element, not a background
- More whitespace, more editorial/premium feel
- Subtle entrance animations (text slides in from left, image fades in from right)

## Technical Details

### Files to modify
- **`src/components/home/HeroSection.tsx`** — Complete rewrite of the layout to a CSS Grid / Flexbox two-column split
- **Generate 1 new hero image** — Tall-crop composition optimized for the right panel

### Structure
```text
+----------------------------------+---------------------+
|  [Badge]                         |                     |
|  Beautiful Homes                 |    [Hero Image]     |
|  Start with Great Paint          |    (contained,      |
|                                  |     rounded)        |
|  Subheadline text...             |                     |
|                                  |                     |
|  [Get Free Estimate -->]         |                     |
|  [5.0 Rating] [1,000+ Homes]    |                     |
+----------------------------------+---------------------+
```

### Mobile Stack
```text
+---------------------------+
|      [Hero Image]         |
|      (shorter crop)       |
+---------------------------+
|  [Badge]                  |
|  Beautiful Homes          |
|  Start with Great Paint   |
|  Subheadline...           |
|  [Get Free Estimate -->]  |
|  [5.0] [1,000+ Homes]    |
+---------------------------+
```

- Background: solid dark color (`section-dark` or `mountain-charcoal`) on the left panel
- Framer Motion animations: text content slides up/left, image fades in from the right
- Fully responsive with clean mobile stacking

