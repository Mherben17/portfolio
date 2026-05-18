// ==========================================================
// Portfolio Template - Interactive Features
// Handles: mobile menu, theme toggle, active nav, smooth scroll
// ==========================================================

(function () {
  'use strict';

  // ==========================================================
  // Mobile Navigation Toggle
  // ==========================================================
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking a nav link
    const navLinks = navMenu.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================
  // Active Navigation Link Highlighting
  // ==========================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    const headerHeight = 74; // Match --header-h in CSS

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerHeight - 20;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  }

  // Update on scroll
  window.addEventListener('scroll', updateActiveNav);
  // Update on page load
  updateActiveNav();

  // ==========================================================
  // Update Footer Year
  // ==========================================================
  const yearElement = document.querySelector('[data-year]');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================================
  // Smooth Scroll for Anchor Links (if not using CSS)
  // ==========================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#top') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 74;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

})();
