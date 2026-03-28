(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var navLinks = document.querySelectorAll(".nav__link");

  function closeMenu() {
    if (!navToggle || !nav) return;
    navToggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openMenu() {
    if (!navToggle || !nav) return;
    navToggle.classList.add("is-open");
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 768px)").matches) {
          closeMenu();
        }
      });
    });

    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        closeMenu();
      }
    });
  }

  var header = document.querySelector(".header");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function onScroll() {
    if (!header) return;
    if (reduceMotion.matches) return;
    var y = window.scrollY || document.documentElement.scrollTop;
    header.style.boxShadow =
      y > 24 ? "0 8px 32px rgba(0,0,0,0.35)" : "none";
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
