# Caline Website Audit — Stage 7: Professional Design & UX Audit

**Project:** Caline Chocolate  
**Repository:** `Mo31D/Caline`  
**Research date:** 2026-09-23

## Purpose

This stage evaluates the current website as an interface and customer journey, independently of the factual/product problems documented in Stages 2–5.

The question is:

> Why does the current site still feel like an unfinished template rather than a professional premium chocolate brand?

---

# 1. Executive diagnosis

The site does not have one coherent design system or one coherent customer journey.

It currently behaves like **three separate websites joined together**:

1. the homepage uses a large slide-out sidebar;
2. most inner pages use a conventional Bootstrap top navigation;
3. the store uses a third, custom header/navigation pattern.

This inconsistency alone prevents the experience from feeling deliberate and premium.

The redesign needs to begin with:
- one information architecture;
- one header;
- one responsive system;
- one type scale;
- one spacing system;
- one component system;
- one product/content model.

---

# 2. Navigation audit

## Homepage

The homepage uses:

`#sidebar`

with a fixed/minimum width of roughly **250px**, plus a separate menu-collapse button.

This is visually heavy and unusual for a premium retail/manufacturing brand.

## Inner pages

Pages such as About and Products switch to:

`navbar navbar-expand-md navbar-dark`

This is a completely different navigation paradigm.

## Store

The store then introduces a third structure:

- logo;
- simple `<header>`;
- custom `.nav-links`;
- a reduced menu containing Home / About / Store / Contact.

## UX effect

A customer moving from:
- Home → Products → Store

experiences three different site shells.

That creates the subconscious impression that pages were assembled at different times from different templates.

### Recommendation

Build **one global header component** and use it on every page.

---

# 3. Proposed primary information architecture

The final information architecture should be based on verified business reality, not the prototype’s invented categories.

A strong initial structure is:

### Primary
- Home
- Chocolate
- Gifts
- Manufacturing
- Our Story
- Contact / Locations

### Conditional — only if confirmed
- Corporate / Private Label
- Wholesale
- Shop Online

### Utility
- language switcher if bilingual;
- search only when the real catalogue is large enough;
- cart only when real ecommerce exists.

Do **not** keep a primary navigation item named “Sugar Free” merely because the prototype contains it. That product range is currently unverified.

---

# 4. Homepage hierarchy audit

## Current hero

The hero repeats essentially the same slide three times:
- Caline Chocolate;
- the same positioning sentence;
- the same image.

There is no meaningful reason to use a carousel.

### Why this fails

Carousels are being used to create movement rather than communicate different information.

A premium homepage should establish the brand in seconds.

### Recommended hero model

One strong hero:
- authentic Caline product or production photograph;
- restrained headline;
- one supporting statement;
- one primary CTA;
- optional secondary CTA.

Example information hierarchy:

**Caline**  
Handmade chocolate. Crafted from bean to finished piece.  
**Explore Chocolate** / **Discover Our Craft**

Exact copy should be written only after final fact verification.

---

# 5. Excessive hero typography

Current CSS sets:

`.designer h1`
- **120px** font size;
- **120px** line height.

Tablet still uses around **104px**.

Mobile reduces this to 50px but retains an 80px line height.

This is not a controlled responsive type scale.

### Problem

The oversized text is compensating for weak visual hierarchy rather than expressing a deliberate editorial system.

### Recommendation

Use fluid typography with a bounded scale, for example via `clamp()`, and tune it around:
- content width;
- Arabic/Latin line length;
- actual hero image;
- viewport height.

---

# 6. Homepage content flow

Current order is roughly:

1. repeated hero carousel;
2. “free delivery” headline;
3. carousel of generic products;
4. featured products;
5. miscellaneous English phrases;
6. more generic product cards;
7. “coming soon”;
8. fake/template testimonials;
9. unsupported statistics;
10. large footer.

This flow has no single commercial narrative.

## Recommended homepage flow

### 1. Brand statement
What Caline is.

### 2. Signature collections
Only real product families/SKUs.

### 3. Craft / manufacturing
Hamriyah Free Zone + bean-to-bar / handmade story, using verified wording.

### 4. Gifting
Gift boxes and premium presentation.

### 5. Factory provenance
Real production/process imagery.

### 6. Regional presence / contact
Only currently verified active locations.

