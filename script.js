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
  // Theme Toggle (Light/Dark)
  // ==========================================================
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const html = document.documentElement;

  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
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

  // ==========================================================
  // Header Scroll Effect (Optional)
  // ==========================================================
  const header = document.querySelector('[data-header]');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.backdropFilter = 'blur(16px)';
      } else {
        header.style.backdropFilter = 'blur(12px)';
      }

      lastScroll = currentScroll;
    });
  }

  // ==========================================================
  // Form Handling (Basic)
  // ==========================================================
  const contactForm = document.querySelector('.form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Form will use mailto: action by default
      // For production, replace with Formspree, Netlify Forms, or backend API
      console.log('Form submitted - using mailto: action');
    });
  }

  console.log('Portfolio template loaded successfully!');
})();
