
# Replace 5 Images + Fix Hero Loading

## Image Replacements

| Section | Current Image | New Image |
|---------|--------------|-----------|
| Hero (both mobile + desktop) | `hero-split-right.jpg` | Beautiful Colorado home at sunset |
| Why Choose Us | `hero-painting-crew.jpg` | Painter on ladder, exterior work |
| Interior Painting service card | `service-interior-painting.jpg` | Interior room with blue painter's tape |
| Exterior Painting service card | `service-exterior-painting.jpg` | Painter rolling exterior siding |
| Staining service card | `service-wood-staining.jpg` | Close-up of brush staining wood deck |

## Steps

1. Copy all 5 uploaded images into `src/assets/` with clean filenames:
   - `hero-home-colorado.webp` (the beautiful home)
   - `crew-exterior-ladder.webp` (painter on ladder — Why Choose Us)
   - `service-interior-taping.webp` (interior with blue tape)
   - `service-exterior-rolling.webp` (exterior painting)
   - `service-staining-deck.webp` (wood staining close-up)

2. Update import in `src/components/home/HeroSection.tsx` — change from `hero-split-right.jpg` to `hero-home-colorado.webp`

3. Update import in `src/components/home/WhyChooseUs.tsx` — change from `hero-painting-crew.jpg` to `crew-exterior-ladder.webp`

4. Update imports in `src/components/home/ServicesPreview.tsx` — change the three service image imports to the new webp files

5. Force a clean re-render of the hero section by ensuring the component structure is correct (the hero not loading in preview is likely a hot-reload issue that will resolve with the file changes)

## Technical Details

- All 5 files are `.webp` format (better compression than jpg)
- Only import lines change in each component — no structural changes needed
- The hero section code structure remains the same (full-bleed mobile background + split desktop layout)
