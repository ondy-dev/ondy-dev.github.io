// Three small interactions on the home page, on Motion's mini build (vendored,
// 10 KB). The headline arrives a word at a time; tall work-card screenshots
// pan down on hover so the crop shows the rest; buttons lean toward the
// cursor. Reduced motion skips all of it; touch devices get the headline only.
import { animate, stagger } from './vendor/motion-mini.js';

const ease = [0.2, 0, 0, 1];
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  headline();
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) { cardPans(); magnets(); }
}

function headline() {
  const h = document.querySelector('.intro h1');
  if (!h) return;
  const words = h.textContent.trim().split(/\s+/);
  h.replaceChildren(...words.flatMap((w, i) => {
    const s = document.createElement('span'); s.className = 'w'; s.textContent = w;
    return i ? [' ', s] : [s];
  }));
  animate(h.querySelectorAll('.w'), { opacity: [0, 1], translate: ['0 0.3em', '0 0'] }, { duration: 0.6, delay: stagger(0.045), ease });
}

function cardPans() {
  for (const img of document.querySelectorAll('.work-card .thumb')) {
    const card = img.closest('.work-card');
    const arm = () => {
      if (img.naturalHeight / img.naturalWidth < 0.8) return;   // the 16:10 crop hides nothing worth showing
      card.addEventListener('pointerenter', () => animate(img, { objectPosition: '50% 100%' }, { duration: 1.4, ease: 'ease-in-out' }));
      card.addEventListener('pointerleave', () => animate(img, { objectPosition: '50% 0%' }, { duration: 0.5, ease }));
    };
    img.complete && img.naturalWidth ? arm() : img.addEventListener('load', arm, { once: true });
  }
}

function magnets() {
  for (const el of document.querySelectorAll('.btn, .hero-sound')) {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.15}px ${(e.clientY - r.top - r.height / 2) * 0.25}px`;
    });
    el.addEventListener('pointerleave', () => animate(el, { translate: '0px 0px' }, { duration: 0.45, ease }));
  }
}
