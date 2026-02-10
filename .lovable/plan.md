
# Regenerate All 8 Service Card Images

## Overview
Generate fresh AI images for all 8 service cards on the Services page using the Gemini image model. All images will be landscape 4:3 to match the `aspect-[4/3]` card containers.

## All 8 Cards

| # | Card | New Filename |
|---|------|-------------|
| 1 | Interior Painting | `service-interior-painting-wide.webp` |
| 2 | Exterior Painting | `service-exterior-painting-wide.webp` |
| 3 | Wood Staining | `service-wood-staining-wide.webp` |
| 4 | Vinyl & Aluminum Painting | `service-vinyl-painting-wide.webp` |
| 5 | Commercial Painting | `service-commercial-painting-wide.webp` |
| 6 | Touch-Ups & Repairs | `service-touchups-wide.webp` |
| 7 | Custom Finishes & Specialty Coatings | `service-custom-finishes-wide.webp` |
| 8 | Free Color Consultation | `service-color-consultation-wide.webp` |

## Prompts

1. **Interior Painting** — Wide-angle interior photograph of a professional painter carefully cutting in paint along the ceiling edge of a bright living room, the painter on a step ladder using a small angled brush, warm white paint being applied to walls that are half-finished showing the crisp line between old and new paint, drop cloths covering hardwood floors, blue painter's tape on the window trim and baseboards, a paint tray and roller on a covered table nearby, the room has large windows with natural afternoon light, modern furnishings pushed to the center and covered with plastic sheeting, clean professional setup, real jobsite documentation style, no text, no logos, no watermarks, Canon EOS R6, 24mm, f/4, natural light, landscape orientation 4:3

2. **Exterior Painting** — Exterior photograph of a professional painter on a ladder painting the fascia and trim of a two-story Colorado home, the painter wearing white painter's clothes and using a brush for detail work on the eaves, freshly painted siding in a warm gray tone contrasting with the white trim being applied, the home has a front porch with stone columns, mature trees in the yard, clear blue Colorado sky, the scene shows professional equipment on the ground including a spray rig and tarps over the landscaping, real jobsite feel, no text, no logos, no watermarks, Canon EOS R5, 35mm, f/5.6, natural daylight, landscape orientation 4:3

3. **Wood Staining** — Close-up photograph of a professional hand applying rich walnut-toned stain to a cedar deck with a wide brush, the wet stain glistening and revealing the wood grain, half the deck already stained showing the dramatic before-and-after contrast with the weathered gray unstained portion, a can of deck stain and a stir stick resting nearby, the deck overlooks a Colorado backyard with pine trees, golden hour light catching the wet finish, the image conveys craftsmanship and transformation, no text, no logos, no watermarks, Sony A7IV, 50mm, f/2.8, golden hour light, landscape orientation 4:3

4. **Vinyl & Aluminum Painting** — Exterior photograph showing vinyl siding on a suburban home being spray-painted by a professional using an airless sprayer, the painter wearing a respirator mask and protective suit, one section of siding shows the old faded color while the adjacent section gleams with fresh paint, plastic sheeting taped over the windows and landscaping below, the contrast between old and new is dramatic, Colorado suburban neighborhood visible in soft focus background, morning light, the setup shows professional-grade equipment and careful masking, no text, no logos, no watermarks, documentary photography, Sony A7IV, 35mm, f/5.6, landscape orientation 4:3

5. **Commercial Painting** — Interior photograph of a commercial office space being painted, a professional painter using a roller on an extension pole to paint a large wall section in modern gray, the ceiling has been masked with plastic sheeting, industrial-style space with exposed ductwork and pendant lighting, some office furniture covered in moving blankets pushed to one side, polished concrete floors with drop cloths laid out, the space is well-lit with overhead fluorescent and natural window light, the feeling is professional and efficient, clean workspace, no text, no logos, no watermarks, Sony A7III, 28mm, f/4, landscape orientation 4:3

6. **Touch-Ups & Repairs** — Close-up photograph of a painter's hand using a small artist brush to carefully touch up paint around a door frame, the brush loaded with matching wall color filling in a small nail hole that has been patched with spackle and sanded smooth, the surrounding wall shows clean existing paint, the door trim is white and perfectly taped, extreme attention to detail visible in the steady hand position, a small cup of paint and a putty knife resting on a folded rag on the floor nearby, natural indoor lighting from a nearby window, the scene conveys precision repair work rather than full painting, no text, no logos, no watermarks, macro photography style, Canon EOS R5, 50mm, f/2.8, landscape orientation 4:3

7. **Custom Finishes & Specialty Coatings** — Interior photograph of a professional applying a decorative lime wash finish to a living room accent wall, the artisan using a wide trowel to create organic textured patterns in the plaster-like coating, half the wall showing the finished soft matte texture in warm clay tones while the other half is mid-application, the room has modern minimalist furniture and a large window casting natural side light that highlights the texture, paint supplies and mixing buckets on a covered floor, the scene shows artistic craftsmanship, no text, no logos, no watermarks, Canon EOS R6, 35mm, f/3.5, natural light, landscape orientation 4:3

8. **Free Color Consultation** — Overhead flat-lay photograph of a color consultation spread on a kitchen countertop, several large paint swatches fanned out in coordinating tones of sage greens, warm whites, and soft grays, a few paint chip cards, a painter's color wheel, a small notepad with handwritten color notes, a sample pot of paint with a brush resting on top showing a test swatch on a piece of white board, natural kitchen light from above, the arrangement feels organic and in-progress not staged, warm inviting feeling, countertop is light quartz or marble, no text overlays, no logos, no watermarks, lifestyle photography, f/1.8, portrait mode blur on edges, landscape orientation 4:3

## Steps

1. Generate all 8 images using `google/gemini-2.5-flash-image` (one call per image)
2. Save each as a `.webp` file in `src/assets/`
3. Update all 8 import lines in `src/pages/Services.tsx` to point to the new files

## Technical Details

- Model: `google/gemini-2.5-flash-image` with `modalities: ["image", "text"]`
- Each image generated individually to maximize quality
- All saved as `.webp` for consistency with recent image updates
- Only the import lines in `Services.tsx` change (lines 17-24) -- no layout or structural changes
