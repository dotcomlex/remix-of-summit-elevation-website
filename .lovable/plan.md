

# About Page — Simplify & Fix Text Visibility

---

## What Changes

### 1. Fix text visibility in hero
- The `text-primary` (green) badge and headline accent are invisible against the dark background
- Change the badge text and "1,000+ Beautiful Homes" accent to **white** instead of green
- Strengthen the gradient overlay to `from-black/90 via-black/70 to-black/50`

### 2. Generate a fresh hero background
- Create a new AI-generated image: a bright, well-lit Colorado home with professional painters, good contrast for white text
- Replace the current `hero-crew-working.jpg` import

### 3. Simplify the page structure
- **Remove**: Journey Timeline section and Expertise cards section (too complex)
- **Keep**: Hero, Stats, and CTA sections
- **Add**: A simple "Our Mission" text block with 3 value icons (Quality Craftsmanship, Licensed & Insured, Reliable Service) between hero and stats

### 4. Simplify stats section
- Reduce from 4 stats to 3: "1,000+ Homes Painted", "5.0 Star Rating", "8+ Years Experience"
- Clean white text on dark background (keep existing charcoal bg)

### 5. Keep CTA section
- Existing CTA with team-work.jpg background stays, already works well

---

## Technical Details

### File: `src/pages/About.tsx` (rewrite)

- Remove imports: `AnimatedSection`, `StaggerContainer`, `StaggerItem`, `Star`, `Home`, `Users` icons, `heroImage` (crew-working)
- Add: new generated hero image import
- Remove: `journey` array, `expertise` array, complex `stats` array
- Add: simple `values` array (3 items: Paintbrush, Shield, Clock icons)
- Hero: all text white, stronger gradient, no green accents
- New mission section: white bg, centered text + 3 icon cards in a grid
- Stats: 3-column grid, white text on charcoal
- CTA: unchanged

### New image: `src/assets/hero-about-page.jpg`
- AI-generated: bright Colorado home exterior, professional painters, golden hour, mountains, strong contrast for white text overlay

