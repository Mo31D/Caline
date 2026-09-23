# Stage 12 — Brand Copy Refinement

**Date:** 2026-09-23  
**Repository:** `Mo31D/Caline`  
**Scope:** Full English and Arabic public-facing copy review

## Objective

Replace copy that felt generated, explanatory or overly corporate with language that is:

- easy to read aloud;
- short enough to remember;
- warm without becoming casual;
- premium without sounding pretentious;
- emotionally relevant to chocolate and gifting;
- natural in each language rather than literally translated.

## Voice adopted

Caline now speaks in short, confident phrases.

The writing avoids:
- internal audit language;
- design commentary;
- excessive words such as “heritage”, “documented”, “current”, “established” in customer-facing areas;
- long abstract sentences;
- generic AI-luxury phrases;
- literal English-to-Arabic translation when a better Arabic line exists.

The preferred rhythm is closer to strong retail copy such as the best sections of Lakeside Picnic: one clear thought at a time.

## Homepage hero

### English

> **Made with passion.**  
> **Shared with love.**

Supporting copy:

> From chocolate made in Sharjah to gift boxes made for special moments, Caline brings craft and beautiful presentation together.

### Arabic

> **تُصنع بشغف.**  
> **وتُهدى بمحبة.**

Supporting copy:

> من صناعة الشوكولاتة في الشارقة إلى علب هدايا صُممت للحظات الخاصة، تجمع كالين بين الحرفة وجمال التقديم.

This was chosen instead of “Chocolate, made with love” because it connects naturally to `Passion au Chocolat`, gifting and sharing while remaining simple.

## Key page headlines

### Chocolate

**EN:** Find your kind of chocolate.  
**AR:** اختر الشوكولاتة الأقرب لذوقك.

### Gifts

**EN:** A gift should feel special before it’s opened.  
**AR:** الهدية الجميلة تفرح قبل أن تُفتح.

### Manufacturing

**EN:** Behind every box, there’s a making story.  
**AR:** وراء كل علبة، حكاية صناعة.

### Our Story

**EN:** A story shaped by chocolate.  
**AR:** قصة صنعتها الشوكولاتة.

### Contact

**EN:** What can we help you find?  
**AR:** كيف يمكننا مساعدتك؟

### Saved list

**EN:** Your Caline list.  
**AR:** قائمتك من كالين.

## Other notable rewrites

Examples of the new rhythm:

**EN**
- Made to give. Made to remember.
- Start with the chocolate.
- It starts long before the box.
- Choose what catches your eye.
- Some gifts begin their magic before they are even opened.
- The first impression is part of the gift.
- From Sharjah, across the Gulf.
- New collections. New markets. Still Caline.

**AR**
- صُنعت لتُهدى. وتبقى في الذاكرة.
- ابدأ بالشوكولاتة.
- القصة تبدأ قبل العلبة.
- اختر ما لفت انتباهك.
- بعض الهدايا تبدأ فرحتها قبل أن تُفتح.
- الانطباع الأول جزء من الهدية.
- من الشارقة، عبر الخليج.
- مجموعات جديدة. أسواق جديدة. وكالين كما هي.

## English / Arabic relationship

The two languages carry the same brand idea, but are **not forced into literal sentence-by-sentence translation**.

Examples:

- “Find your kind of chocolate.” became  
  “اختر الشوكولاتة الأقرب لذوقك.”

- “A gift should feel special before it’s opened.” became  
  “الهدية الجميلة تفرح قبل أن تُفتح.”

The Arabic version prioritises natural rhythm and clarity over mirroring English grammar.

## Microcopy revised

The interaction language was also simplified:

- `My selection` → `My list`
- `اختياراتي` → `قائمتي`
- `Add to selection` → `Add to my list`
- `أضف للاختيارات` → `أضف لقائمتي`
- copied/saved/empty-state messages were rewritten in both languages.

## Metadata revised

Titles and descriptions were rewritten to sound natural while retaining search intent.

The conversion process also received a technical polish:
- removed literal `\n` characters from localized head markup;
- updated theme metadata to the new Black Cacao colour;
- aligned homepage Open Graph and structured-data descriptions with the new copy.

## QA

Confirmed for all 14 localized public pages:

- no leftover `data-en` / `data-ar` translation attributes;
- no old “My selection” / “اختياراتي” terminology;
- no internal “rebuild”, “fake”, or “verify first” wording;
- no literal `\n` artefacts in localized HTML;
- page titles and H1 copy are language-specific;
- English and Arabic retain separate URLs and RTL/LTR behaviour.

## Rule for future Caline copy

Before adding new public copy, ask:

1. Could a customer understand it on the first read?
2. Would a person naturally say it?
3. Does it contain one clear idea rather than three?
4. Does it sound specifically appropriate to Caline, chocolate or gifting?
5. Is the Arabic written as good Arabic rather than translated English?
6. Can a shorter phrase say the same thing better?

If not, rewrite it before publishing.
