

# Fix Mobile Logo Centering

## Overview
Single change in Navigation.tsx to replace the mobile header layout. The grid-based approach constrains the logo to the middle third of the viewport. Switching to flexbox with an absolutely-positioned hamburger lets the logo center across the full width.

## Change

**File: `src/components/layout/Navigation.tsx` (lines 78-96)**

Replace the entire Mobile Header block:
- `grid grid-cols-3` becomes `relative flex justify-center` so the logo centers across full viewport width
- Remove the empty `<div />` spacer (no longer needed)
- Hamburger button becomes `absolute right-4`, removed from centering flow
- `pr-14` on the Link offsets the logo slightly to avoid hamburger overlap
- Logo bumped from `h-44 sm:h-48` to `h-48 sm:h-52`

Nothing else changes: desktop nav, mobile overlay, logo filter, animations all stay as-is.

