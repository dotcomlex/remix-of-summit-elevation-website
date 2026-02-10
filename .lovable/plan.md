

# Fix Desktop Nav Spacing Without Shrinking Logo

## Problem
The `items-center` on the desktop nav flex container vertically centers the nav links relative to the tall logo. Since the logo is `h-48`/`h-56`, the nav links get pushed way down.

## Solution
Change `items-center` to `items-start` on the desktop nav flex container, and add top padding to the nav element so the links sit at a comfortable position near the top of the header -- independent of logo height.

### Change in `src/components/layout/Navigation.tsx`

**Line 42**: Change `items-center` to `items-start`

```
<div className="hidden lg:flex items-start justify-between">
```

**Line 52**: Add top padding to the nav so links align nicely near the top:

```
<nav className="pt-6">
```

This way the logo stays massive, and the nav links stay near the top of the viewport regardless of logo height. Nothing else is touched.
