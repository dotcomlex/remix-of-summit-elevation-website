

# Services Preview — Painting Content Rewrite

Update `src/components/home/ServicesPreview.tsx` with painting-specific content. No layout, animation, or styling changes.

## Changes

### 1. Section Header
- Eyebrow: "What We Do" → "Our Services"
- Headline: "Comprehensive Remodeling Solutions" → "Expert Painting for Every Surface"
- Subtext: Updated to mention refreshing rooms, exterior transformation, premium materials, and meticulous preparation

### 2. Service Cards Data
Replace the 3 service objects:
- "Kitchen & Bathroom" → "Interior Painting" (smooth finishes, furniture protection, zero mess)
- "Concrete & Flatwork" → "Exterior Painting" (curb appeal, weather-resistant, Colorado climate)
- "General Contracting" → "Staining & Specialty Finishes" (deck/fence staining, custom finishes, accent walls)
- All cards link to `/services` instead of individual service pages
- Keep existing image imports unchanged

### 3. Card Link Text
- "View our services" → "Learn More" inside each card

### 4. Bottom CTA Text
- "Need electrical work, HVAC services, or a custom project?" → "Need cabinet refinishing, commercial painting, or a custom color consultation?"

### 5. Fix "Get a Free Estimate" Button
- Replace `<Link to="/contact">` with `<a href="tel:+17204475654">`
- Remove `Link` import from `react-router-dom` if no longer used (the "View Services" button still uses `Link`, so the import stays)

### 6. No Changes To
- Card layout, grid, hover animations, image aspect ratios
- Section background or texture overlay
- Decorative diamond divider
- Image imports
- AnimatedSection / StaggerContainer / StaggerItem wrappers

