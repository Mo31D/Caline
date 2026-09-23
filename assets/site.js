(() => {
  const EMAIL = 'info@calinefactory.com';
  const STORAGE_KEY = 'caline-selection-v1';
  const LANG_KEY = 'caline-language';

  const collections = {
    assorted: {
      en: 'Assorted Chocolates',
      ar: 'تشكيلات الشوكولاتة',
      descEn: 'A mixed presentation of moulded chocolates, pralines and bonbons.',
      descAr: 'تشكيلة تقديم متنوعة من الشوكولاتة المشكلة والبرالين والبونبون.'
    },
    dark: {
      en: 'Dark Chocolate',
      ar: 'الشوكولاتة الداكنة',
      descEn: 'Dark chocolate selections form part of Caline’s documented retail history.',
      descAr: 'تظهر تشكيلات الشوكولاتة الداكنة ضمن السجل التاريخي الموثق لمنتجات كالين.'
    },
    white: {
      en: 'White Chocolate',
      ar: 'الشوكولاتة البيضاء',
      descEn: 'A historically documented Caline retail category; current selection varies by market.',
      descAr: 'فئة ظهرت تاريخيًا ضمن منتجات كالين، وتختلف التشكيلة الحالية حسب السوق.'
    },
    truffles: {
      en: 'Truffles',
      ar: 'الترافل',
      descEn: 'Premium decorated truffles are part of Caline’s historical boutique presentation.',
      descAr: 'ظهر الترافل الفاخر والمزين ضمن أسلوب العرض التاريخي لمتاجر كالين.'
    },
    gifts: {
      en: 'Gift Boxes',
      ar: 'علب الهدايا',
      descEn: 'Presentation boxes and assorted chocolate gifting, with current formats available on request.',
      descAr: 'علب تقديم وهدايا شوكولاتة مشكلة، مع توفر التفاصيل الحالية عند الطلب.'
    }
  };

  const shellText = {
    en: {
      top: 'Chocolate manufacturing heritage · Sharjah, UAE',
      topLink: 'Our craft',
      chocolate: 'Chocolate',
      gifts: 'Gifts',
      manufacturing: 'Manufacturing',
      story: 'Our Story',
      contact: 'Contact',
      selection: 'My selection',
      menu: 'Menu',
      close: 'Close',
      language: 'AR',
      footerIntro: 'Caline combines a documented manufacturing heritage in Sharjah with a long-standing identity built around chocolate craft and presentation.',
      explore: 'Explore',
      company: 'Company',
      help: 'Enquiries',
      currentRange: 'Current range',
      availability: 'Availability varies by market and season.',
      email: 'Email Caline',
      rights: 'Caline Chocolate. All rights reserved.',
      research: 'Brand research record',
      selected: 'Added to selection',
      removed: 'Removed from selection'
    },
    ar: {
      top: 'إرث في صناعة الشوكولاتة · الشارقة، الإمارات',
      topLink: 'حرفتنا',
      chocolate: 'الشوكولاتة',
      gifts: 'الهدايا',
      manufacturing: 'التصنيع',
      story: 'قصتنا',
      contact: 'تواصل معنا',
      selection: 'اختياراتي',
      menu: 'القائمة',
      close: 'إغلاق',
      language: 'EN',
      footerIntro: 'تجمع كالين بين إرث موثق في صناعة الشوكولاتة بالشارقة وهوية ممتدة ترتكز على الحرفة وفن التقديم.',
      explore: 'اكتشف',
      company: 'الشركة',
      help: 'الاستفسارات',
      currentRange: 'التشكيلة الحالية',
      availability: 'تختلف التشكيلة حسب السوق والموسم.',
      email: 'راسل كالين',
      rights: 'كالين للشوكولاتة. جميع الحقوق محفوظة.',
      research: 'سجل البحث والهوية',
      selected: 'تمت الإضافة للاختيارات',
      removed: 'تمت الإزالة من الاختيارات'
    }
  };

  const icon = {
    menu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    bag: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
    arrow: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
  };

  function getLang() {
    return localStorage.getItem(LANG_KEY) === 'ar' ? 'ar' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dataset.lang = lang;
    applyPageTranslations(lang);
    renderShell();
    updateSelectionUI();
    document.dispatchEvent(new CustomEvent('caline:language', { detail: { lang } }));
  }

  function applyPageTranslations(lang) {
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      const value = lang === 'ar' ? el.dataset.ar : el.dataset.en;
      if (value != null) el.innerHTML = value;
    });
    document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(el => {
      el.placeholder = lang === 'ar' ? el.dataset.placeholderAr : el.dataset.placeholderEn;
    });
    const title = document.body.dataset[lang === 'ar' ? 'titleAr' : 'titleEn'];
    const desc = document.body.dataset[lang === 'ar' ? 'descriptionAr' : 'descriptionEn'];
    if (title) document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute('content', desc);
  }

  function currentPage() {
    const p = location.pathname.split('/').pop() || 'index.html';
    if (p === '' || p === 'index.html') return 'home';
    if (p.includes('chocolate')) return 'chocolate';
    if (p.includes('gifts')) return 'gifts';
    if (p.includes('manufacturing')) return 'manufacturing';
    if (p.includes('about')) return 'story';
    if (p.includes('contact')) return 'contact';
    if (p.includes('selection')) return 'selection';
    return '';
  }

  function navLink(href, key, active, t) {
    const attr = active === key ? ' aria-current="page"' : '';
    return '<a href="' + href + '"' + attr + '>' + t[key] + '</a>';
  }

  function renderShell() {
    const lang = getLang();
    const t = shellText[lang];
    const active = currentPage();
    const selected = getSelection();

    const headerMount = document.querySelector('[data-site-header]');
    if (headerMount) {
      headerMount.innerHTML =
        '<a class="skip-link" href="#main">Skip to content</a>' +
        '<div class="top-note"><div class="wrap"><span>' + t.top + '</span><a href="manufacturing.html">' + t.topLink + ' ' + icon.arrow + '</a></div></div>' +
        '<header class="site-header"><div class="wrap header-row">' +
          '<a class="brand" href="index.html" aria-label="Caline home"><img src="images/logo.png" alt="Caline — Passion au Chocolat"></a>' +
          '<nav class="desktop-nav" aria-label="' + t.menu + '">' +
            navLink('chocolate.html','chocolate',active,t) +
            navLink('gifts.html','gifts',active,t) +
            navLink('manufacturing.html','manufacturing',active,t) +
            navLink('about.html','story',active,t) +
            navLink('contact.html','contact',active,t) +
          '</nav>' +
          '<div class="header-actions">' +
            '<button class="lang-button" type="button" data-language-toggle aria-label="Change language">' + t.language + '</button>' +
            '<a class="selection-link" href="selection.html"' + (active === 'selection' ? ' aria-current="page"' : '') + '>' + icon.bag + '<span class="selection-label">' + t.selection + '</span><span class="selection-count">' + selected.length + '</span></a>' +
            '<button class="icon-button mobile-toggle" type="button" data-mobile-toggle aria-label="' + t.menu + '">' + icon.menu + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="mobile-panel" data-mobile-panel><nav class="wrap" aria-label="' + t.menu + '">' +
          navLink('chocolate.html','chocolate',active,t) +
          navLink('gifts.html','gifts',active,t) +
          navLink('manufacturing.html','manufacturing',active,t) +
          navLink('about.html','story',active,t) +
          navLink('contact.html','contact',active,t) +
        '</nav></div></header>';

      const langBtn = headerMount.querySelector('[data-language-toggle]');
      if (langBtn) langBtn.addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));
      const menuBtn = headerMount.querySelector('[data-mobile-toggle]');
      const panel = headerMount.querySelector('[data-mobile-panel]');
      if (menuBtn && panel) {
        menuBtn.addEventListener('click', () => {
          const open = panel.classList.toggle('open');
          menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      }
    }

    const footerMount = document.querySelector('[data-site-footer]');
    if (footerMount) {
      footerMount.innerHTML =
        '<footer class="footer"><div class="wrap">' +
          '<div class="footer-main">' +
            '<div class="footer-brand"><a class="footer-logo" href="index.html"><img src="images/logo.png" alt="Caline"></a><p>' + t.footerIntro + '</p><a class="text-link" href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
            '<div class="footer-col"><h2>' + t.explore + '</h2><a href="chocolate.html">' + t.chocolate + '</a><a href="gifts.html">' + t.gifts + '</a><a href="manufacturing.html">' + t.manufacturing + '</a></div>' +
            '<div class="footer-col"><h2>' + t.company + '</h2><a href="about.html">' + t.story + '</a><a href="contact.html">' + t.contact + '</a><a href="docs/audit/README.md">' + t.research + '</a></div>' +
            '<div class="footer-col"><h2>' + t.help + '</h2><a href="selection.html">' + t.selection + '</a><a href="mailto:' + EMAIL + '">' + t.email + '</a><span>' + t.availability + '</span></div>' +
          '</div>' +
          '<div class="footer-bottom"><span>© <span data-year></span> ' + t.rights + '</span><nav><a href="contact.html">' + t.contact + '</a><a href="manufacturing.html">' + t.manufacturing + '</a></nav></div>' +
        '</div></footer>';
      const year = footerMount.querySelector('[data-year]');
      if (year) year.textContent = new Date().getFullYear();
    }
  }

  function getSelection() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value.filter(id => collections[id]) : [];
    } catch {
      return [];
    }
  }

  function saveSelection(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(list.filter(id => collections[id]))]));
    updateSelectionUI();
    document.dispatchEvent(new CustomEvent('caline:selection'));
  }

  function toggleSelection(id) {
    const list = getSelection();
    const index = list.indexOf(id);
    if (index >= 0) list.splice(index, 1);
    else list.push(id);
    saveSelection(list);
    toast(shellText[getLang()][index >= 0 ? 'removed' : 'selected']);
  }

  function updateSelectionUI() {
    const list = getSelection();
    document.querySelectorAll('.selection-count').forEach(el => el.textContent = list.length);
    document.querySelectorAll('[data-add-selection]').forEach(btn => {
      const added = list.includes(btn.dataset.addSelection);
      btn.classList.toggle('added', added);
      btn.setAttribute('aria-pressed', added ? 'true' : 'false');
      const lang = getLang();
      btn.innerHTML = added
        ? (lang === 'ar' ? 'تمت الإضافة' : 'Added')
        : (lang === 'ar' ? 'أضف للاختيارات' : 'Add to selection');
    });
  }

  function bindSelectionButtons() {
    document.querySelectorAll('[data-add-selection]').forEach(btn => {
      btn.addEventListener('click', () => toggleSelection(btn.dataset.addSelection));
    });
    updateSelectionUI();
  }

  let toastTimer;
  function toast(message) {
    let node = document.querySelector('.caline-toast');
    if (!node) {
      node = document.createElement('div');
      node.className = 'caline-toast';
      Object.assign(node.style, {
        position:'fixed', insetInlineEnd:'18px', bottom:'18px', zIndex:'3000',
        background:'#251815', color:'#f5f0e8', padding:'12px 16px',
        fontSize:'.75rem', boxShadow:'0 12px 35px rgba(37,24,21,.2)'
      });
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.hidden = true, 1700);
  }

  function renderSelectionPage() {
    const mount = document.querySelector('[data-selection-list]');
    if (!mount) return;
    const lang = getLang();
    const list = getSelection();
    const title = lang === 'ar' ? 'اختياراتك' : 'Your selection';
    if (!list.length) {
      mount.innerHTML = '<div class="selection-empty">' +
        (lang === 'ar'
          ? 'لم تضف أي مجموعة بعد. استخدم صفحات الشوكولاتة والهدايا لبناء قائمة الاستفسار الخاصة بك.'
          : 'You have not added anything yet. Use the Chocolate and Gifts pages to build an enquiry list.') +
        ' <a class="text-link" href="chocolate.html">' + (lang === 'ar' ? 'استكشف الشوكولاتة' : 'Explore chocolate') + ' ' + icon.arrow + '</a></div>';
    } else {
      mount.innerHTML = list.map((id, i) => {
        const c = collections[id];
        return '<article class="selection-item"><span class="selection-index">0' + (i+1) + '</span><div><h3>' +
          (lang === 'ar' ? c.ar : c.en) + '</h3><p>' + (lang === 'ar' ? c.descAr : c.descEn) +
          '</p></div><button class="remove-item" type="button" data-remove-selection="' + id + '">' +
          (lang === 'ar' ? 'إزالة' : 'Remove') + '</button></article>';
      }).join('');
      mount.querySelectorAll('[data-remove-selection]').forEach(btn => {
        btn.addEventListener('click', () => {
          saveSelection(getSelection().filter(id => id !== btn.dataset.removeSelection));
          renderSelectionPage();
          updateEmailPreview();
        });
      });
    }
    const heading = document.querySelector('[data-selection-title]');
    if (heading) heading.textContent = title;
    updateEmailPreview();
  }

  function enquiryText() {
    const lang = getLang();
    const list = getSelection();
    const names = list.map(id => lang === 'ar' ? collections[id].ar : collections[id].en);
    if (lang === 'ar') {
      return 'مرحبًا فريق كالين،\n\nأرغب في معرفة التشكيلة الحالية والتوفر للمنتجات التالية:\n' +
        (names.length ? names.map(x => '- ' + x).join('\n') : '- أرجو إرسال الكتالوج الحالي') +
        '\n\nالسوق / المدينة: \nالكمية أو المناسبة: \n\nشكرًا.';
    }
    return 'Hello Caline team,\n\nI would like to ask about the current range and availability for:\n' +
      (names.length ? names.map(x => '- ' + x).join('\n') : '- Please send me the current catalogue') +
      '\n\nMarket / city: \nQuantity or occasion: \n\nThank you.';
  }

  function updateEmailPreview() {
    const preview = document.querySelector('[data-email-preview]');
    if (preview) preview.textContent = enquiryText();
    const email = document.querySelector('[data-email-selection]');
    if (email) {
      const subject = getLang() === 'ar' ? 'استفسار عن منتجات كالين' : 'Caline product enquiry';
      email.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(enquiryText());
    }
  }

  function bindSelectionActions() {
    const clear = document.querySelector('[data-clear-selection]');
    if (clear) clear.addEventListener('click', () => {
      saveSelection([]);
      renderSelectionPage();
    });
    const copy = document.querySelector('[data-copy-selection]');
    if (copy) copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(enquiryText());
        toast(getLang() === 'ar' ? 'تم نسخ الاستفسار' : 'Enquiry copied');
      } catch {
        toast(getLang() === 'ar' ? 'تعذر النسخ تلقائيًا' : 'Could not copy automatically');
      }
    });
  }

  function bindContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const lang = getLang();
      const data = new FormData(form);
      const type = data.get('type') || 'General enquiry';
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const market = data.get('market') || '';
      const message = data.get('message') || '';
      const selected = getSelection().map(id => lang === 'ar' ? collections[id].ar : collections[id].en);
      const subject = (lang === 'ar' ? 'استفسار من الموقع: ' : 'Website enquiry: ') + type;
      const body = [
        lang === 'ar' ? 'الاسم: ' + name : 'Name: ' + name,
        lang === 'ar' ? 'البريد: ' + email : 'Email: ' + email,
        lang === 'ar' ? 'السوق / المدينة: ' + market : 'Market / city: ' + market,
        selected.length ? (lang === 'ar' ? 'الاختيارات: ' : 'Selection: ') + selected.join(', ') : '',
        '',
        message
      ].filter(Boolean).join('\n');
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = lang === 'ar'
        ? 'سيفتح تطبيق البريد لديك لإرسال الاستفسار. لا يتم إرسال أو حفظ أي بيانات على الموقع.'
        : 'Your email app will open to send the enquiry. This website does not submit or store your details.';
    });
  }

  function init() {
    const lang = getLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    applyPageTranslations(lang);
    renderShell();
    bindSelectionButtons();
    renderSelectionPage();
    bindSelectionActions();
    bindContactForm();

    document.addEventListener('caline:language', () => {
      applyPageTranslations(getLang());
      bindSelectionButtons();
      renderSelectionPage();
      bindSelectionActions();
      updateEmailPreview();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();