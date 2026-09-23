(() => {
  const EMAIL = 'info@calinefactory.com';
  const PHONE = '+971501015082';
  const PHONE_DISPLAY = '+971 50 101 5082';
  const INSTAGRAM = 'https://www.instagram.com/calinefactory/';
  const STORAGE_KEY = 'caline-selection-v2';
  const LANG_KEY = 'caline-language';

  const collections = {
    'wafer-biscuit-roll': {
      en: 'Wafer Biscuit Roll',
      ar: 'رول بسكويت الويفر',
      descEn: 'Crisp wafer rolls in assorted colours, with chocolate-filled rolls shown separately. Ask about current options.',
      descAr: 'رولات ويفر مقرمشة بألوان متنوعة، مع عرض رولات محشوة بالشوكولاتة بشكل منفصل. اسأل عن الخيارات الحالية.'
    },
    'pistachio-kunafa': {
      en: 'Pistachio Kunafa Bar',
      ar: 'لوح بيستاشيو كنافة',
      descEn: 'Caline Bar Collection with pistachio-kunafa filling, shown in 80g packaging.',
      descAr: 'من مجموعة ألواح كالين بحشوة الفستق والكنافة، وتظهر العبوة بوزن 80 جم.'
    },
    assorted: {
      en: 'Assorted Chocolates',
      ar: 'تشكيلات الشوكولاتة',
      descEn: 'A mixed presentation of moulded chocolates, pralines and bonbons.',
      descAr: 'تشكيلة تقديم متنوعة من الشوكولاتة المشكلة والبرالين والبونبون.'
    },
    dark: {
      en: 'Dark Chocolate',
      ar: 'الشوكولاتة الداكنة',
      descEn: 'Dark chocolate selections with a long-standing place in Caline’s retail presentation.',
      descAr: 'تشكيلات شوكولاتة داكنة لها حضور ممتد ضمن أسلوب عرض كالين.'
    },
    white: {
      en: 'White Chocolate',
      ar: 'الشوكولاتة البيضاء',
      descEn: 'White chocolate selections; current formats vary by market and season.',
      descAr: 'تشكيلات شوكولاتة بيضاء؛ تختلف الأشكال الحالية حسب السوق والموسم.'
    },
    truffles: {
      en: 'Truffles',
      ar: 'الترافل',
      descEn: 'Premium decorated truffles within Caline’s boutique presentation tradition.',
      descAr: 'ترافل فاخر ومزين ضمن تقاليد كالين في التقديم داخل البوتيك.'
    },
    gifts: {
      en: 'Gift Boxes',
      ar: 'علب الهدايا',
      descEn: 'Chocolate presentation boxes and assortments, with current formats available on request.',
      descAr: 'علب وتشكيلات شوكولاتة للهدايا، مع معرفة الخيارات الحالية عند الطلب.'
    }
  };

  const shell = {
    en: {
      top: 'Chocolate craft & manufacturing · Sharjah, UAE',
      topLink: 'Our craft',
      chocolate: 'Chocolate',
      gifts: 'Gifts',
      manufacturing: 'Manufacturing',
      story: 'Our Story',
      contact: 'Contact',
      selection: 'My list',
      menu: 'Menu',
      language: 'العربية',
      footerIntro: 'Chocolate craft, thoughtful gifting and a making story rooted in Sharjah.',
      explore: 'Explore',
      company: 'Caline',
      enquiries: 'Enquiries',
      availability: 'Ask us what is available in your market.',
      email: 'Email Caline',
      rights: 'Caline Chocolate. All rights reserved.',
      selected: 'Saved to my list',
      removed: 'Removed from my list'
    },
    ar: {
      top: 'حرفة وصناعة الشوكولاتة · الشارقة، الإمارات',
      topLink: 'حرفتنا',
      chocolate: 'الشوكولاتة',
      gifts: 'الهدايا',
      manufacturing: 'التصنيع',
      story: 'قصتنا',
      contact: 'تواصل معنا',
      selection: 'قائمتي',
      menu: 'القائمة',
      language: 'English',
      footerIntro: 'حرفة شوكولاتة، وهدايا مدروسة، وقصة صناعة جذورها في الشارقة.',
      explore: 'اكتشف',
      company: 'كالين',
      enquiries: 'الاستفسارات',
      availability: 'اسألنا عما هو متاح في سوقك.',
      email: 'راسل كالين',
      rights: 'كالين للشوكولاتة. جميع الحقوق محفوظة.',
      selected: 'تم الحفظ في قائمتي',
      removed: 'تمت الإزالة من قائمتي'
    }
  };

  const icons = {
    menu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    bag: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
    arrow: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
    ,phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16.6v2.7a1.7 1.7 0 0 1-1.9 1.7A18.6 18.6 0 0 1 3 4.9 1.7 1.7 0 0 1 4.7 3h2.7a1.7 1.7 0 0 1 1.7 1.5l.4 2.6a1.7 1.7 0 0 1-.5 1.5l-1.3 1.3a15.1 15.1 0 0 0 6.4 6.4l1.3-1.3a1.7 1.7 0 0 1 1.5-.5l2.6.4a1.7 1.7 0 0 1 1.5 1.7Z"/></svg>'
  };

  function locale() {
    const match = location.pathname.match(/\/(en|ar)(?:\/|$)/);
    if (match) return match[1];
    return document.documentElement.lang === 'ar' ? 'ar' : 'en';
  }

  function inLocaleDirectory() {
    return /\/(en|ar)(?:\/|$)/.test(location.pathname);
  }

  function asset(path) {
    return (inLocaleDirectory() ? '../' : '') + path;
  }

  function page(path) {
    return path;
  }

  function currentFile() {
    const file = location.pathname.split('/').pop();
    return file && file.includes('.') ? file : 'index.html';
  }

  function currentPage() {
    const p = currentFile();
    if (p === 'index.html') return 'home';
    if (p.includes('chocolate')) return 'chocolate';
    if (p.includes('gifts')) return 'gifts';
    if (p.includes('manufacturing')) return 'manufacturing';
    if (p.includes('about')) return 'story';
    if (p.includes('contact')) return 'contact';
    if (p.includes('selection')) return 'selection';
    return '';
  }

  function otherLanguageHref() {
    const lang = locale();
    const other = lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem(LANG_KEY, lang);
    if (inLocaleDirectory()) return '../' + other + '/' + currentFile();
    return other + '/' + currentFile();
  }

  function navLink(href, key, active, t) {
    const attr = active === key ? ' aria-current="page"' : '';
    return '<a href="' + page(href) + '"' + attr + '>' + t[key] + '</a>';
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

  function renderShell() {
    const lang = locale();
    const t = shell[lang];
    const active = currentPage();
    const selected = getSelection();
    localStorage.setItem(LANG_KEY, lang);

    const headerMount = document.querySelector('[data-site-header]');
    if (headerMount) {
      headerMount.innerHTML =
        '<a class="skip-link" href="#main">' + (lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content') + '</a>' +
        '<div class="top-note"><div class="wrap"><span>' + t.top + '</span><a href="' + page('manufacturing.html') + '">' + t.topLink + ' ' + icons.arrow + '</a></div></div>' +
        '<header class="site-header"><div class="wrap header-row">' +
          '<a class="brand" href="' + page('index.html') + '" aria-label="Caline home"><img src="' + asset('images/logo-display.svg') + '" alt="Caline — Passion au Chocolat"></a>' +
          '<nav class="desktop-nav" aria-label="' + t.menu + '">' +
            navLink('chocolate.html','chocolate',active,t) +
            navLink('gifts.html','gifts',active,t) +
            navLink('manufacturing.html','manufacturing',active,t) +
            navLink('about.html','story',active,t) +
            navLink('contact.html','contact',active,t) +
          '</nav>' +
          '<div class="header-actions">' +
            '<a class="phone-link" href="tel:' + PHONE + '" aria-label="' + (lang === 'ar' ? 'اتصل بكالين على ' : 'Call Caline at ') + PHONE_DISPLAY + '">' + icons.phone + '<span class="phone-number" dir="ltr">' + PHONE_DISPLAY + '</span></a>' +
            '<a class="lang-button" href="' + otherLanguageHref() + '" hreflang="' + (lang === 'ar' ? 'en' : 'ar') + '" data-language-link>' + t.language + '</a>' +
            '<a class="selection-link" href="' + page('selection.html') + '"' + (active === 'selection' ? ' aria-current="page"' : '') + '>' + icons.bag + '<span class="selection-label">' + t.selection + '</span><span class="selection-count">' + selected.length + '</span></a>' +
            '<button class="icon-button mobile-toggle" type="button" data-mobile-toggle aria-label="' + t.menu + '">' + icons.menu + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="mobile-panel" data-mobile-panel><nav class="wrap" aria-label="' + t.menu + '">' +
          '<a href="tel:' + PHONE + '">' + (lang === 'ar' ? 'اتصل بنا' : 'Call us') + ' <bdi dir="ltr">' + PHONE_DISPLAY + '</bdi></a>' +
          navLink('selection.html','selection',active,t) +
          navLink('chocolate.html','chocolate',active,t) +
          navLink('gifts.html','gifts',active,t) +
          navLink('manufacturing.html','manufacturing',active,t) +
          navLink('about.html','story',active,t) +
          navLink('contact.html','contact',active,t) +
        '</nav></div></header>';

      const languageLink = headerMount.querySelector('[data-language-link]');
      if (languageLink) languageLink.addEventListener('click', () => {
        localStorage.setItem(LANG_KEY, lang === 'ar' ? 'en' : 'ar');
      });

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
            '<div class="footer-brand"><a class="footer-logo" href="' + page('index.html') + '"><img src="' + asset('images/logo-display.svg') + '" alt="Caline"></a><p>' + t.footerIntro + '</p><a class="text-link" href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
            '<div class="footer-col"><h2>' + t.explore + '</h2><a href="' + page('chocolate.html') + '">' + t.chocolate + '</a><a href="' + page('gifts.html') + '">' + t.gifts + '</a><a href="' + page('manufacturing.html') + '">' + t.manufacturing + '</a></div>' +
            '<div class="footer-col"><h2>' + t.company + '</h2><a href="' + page('about.html') + '">' + t.story + '</a><a href="' + page('contact.html') + '">' + t.contact + '</a></div>' +
            '<div class="footer-col"><h2>' + t.enquiries + '</h2><a href="tel:' + PHONE + '"><bdi dir="ltr">' + PHONE_DISPLAY + '</bdi></a><a href="' + INSTAGRAM + '" target="_blank" rel="noopener noreferrer" aria-label="Instagram @calinefactory">Instagram · @calinefactory</a><a href="' + page('selection.html') + '">' + t.selection + '</a><a href="mailto:' + EMAIL + '">' + t.email + '</a><span>' + t.availability + '</span></div>' +
          '</div>' +
          '<div class="footer-bottom"><span>© <span data-year></span> ' + t.rights + '</span><nav><a href="' + page('contact.html') + '">' + t.contact + '</a><a href="' + page('manufacturing.html') + '">' + t.manufacturing + '</a></nav></div>' +
        '</div></footer>';
      const year = footerMount.querySelector('[data-year]');
      if (year) year.textContent = new Date().getFullYear();
    }
  }

  function toggleSelection(id) {
    const list = getSelection();
    const index = list.indexOf(id);
    if (index >= 0) list.splice(index, 1);
    else list.push(id);
    saveSelection(list);
    toast(shell[locale()][index >= 0 ? 'removed' : 'selected']);
  }

  function updateSelectionUI() {
    const list = getSelection();
    const lang = locale();
    document.querySelectorAll('.selection-count').forEach(el => el.textContent = list.length);
    document.querySelectorAll('[data-add-selection]').forEach(btn => {
      const added = list.includes(btn.dataset.addSelection);
      btn.classList.toggle('added', added);
      btn.setAttribute('aria-pressed', added ? 'true' : 'false');
      btn.textContent = added
        ? (lang === 'ar' ? 'محفوظ' : 'Saved')
        : (lang === 'ar' ? 'أضف لقائمتي' : 'Add to my list');
    });
  }

  function bindSelectionButtons() {
    document.querySelectorAll('[data-add-selection]').forEach(btn => {
      if (btn.dataset.bound === 'true') return;
      btn.dataset.bound = 'true';
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
        background:'#120a09', color:'#f1e9e5', border:'1px solid rgba(201,164,95,.35)',
        padding:'12px 16px', fontSize:'.72rem', boxShadow:'0 18px 45px rgba(0,0,0,.32)'
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
    const lang = locale();
    const list = getSelection();

    if (!list.length) {
      mount.innerHTML = '<div class="selection-empty">' +
        (lang === 'ar'
          ? 'قائمتك ما زالت فارغة. استكشف الشوكولاتة والهدايا، واحفظ ما يعجبك هنا.'
          : 'Your list is still empty. Explore Chocolate and Gifts, then save the things you like here.') +
        ' <a class="text-link" href="chocolate.html">' + (lang === 'ar' ? 'استكشف الشوكولاتة' : 'Explore chocolate') + ' ' + icons.arrow + '</a></div>';
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
    updateEmailPreview();
  }

  function enquiryText() {
    const lang = locale();
    const list = getSelection();
    const names = list.map(id => lang === 'ar' ? collections[id].ar : collections[id].en);
    if (lang === 'ar') {
      return 'مرحبًا فريق كالين،\n\nأرغب في معرفة التشكيلة الحالية والتوفر للآتي:\n' +
        (names.length ? names.map(x => '- ' + x).join('\n') : '- أرجو إرسال تشكيلة اليوم') +
        '\n\nالسوق / المدينة: \nالكمية أو المناسبة: \n\nشكرًا.';
    }
    return 'Hello Caline team,\n\nI would like to ask about the current range and availability for:\n' +
      (names.length ? names.map(x => '- ' + x).join('\n') : '- Please send me today’s selection') +
      '\n\nMarket / city: \nQuantity or occasion: \n\nThank you.';
  }

  function updateEmailPreview() {
    const preview = document.querySelector('[data-email-preview]');
    if (preview) preview.textContent = enquiryText();
    const email = document.querySelector('[data-email-selection]');
    if (email) {
      const subject = locale() === 'ar' ? 'استفسار عن منتجات كالين' : 'Caline product enquiry';
      email.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(enquiryText());
    }
  }

  function bindSelectionActions() {
    const clear = document.querySelector('[data-clear-selection]');
    if (clear && clear.dataset.bound !== 'true') {
      clear.dataset.bound = 'true';
      clear.addEventListener('click', () => {
        saveSelection([]);
        renderSelectionPage();
      });
    }

    const copy = document.querySelector('[data-copy-selection]');
    if (copy && copy.dataset.bound !== 'true') {
      copy.dataset.bound = 'true';
      copy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(enquiryText());
          toast(locale() === 'ar' ? 'تم نسخ القائمة' : 'List copied');
        } catch {
          toast(locale() === 'ar' ? 'تعذر النسخ تلقائيًا' : 'Could not copy automatically');
        }
      });
    }
  }

  function bindContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const lang = locale();
      const data = new FormData(form);
      const type = data.get('type') || (lang === 'ar' ? 'استفسار عام' : 'General enquiry');
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
        ? 'سيُفتح تطبيق البريد لديك. لن تُرسل الرسالة حتى تضغط على إرسال.'
        : 'Your email app is opening. Nothing is sent until you press send.';
    });
  }

  function init() {
    renderShell();
    bindSelectionButtons();
    renderSelectionPage();
    bindSelectionActions();
    bindContactForm();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
