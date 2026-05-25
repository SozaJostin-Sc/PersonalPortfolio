document.addEventListener('DOMContentLoaded', function() {
  // Manejar el menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('mobile-open');
      
      // Cambiar icono
      const icon = this.querySelector('i');
      if (nav.classList.contains('mobile-open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('mobile-open');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
      });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('mobile-open');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
      }
    });
  }
  
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        if (this.classList.contains('lang-toggle')) return; // Ignore lang toggle
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Translation Logic
  let currentLang = 'en'; // Default language
  const langToggleBtn = document.querySelector('.lang-toggle');
  const translatableElements = document.querySelectorAll('[data-en][data-es]');

  function updateLanguage(lang) {
    translatableElements.forEach(el => {
      el.innerHTML = el.getAttribute(`data-${lang}`);
    });
    if (langToggleBtn) {
      langToggleBtn.setAttribute('title', lang === 'en' ? 'Switch to Spanish' : 'Switch to English');
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      currentLang = currentLang === 'en' ? 'es' : 'en';
      updateLanguage(currentLang);
    });
  }
  
  // Set initial language
  updateLanguage(currentLang);

  // Theme Toggle Logic
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Set initial theme from localStorage
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    if (theme === 'light') {
      body.classList.add('light-theme');
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Toggle Dark Theme');
    } else {
      body.classList.remove('light-theme');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Toggle Light Theme');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const newTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', newTheme);
      applyTheme(newTheme);
    });
  }
});
