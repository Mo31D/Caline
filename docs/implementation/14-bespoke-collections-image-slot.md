# Stage 14 — Bespoke Collections Image Slot

**Date:** 2026-09-23  
**Repository:** `Mo31D/Caline`

## Purpose

Prepare the Gifts page to receive the generated Caline bespoke-collections image without requiring any further code change after upload.

## Final image path

`images/gifts/caline-bespoke-collections-gift-box.png`

The image must be uploaded using this exact filename.

## Placement

Added a new dedicated visual section between:
1. the gift-box enquiry section; and
2. the dark “Art of Giving” section.

This placement gives the image a full editorial role instead of using it as a small card image.

## Section purpose

The new block introduces:

- Custom Chocolate
- Private Label
- Bespoke Collections

Arabic equivalent:
- شوكولاتة مخصصة
- علامة خاصة
- مجموعات مصممة خصيصًا

## Responsive behaviour

Desktop:
- large image on one side;
- copy and service tags on the other.

Tablet/mobile:
- image moves above the copy;
- edge-to-edge treatment on phones;
- typography and tags scale down cleanly.

## Missing-image behaviour

Until the final image is uploaded, the page will not show a browser broken-image icon.

Instead it displays a branded Caline fallback panel.

As soon as the file is uploaded to the exact path, the real image will display automatically.

## Files changed

- `en/gifts.html`
- `ar/gifts.html`
- `assets/site.css`
- `images/gifts/.gitkeep`

## Upload instruction

Upload:

`caline-bespoke-collections-gift-box.png`

to:

`images/gifts/`

Final repository path:

`images/gifts/caline-bespoke-collections-gift-box.png`
