// Two small interactions on the home page, on Motion's mini build (vendored,
// 10 KB): the headline arrives a word at a time, and tall work-card screenshots
// pan on hover so the crop shows the rest. Reduced motion skips both; touch
// devices get the headline only.
import { animate, stagger } from './vendor/motion-mini.js';

const ease = [0.2, 0, 0, 1];
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  headline();
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) cardPans();
} else {
  document.documentElement.classList.remove('js');
}

async function headline() {
  const h = document.querySelector('.intro h1');
  if (!h) return;
  const text = h.textContent.trim();
  h.setAttribute('aria-label', text);                 // screen readers get the sentence, not ten spans
  h.replaceChildren(...text.split(/\s+/).flatMap((word, i) => {
    const s = document.createElement('span'); s.className = 'w'; s.textContent = word; s.setAttribute('aria-hidden', 'true');
    return i ? [' ', s] : [s];
  }));
  await document.fonts.ready;                         // no font swap mid-stagger
  h.style.animation = 'none'; h.style.opacity = '1';  // takes over from the CSS hold (see .js .intro h1)
  animate(h.querySelectorAll('.w'), { opacity: [0, 1], translate: ['0 0.15em', '0 0'] }, { duration: 0.6, delay: stagger(0.045), ease });
}

function cardPans() {
  for (const img of document.querySelectorAll('.work-card img.thumb')) {
    const card = img.closest('.work-card'), to = img.dataset.pan || '50% 100%';
    const arm = () => {
      if (img.naturalHeight / img.naturalWidth < 0.8) return;   // the 16:10 crop hides nothing worth showing
      card.addEventListener('pointerenter', () => animate(img, { objectPosition: to }, { duration: 1, ease }));
      card.addEventListener('pointerleave', () => animate(img, { objectPosition: '50% 0%' }, { duration: 0.5, ease }));
    };
    img.complete && img.naturalWidth ? arm() : img.addEventListener('load', arm, { once: true });
  }
}
