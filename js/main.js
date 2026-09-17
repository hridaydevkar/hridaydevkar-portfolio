/* ==========================================================================
   H.D — Portfolio 2026 · Interaction layer
   Loader · clock · nav · menu · reveals · magnetic
   ========================================================================== */
(() => {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  root.classList.replace('no-js', 'js');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Loader ---------- */
  const finishLoad = () => {
    if (doc.body.classList.contains('loaded')) return;
    doc.body.classList.add('loaded');
  };
  if (reduced) {
    finishLoad();
  } else {
    // bar animates ~0.85s; let it breathe, then lift
    window.addEventListener('load', () => setTimeout(finishLoad, 350));
    setTimeout(finishLoad, 2200); // safety
  }

  /* ---------- IST Clock ---------- */
  const clocks = [doc.getElementById('clock-head'), doc.getElementById('clock-foot')];
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  });
  const tickClock = () => {
    const t = fmt.format(new Date()) + ' IST';
    clocks.forEach((el) => el && (el.textContent = t));
  };
  tickClock();
  setInterval(tickClock, 1000);

  /* ---------- Header state ---------- */
  const head = doc.querySelector('.site-head');
  const onScroll = () => {
    head.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuBtn = doc.querySelector('.menu-btn');
  const mm = doc.getElementById('mobile-menu');
  const setMenu = (open) => {
    doc.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mm.setAttribute('aria-hidden', String(!open));
    doc.body.style.overflow = open ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => setMenu(!doc.body.classList.contains('menu-open')));
  mm.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && doc.body.classList.contains('menu-open')) setMenu(false);
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = [...doc.querySelectorAll('[data-reveal]')];
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Active nav ---------- */
  const navLinks = [...doc.querySelectorAll('.main-nav a')];
  const sections = navLinks
    .map((a) => doc.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            navLinks.forEach((a) =>
              a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)
            );
          }
        });
      },
      { rootMargin: '-38% 0px -55% 0px' }
    );
    sections.forEach((s) => navIO.observe(s));
  }

  /* ---------- Magnetic buttons ---------- */
  if (finePointer && !reduced) {
    doc.querySelectorAll('.magnetic').forEach((el) => {
      const strength = 10;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        el.style.transition = 'transform 0.15s ease-out';
        el.style.transform = `translate(${dx * strength}px, ${dy * strength * 0.6}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.transform = 'translate(0, 0)';
      });
    });
  }

  /* ---------- Smooth back-to-top ---------- */
  const top = doc.querySelector('.foot-top');
  if (top) {
    top.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }
})();