### 7. Corporate capability
Only if private-label/B2B is confirmed.

### 8. Footer
Compact, useful and trustworthy.

---

# 7. Product discovery audit

The current site splits product browsing across:

- `product.html`
- `luxury.html`
- `sugarfree.html`
- `combos.html`
- `store.html`
- sections on `index.html`

There is no stable catalogue taxonomy.

### Problem

A customer cannot know:
- which page is the real shop;
- whether “Luxury” is a collection or category;
- whether “Products” and “Store” differ;
- which products are actually available.

### Recommendation

Create one canonical product model.

At minimum:

`/chocolate/`
- All / Collections
- Dark
- Milk
- White
- Pralines & Bonbons
- Truffles
- Gift Boxes

When a verified current catalogue is obtained, individual SKU pages can sit beneath this structure.

---

# 8. Product-card design audit

Current cards are essentially:
- image;
- name;
- price;
- “buy now”.

They do not communicate the information premium chocolate shoppers need.

A mature product card should support:
- correct product name;
- hero packshot;
- weight/piece count;
- concise flavour/filling descriptor;
- price;
- relevant dietary/allergen badge only when verified;
- availability;
- link to detail page.

A product page should then carry:
- description;
- ingredients;
- allergens;
- storage;
- shelf life;
- weight/pieces;
- packaging;
- delivery information.

---

# 9. Ecommerce journey audit

The current store visually implies a functioning commerce flow but technically does not provide one.

From a UX/trust perspective this is worse than having no checkout.

A user can:
- add products;
- see a cart;
- enter delivery details;
- click submit;
- receive a success message;

but the order is not reliably submitted to a business backend.

### Recommendation

Until real ecommerce is implemented:

**Do not display a fake checkout.**

Use one of two honest states:

### Option A — catalogue website
- “Enquire / Order via WhatsApp” or contact channel;
- no fake cart.

### Option B — real ecommerce
- verified catalogue;
- persistent backend;
- order records;
- inventory/availability;
- payment;
- transactional confirmation;
- shipping logic;
- policies.

---

# 10. Responsive/mobile audit

The responsive stylesheet is a collection of breakpoint patches rather than a mobile-first system.

Examples:

- sidebar visibility is controlled with hard-coded `margin-left: -250px`;
- this is conceptually LTR-oriented despite the Arabic interface;
- mobile and tablet rules repeatedly override navigation position;
- hero spacing is patched differently across breakpoints;
- carousel controls are repositioned with percentage offsets;
- some controls are simply hidden under 767px.

### Why this matters

The layout may appear acceptable at a handful of widths but is structurally fragile between breakpoints.

### Recommendation

Rebuild mobile-first using:
- CSS logical properties (`margin-inline`, `padding-inline`);
- CSS Grid/Flexbox;
- a small number of content-driven breakpoints;
- fluid type and spacing;
- no directional hacks tied to LTR.

---

# 11. RTL audit

The site is Arabic but RTL implementation is inconsistent.

Examples:
- some documents explicitly use `dir="rtl"`;
- the homepage structure historically inherited template/LTR assumptions;
- sidebar hiding uses left-margin logic;
- Bootstrap utility classes such as `mr-auto` come from LTR conventions;
- English labels and Arabic content are mixed without a deliberate bilingual typography system.

### Recommendation

RTL must be part of the architecture, not a final override.

Use:
- `dir="rtl"` at document level for Arabic;
- logical CSS properties;
- Arabic-tested typography;
- mirrored icon/interaction behaviour where semantically necessary.

---

# 12. Visual density and spacing

The current site relies heavily on:
- 80–100px blanket section paddings;
- large decorative backgrounds;
- carousel chrome;
- oversized headings;
- repeated ornamental elements.

The result is “big” but not necessarily luxurious.

Premium design usually benefits from:
- fewer elements;
- more purposeful whitespace;
- controlled line length;
- stronger alignment;
- image-led rhythm;
- clear hierarchy.

Luxury is better communicated through **restraint** than through decoration.

---

# 13. Colour-system audit

The stylesheet includes multiple similar browns and oranges:
- `#432b1f`
- `#382014`
- `#352015`
- `#d27130`
- `#cf5716`
plus several unrelated dark shades.

This is not a tokenised colour system.

### Recommendation

