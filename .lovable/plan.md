

# Why Choose Us — Redesign

---

## What Changes

### 1. Stats row at top
- 4-column horizontal stats bar: "1,000+ Homes Transformed", "5.0 Star Rating", "8+ Years Experience", "100% Satisfaction Rate"
- Each with an emoji icon, bold number, and label
- White cards on the sand background

### 2. Two-column layout below stats
- **Left column**: Section header ("Why Choose Emerald Paints" pill, "More Than Just Paint — It's Peace of Mind" headline), 3 vertical reason items with green checkmark icons, and a CTA button
- **Right column**: Single large image with rounded corners and a floating testimonial card overlay (5 stars, quote, attribution)

### 3. Generate fresh image
- AI-generated image for the right column: professional painting crew on a modern Colorado home, golden hour, mountains in background
- Saved as a new asset (replacing the Unsplash placeholder)

### 4. Remove old elements
- Remove the "How It Works" process steps section
- Remove the proof cards (Licensed/Insured, Detailed Prep, On Time)
- Remove the wave SVG divider at the bottom
- Remove the experience badge overlay

### 5. Keep existing patterns
- Use `AnimatedSection` and `StaggerContainer`/`StaggerItem` for entrance animations
- Keep the sand background with paper texture
- Maintain responsive behavior (stack on mobile)

---

## Technical Details

### File: `src/components/home/WhyChooseUs.tsx` (full rewrite)

- Remove old imports: `Shield`, `ClipboardCheck`, `CalendarCheck`, old `teamImage` URL
- Add imports: `Shield`, `Award`, `Clock`, `Star`, `ArrowRight`, `CheckCircle2` from lucide-react; `Button` from ui; `Link` from react-router-dom
- New data arrays: `stats` (4 items with emoji/number/label), `reasons` (3 items with title/description)
- New image import from generated asset
- Layout: container with stats grid (2-col mobile, 4-col desktop), then 2-col grid (left content, right image)
- Floating testimonial card: absolute positioned bottom-left of image, white bg, 5 gold stars, quote text
- No bottom wave divider (removed)

### New image: `src/assets/hero-painting-crew.jpg` (overwrite or new file)
- AI-generated: professional painters on modern Colorado home, golden hour, mountains, clean composition

