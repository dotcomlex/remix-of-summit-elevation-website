
# Fix Navigation Alignment (Desktop + Mobile)

## Problem
The desktop logo (`h-48`/`h-56`) is extremely tall, causing a huge vertical gap between the nav links at the top and the logo hanging far below. On mobile, `h-40`/`h-44` also creates excessive top spacing.

## Solution
Reduce logo sizes to reasonable dimensions and re-align everything properly.

### Desktop (`Navigation.tsx`)
- Reduce logo from `h-48 xl:h-56` to `h-24 xl:h-28` -- still prominent but not absurdly tall
- Change `items-start` back to `items-center` so logo and nav links sit on the same horizontal line
- Remove the `pt-6` from `<nav>` since vertical centering handles alignment now

### Mobile (`Navigation.tsx`)
- Reduce logo from `h-40 sm:h-44` to `h-20 sm:h-24`
- Reduce container top padding from `py-3` to `py-2` to minimize the gap above the logo

### File
- `src/components/layout/Navigation.tsx` -- only file changed