Define semantic tokens such as:

- `--surface-primary`
- `--surface-dark`
- `--text-primary`
- `--text-inverse`
- `--brand-gold`
- `--brand-cocoa`
- `--brand-ivory`
- `--border-subtle`

The UI should not use arbitrary brown/orange values per component.

---

# 14. Typography-system audit

The CSS imports/mixes:
- Rajdhani;
- Poppins;
- Roboto;
- Open Sans;
- Snell script fonts.

This is excessive.

The Caline logo already provides a decorative script signature.

### Recommendation

Use:
- one strong Arabic text/display family;
- one compatible Latin family;
- limited weight range;
- consistent type tokens.

No additional script font should compete with the Caline logo.

---

# 15. Testimonials and social proof

Current testimonial section repeats:
- **DIANA MORJU**
- generic/template English text.

This must be removed.

### Correct social-proof hierarchy

Use only evidence that can be attributed:
- genuine customer reviews with source/permission;
- verified press;
- manufacturing credentials;
- factual company history;
- real retail/factory imagery.

For Caline, **provenance and craft are stronger trust signals than anonymous testimonials**.

---

# 16. Trust architecture

A premium food brand website needs visible trust.

Currently missing or weak:

- real product specifications;
- ingredients;
- allergens;
- policies;
- active locations;
- real ordering process;
- business/company details;
- source-backed history;
- working customer service routes.

### Recommendation

Trust should be built into page structure, not relegated to footer text.

---

# 17. Footer audit

The current footer is visually large and includes numerous non-functional service links.

It also uses a large decorative background.

### Recommendation

Use a compact structured footer:

**Explore**
- Chocolate
- Gifts
- Our Story
- Manufacturing

**Help**
- Contact
- Delivery
- Returns
- FAQs

Only include Help links once real policy pages exist.

**Company**
- verified legal/company identity;
- verified contact details;
- social links.

---

# 18. Contact journey

Current contact form routes through a third-party FormSubmit endpoint to a personal Gmail address.

From the user’s perspective there is no clear differentiation between:
- customer service;
- retail orders;
- wholesale;
- manufacturing enquiry;
- franchise/private-label enquiry.

### Recommendation

Once business services are verified, use structured enquiry types.

For example:
- General enquiry
- Retail/order support
- Wholesale
- Manufacturing / B2B

Do not show options for services that have not been confirmed.

---

# 19. Proposed page architecture

## Home
Brand + key collections + craft/manufacturing + gifting + provenance.

## Chocolate / Collections
One catalogue hub.

## Product detail
Only for verified current products.

## Gifts
Gift boxes / occasions, if current.

## Manufacturing
Factory / bean-to-bar / capabilities.

## Our Story
History and Caline identity based on verified facts.

## Contact / Locations
Only active, verified locations and channels.

## Optional B2B
Only if private-label/wholesale/manufacturing services are confirmed.

---

# 20. Component system required

The redesign should be built from a small, intentional component library:

- Global header
- Mobile navigation
- Hero
- Editorial split section
- Collection card
- Product card
- Product grid
- Product detail media gallery
- Provenance/fact block
- Quote/press block
- Location card
- CTA band
- Structured footer

The current site instead uses page-specific markup and repeated template sections.

---

# 21. UX priority list

## Critical
1. one navigation system;
2. one canonical catalogue;
3. remove fake ecommerce;
4. remove unsupported content;
5. establish mobile-first RTL architecture.

## High
6. simplify homepage story;
7. real product photography;
8. manufacturing/provenance section;
9. coherent typography;
10. trustworthy contact journey.

## Medium
11. animation/micro-interactions;
12. editorial storytelling;
13. richer product filters after catalogue grows.

---

# Stage 7 conclusion

The current site’s lack of professionalism is not solved by “polishing CSS”.

It requires an architectural redesign.

The biggest shift is:

> from **template pages + decorative chocolate graphics**  
> to **one coherent premium brand system built around real products, provenance and manufacturing.**

---

## Next stage

**Stage 8 — New Professional Design Direction**

The next report will convert all verified research into a concrete creative direction:
- visual concept;
- homepage wireframe;
- typography direction;
- colour/material system;
- photography direction;
- interaction style;
- desktop/mobile behaviour;
- what should make Caline distinct from generic luxury-chocolate websites.
