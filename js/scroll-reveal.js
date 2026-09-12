/**
 * scroll-reveal.js
 * Shared IntersectionObserver reveal for all sections beyond the Hero.
 *
 * Usage:
 *   Any element with class .reveal-up (and optionally data-delay="N")
 *   outside .hero will be observed and revealed as it enters the viewport.
 *
 * The Hero handles its own reveals via hero.js (one-shot on DOMContentLoaded,
 * no scroll trigger needed because it is always the first viewport).
 *
 * Strategy:
 *   - Elements are initially hidden via .reveal-up in base.css.
 *   - On viewport intersection (threshold 12%), the observer adds .is-visible,
 *     which triggers the CSS transition defined in base.css.
 *   - data-delay (integer 0–N) staggers siblings within the same section.
 *   - Each element is unobserved after its first reveal (one-shot entrance).
 *   - prefers-reduced-motion is honoured via CSS (base.css).
 *
 * No dependencies. Vanilla JS only.
 */

(function () {
  "use strict";

  var STAGGER_STEP = 80;   // ms between stagger steps within a section
  var BASE_DELAY   = 0;    // ms before the first element in each group

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el    = entry.target;
        var step  = parseInt(el.getAttribute("data-delay") || "0", 10);
        var delay = BASE_DELAY + step * STAGGER_STEP;

        // Apply stagger delay inline; CSS handles the transition property.
        el.style.transitionDelay = delay + "ms";
        el.classList.add("is-visible");

        // One-shot: unobserve after first reveal.
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  function init() {
    // Select all .reveal-up elements that are NOT inside .hero
    // (hero.js handles those on DOMContentLoaded, not on scroll).
    var elements = document.querySelectorAll(
      "section:not(.hero) .reveal-up, article:not(.hero) .reveal-up"
    );
    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // DOM already parsed (script deferred or placed at end of body).
    init();
  }
})();
