

# Prompt 4: Gallery Carousel — Data & Text Update

This is a straightforward data swap. The circular gallery component and all its behavior remain untouched.

## Changes (single file: `src/components/home/GallerySection.tsx`)

### 1. Remove local image imports
Delete all 8 gallery image imports (lines 7-14: `galleryKitchen`, `galleryBathroom`, `galleryPatio`, `galleryExterior`, and their `-1` variants). We'll use Unsplash URLs directly.

### 2. Replace the `items` array
Swap the 8 renovation-themed items with 8 painting-themed items using Unsplash URLs, painting project names (Living Room Refresh, Exterior Repaint, Deck Staining, etc.), Colorado cities, and "Emerald Paints" as the `by` field.

### 3. Update section header text
- Subtitle stays: "Our Work"
- Heading stays: "Work That Speaks For Itself"
- Description changes to: "A showcase of recent painting projects across Colorado."

### 4. Update CTA button
- Text: "View Full Gallery" (instead of "Get a Free Estimate")
- Link: `/gallery` (instead of `/contact`)
- Remove the ArrowRight icon import if no longer used elsewhere (it is still used, so keep it)

### 5. Adjust background mesh gradient
- Change the orange accent glow from `rgba(251,146,60,0.15)` to `rgba(27,67,50,0.20)` (forest green tint)
- Keep the blue and purple accent glows as-is

### What stays untouched
- `circular-gallery.tsx` — not modified
- Lightbox modal, keyboard nav, body scroll lock
- Background base gradient colors
- Responsive radius logic, IntersectionObserver
- Auto-rotate speed, carousel behavior
- Animation and instruction text

