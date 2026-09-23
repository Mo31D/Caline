# Stage 16 — Feature Image Section Polish

**Date:** 2026-09-23

## Trigger

Mobile screenshots showed two issues in the new image sections:

1. fallback labels such as `CALINE Bespoke Collections` and `CALINE Craft & making` appeared under the images;
2. the image sections had excessive vertical space and unstyled service tags on Safari.

## Root cause

The new section markup had deployed before Safari refreshed the latest `site.css`.

Because the stylesheet URL was unchanged, the browser could keep an older cached stylesheet.

## Fixes

### Cache busting

All 14 localized pages now load:

- `../assets/site.css?v=20260923-16`
- `../assets/site.js?v=20260923-16`

This forces browsers to request the current visual system.

### Fallback safety

The image fallback labels are now hidden at HTML level, not only by CSS.

They are revealed only if the image genuinely fails to load.

This prevents fallback text from appearing beneath a successfully loaded image even when styles are temporarily stale.

### Bespoke Collections

Improved:
- reduced top/bottom space on mobile;
- cleaner 4:3 editorial image treatment;
- edge-to-edge image presentation on phone;
- tighter image-to-copy rhythm;
- clearer service chips;
- improved mobile H2 sizing;
- stronger copy hierarchy.

### Manufacturing visual story

Improved:
- same mobile image treatment for consistency;
- less dead space;
- clearer feature chips;
- improved heading/body spacing;
- desktop layout differs from Gifts: copy and image alternate to avoid repetition.

## QA

Confirmed:
- all 14 localized pages use the new versioned CSS and JS URLs;
- fallback labels are HTML-hidden by default;
- CSS braces are balanced;
- Stage 16 overrides are present in the stylesheet.
