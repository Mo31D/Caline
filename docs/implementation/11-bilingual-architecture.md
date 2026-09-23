# Stage 11 — Full English / Arabic Architecture

**Date:** 2026-09-23  
**Repository:** `Mo31D/Caline`

## Objective

Make Caline genuinely bilingual in the same structural sense as the BM HAIR project: separate language routes, independent metadata and full RTL support rather than translating text inside one URL.

## Architecture implemented

### English

- `/en/`
- `/en/chocolate.html`
- `/en/gifts.html`
- `/en/manufacturing.html`
- `/en/about.html`
- `/en/contact.html`
- `/en/selection.html`

### Arabic

- `/ar/`
- `/ar/chocolate.html`
- `/ar/gifts.html`
- `/ar/manufacturing.html`
- `/ar/about.html`
- `/ar/contact.html`
- `/ar/selection.html`

## Root routing

The root URLs now act as lightweight language routers.

They:
1. respect the last language selected by the visitor;
2. otherwise use the browser language;
3. default to English for non-Arabic browsers;
4. expose direct English and Arabic links as fallback.

## Language switching

The header language control is a real link to the equivalent page in the other language.

Example:

`/en/manufacturing.html` ↔ `/ar/manufacturing.html`

The user does not lose their current section when changing language.

## SEO

Implemented:

- separate canonical URLs by language;
- `hreflang="en"`;
- `hreflang="ar"`;
- `hreflang="x-default"`;
- bilingual sitemap;
- localized titles and meta descriptions;
- localized homepage structured data;
- `My Selection` marked `noindex,follow` because it is a utility rather than a search landing page.

## Arabic implementation

Arabic is not an afterthought/overlay.

Implemented:
- `lang="ar"`;
- `dir="rtl"`;
- Arabic-specific typography;
- logical CSS properties;
- RTL navigation and layout behaviour;
- Arabic microcopy for interactive selection controls;
- Arabic-specific decorative details;
- Arabic titles/descriptions and visible page content.

## Shared functionality across languages

The following remain consistent across English and Arabic:

- My Selection contents;
- category IDs;
- email enquiry flow;
- responsive behaviour;
- global header/footer;
- no-payment ordering model.

A selection started in English remains available after switching to Arabic and vice versa.

## QA completed

Source QA confirmed:

- all 14 localized pages exist;
- no missing localized route;
- no remaining `data-en` / `data-ar` translation placeholders in localized pages;
- JavaScript parses successfully;
- CSS braces are balanced;
- Arabic catalogue buttons no longer fall back to English;
- legacy product/store URLs continue through redirects rather than exposing the old template.

## Remaining content dependency

The site is structurally ready for expansion.

The next major content upgrade requires current Caline-owned data:

- authoritative SKU list;
- current product photographs;
- weights / piece counts;
- prices by market;
- ingredients / allergens;
- active branches and contact channels;
- current B2B capabilities.

These can now be added without another architecture rebuild.
