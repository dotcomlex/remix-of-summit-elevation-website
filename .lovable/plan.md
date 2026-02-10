

# Move Image Below Subheadline on Mobile Only (WhyChooseUs)

## What Changes
On mobile only, the image (currently at the bottom after the CTA) will appear directly under the subheadline ("We've painted over 1,000 homes..."). Desktop layout stays exactly the same.

## Technical Approach (`src/components/home/WhyChooseUs.tsx`)

1. **Duplicate the image block** -- add a mobile-only copy (`block lg:hidden`) right after the subheadline paragraph (line 51), before the reasons list.

2. **Hide the original image** on mobile -- add `hidden lg:block` to the existing right-column `AnimatedSection` (line 79) so it only shows on desktop.

This avoids restructuring the grid or touching any desktop styles. The mobile image will use the same `paintingCrewImage` with the floating testimonial card, just rendered in a different position via show/hide classes.

