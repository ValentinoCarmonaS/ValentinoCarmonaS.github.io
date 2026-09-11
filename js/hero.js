/**
 * hero.js
 * Hero section — staggered reveal animation
 *
 * Strategy:
 * - Each .reveal-up element carries a data-delay attribute (0–6).
 * - On DOMContentLoaded, we fire each reveal after:
 *     delay = 80ms base + (data-delay * STAGGER_STEP)
 * - This is a one-shot entrance, not a scroll-triggered reveal,
 *   because the Hero is always the first viewport.
 * - prefers-reduced-motion is respected via CSS (base.css),
 *   but we still apply .is-visible so layout is correct.
 *
 * No dependencies. Vanilla JS only.
 */

(function () {
  "use strict";

  const STAGGER_STEP = 90;   // ms between each element
  const BASE_DELAY   = 80;   // ms before the first reveal
  const DURATION     = 640;  // ms — matches CSS var(--duration-slow)

  function revealHeroElements() {
    const elements = document.querySelectorAll(".hero .reveal-up");

    elements.forEach(function (el) {
      const step = parseInt(el.getAttribute("data-delay") || "0", 10);
      const delay = BASE_DELAY + step * STAGGER_STEP;

      // Set transition-delay inline so each element has its own timing.
      // CSS class handles the actual transition property.
      el.style.transitionDelay = delay + "ms";

      setTimeout(function () {
        el.classList.add("is-visible");
      }, delay);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealHeroElements);
  } else {
    // DOM already parsed (script deferred or at end of body)
    revealHeroElements();
  }
})();