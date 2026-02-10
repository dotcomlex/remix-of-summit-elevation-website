
# Testimonials Section Redesign

## Problem
The section is all white -- white background, white cards, white everywhere. Nothing pops or stands out. It feels flat and washed out.

## Solution
Use a soft warm sand/cream background for the section, and give the cards a distinct elevated look with stronger shadows and a subtle green accent treatment.

### Design Changes

**Section background**: Switch from `bg-white` to `bg-sand` (the warm cream tone already in your palette) -- this immediately separates it from the white sections above/below.

**Testimonial cards**: 
- Background stays `bg-white` -- now they contrast against the sand background
- Increase shadow from `shadow-md` to `shadow-lg` with a warm-toned shadow
- Thicken the left green accent bar from `w-1` to `w-1.5`
- Add a subtle top gradient shine on hover for polish
- Slightly larger rounded corners (`rounded-2xl` stays)

**Avatar circles**: Change from the faint `bg-primary/10` to a solid `bg-primary` with white text -- makes the initials pop instead of blending in.

**Marquee row**: Add a thin top border (`border-t border-border`) to visually separate it from the cards above. Update gradient fade masks from `from-white` to `from-sand`.

**Google rating badge**: Wrap it in a small pill/badge with a subtle border for emphasis instead of plain floating text.

### File modified
- `src/components/home/TestimonialsSection.tsx` -- all changes are in this single file
