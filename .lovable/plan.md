

# Services Page Images + Footer + Logo + Homepage Refresh

---

## Part 1: Generate Unique Images for Every Service Card

The Services page (`src/pages/Services.tsx`) has 8 service cards, but they reuse kitchen, bathroom, concrete, construction, HVAC, and electrical images that have nothing to do with painting. Each card will get a brand-new AI-generated image that actually represents the painting service described.

| Service Card | New Asset File | AI Image Prompt |
|---|---|---|
| **Interior Painting** | `src/assets/service-interior-painting.jpg` | Professional painter rolling soft white paint on a living room wall, drop cloths on floor, clean crisp lines, warm natural light |
| **Exterior Painting** | `src/assets/service-exterior-painting.jpg` | Painter on a ladder painting the exterior siding of a Colorado home, bright blue sky, professional equipment visible |
| **Wood Staining** | `src/assets/service-wood-staining.jpg` | Close-up of someone staining a wooden deck with rich cedar stain, brush strokes visible, Colorado backyard with trees |
| **Vinyl & Aluminum Painting** | `src/assets/service-vinyl-painting.jpg` | Freshly painted vinyl siding on a suburban home, crisp clean finish, before-and-after feel, bright daylight |
| **Commercial Painting** | `src/assets/service-commercial-painting.jpg` | Painters working inside a modern commercial office space, rolling paint on walls, professional lighting, clean workspace |
| **Touch-Ups & Repairs** | `src/assets/service-touchups.jpg` | Close-up of a painter patching and repainting a wall section, putty knife and paint brush, detailed repair work |
| **Custom Finishes & Specialty Coatings** | `src/assets/service-custom-finishes.jpg` | Textured accent wall being painted with a specialty roller, dramatic color, artistic finish technique |
| **Free Color Consultation** | `src/assets/service-color-consultation.jpg` | Paint color swatches and fan decks spread out on a table, someone selecting colors, warm inviting setting |

Also update the 3 service preview cards on the homepage (`ServicesPreview.tsx`) with appropriate new images from the ones generated above.

---

## Part 2: Footer Overhaul

Changes to `src/components/layout/Footer.tsx`:

- **Remove** the "Emerald Paints" text next to the logo
- **Remove** phone number and email completely from footer
- **Center the logo** at the top of the footer, large and prominent (h-32 to h-40, matching the brand memory)
- Keep the existing layout below it (Service Areas, Quick Links, Quote Form, Social Links, Bottom Bar)
- Remove any remaining phone/email references throughout

---

## Part 3: Increase Navigation Logo Size

In `src/components/layout/Navigation.tsx`:

- Desktop logo: increase from `h-32 xl:h-36` to `h-36 xl:h-44`
- Mobile logo: increase from `h-28 sm:h-32` to `h-32 sm:h-36`

---

## Part 4: Homepage Layout Refresh

To differentiate from the Fortuner Renovations template, make these changes:

1. **Reorder homepage sections** — swap the position of "Why Choose Us" and "Gallery" so the flow becomes:
   - Hero -> Logo Cloud -> Services Preview -> **Why Choose Us** -> **Gallery Carousel** -> Testimonials -> FAQ -> CTA

2. **Add a new "Our Process" section** between Services Preview and Why Choose Us — a simple 3-step horizontal layout (Consult -> Paint -> Enjoy) with icons and brief text, giving the page a unique section the original didn't have.

3. **Restyle the Services Preview cards** — change from the current 3-column equal grid to a layout where the first card spans full width (hero-style) and the bottom two sit side by side. This creates visual variety.

4. **Update the CTA section** — change the copy and add a secondary "View Our Work" button alongside the primary estimate button to differentiate.

---

## Technical Summary

### Files modified:
- `src/pages/Services.tsx` — replace all 8 image imports with new generated assets
- `src/components/home/ServicesPreview.tsx` — update 3 image imports + change layout to 1-over-2 grid
- `src/components/layout/Footer.tsx` — center logo, remove text label, remove phone/email
- `src/components/layout/Navigation.tsx` — increase logo sizes
- `src/pages/Index.tsx` — reorder sections, add new OurProcess component
- `src/components/home/CTASection.tsx` — update copy and add secondary button

### New files:
- `src/components/home/ProcessSection.tsx` — new 3-step process section
- 8 new AI-generated service images in `src/assets/`

### Assets generated (8 total, all fresh, no recycling):
- `service-interior-painting.jpg`
- `service-exterior-painting.jpg`
- `service-wood-staining.jpg`
- `service-vinyl-painting.jpg`
- `service-commercial-painting.jpg`
- `service-touchups.jpg`
- `service-custom-finishes.jpg`
- `service-color-consultation.jpg`

