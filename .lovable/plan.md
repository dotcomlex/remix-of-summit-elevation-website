
# Update Gallery Section Background

## What Changes

Replace the current dark navy/blue background of the 3D gallery section with a calm, textured green theme that matches the rest of the site's forest green and cream aesthetic.

## Approach

Modify `src/components/home/GallerySection.tsx` -- specifically the 4 background overlay `div` layers (lines 93-112):

- **Base gradient**: Change from dark navy (`#0a1628` / `#0d1f3c`) to deep forest greens (`#0f2419` via `#132e1f` to `#0a1a10`) -- rich, dark emerald tones
- **Radial glow**: Shift from blue tint to a warm green/gold glow using the brand's primary green
- **Mesh gradient**: Update the radial spots to use forest greens and warm gold accents instead of blue/purple
- **Add paper texture overlay**: Layer the existing `paper-texture-light.jpg` asset on top with low opacity (`opacity-[0.04]`) and `mix-blend-mode: overlay` to give it a subtle organic, textured feel -- matching how the Services and Contact pages use texture
- **Vignette**: Keep as-is (it's neutral black, works with any base)

Also update the text colors that reference blue-ish tones (the instruction text `text-white/40` stays fine since it's neutral).

### Technical Details

**File**: `src/components/home/GallerySection.tsx`
- Replace the 4 background layers with forest-green equivalents
- Add a 5th layer: `<div>` with the paper texture image as a background, low opacity, for that calm textured feel
- Import `paperTexture from "@/assets/paper-texture-light.jpg"` at the top

No other files need changes.
