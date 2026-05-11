document.addEventListener("DOMContentLoaded", () => {
  const isMomentsRoute = /(?:^|\/)moments(?:\/|$)/.test(window.location.pathname);
  if (isMomentsRoute) return;

  // Don't inject if a page already renders its own .site-header (e.g. me/about)
  if (document.querySelector('.site-header')) return;

  const headerHTML = `
    <nav class="site-navbar">

      <!-- Brand / site logo (left) -->
      <a href="/" class="nav-brand" aria-label="Denis Mwangangi – home">
        <img src="/images/denislogo.png" alt="Denis Mwangangi" class="nav-logo">
      </a>

      <!-- Desktop nav links (centre) -->
      <div class="nav-links desktop-nav-links">
        <a href="/site"     class="nav-item">site</a>
        <a href="/me"       class="nav-item">me</a>
        <a href="/notes"    class="nav-item">notes</a>
        <a href="/projects" class="nav-item">projects</a>
      </div>

      <!-- Desktop search + social icons (right) -->
      <div class="nav-right desktop-only">
        <div class="search-wrapper">
          <input type="text" class="search-input" placeholder="search" aria-label="Search site">
        </div>
        <div class="nav-socials">
          <a href="https://x.com/byDenisM" target="_blank" rel="noopener noreferrer" class="nav-social-link" aria-label="Twitter / X">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M12.6 1.7h2.4l-5.3 6 6.2 8.2h-4.9l-3.8-5-4.4 5H.4l5.7-6.5L0 1.7h5l3.5 4.6 4.1-4.6Zm-.9 12.8h1.3L4.4 3.1H3l8.7 11.4Z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/denis-mwangangi/" target="_blank" rel="noopener noreferrer" class="nav-social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3.6 14.5H.8V5.6h2.8v8.9ZM2.2 4.4a1.6 1.6 0 1 1 0-3.3 1.6 1.6 0 0 1 0 3.3Zm13 10.1h-2.7V10c0-1 0-2.4-1.5-2.4S9.4 8.8 9.4 9.9v4.6H6.7V5.6h2.6V7c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3v4.7Z"/></svg>
          </a>
          <a href="https://github.com/Mwangangi1978" target="_blank" rel="noopener noreferrer" class="nav-social-link" aria-label="GitHub">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.7.5 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 0Z"/></svg>
          </a>
        </div>
      </div>

      <!-- Mobile hamburger button -->
      <button class="hamburger-btn mobile-only" aria-label="Open navigation menu" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

    </nav>

    <!-- Mobile top-dropdown menu (sibling to nav, inside header, drops from top) -->
    <div class="mobile-nav-menu" role="navigation" aria-hidden="true">
      <nav class="mobile-menu-links">
            <a href="/site"     class="mobile-nav-item">site</a>
            <a href="/me"       class="mobile-nav-item">me</a>
            <a href="/notes"    class="mobile-nav-item">notes</a>
            <a href="/projects" class="mobile-nav-item">projects</a>
      </nav>
    </div>
  `;

  const headerElement = document.createElement('header');
  headerElement.className = 'site-header';
  headerElement.innerHTML = headerHTML;
  document.body.insertBefore(headerElement, document.body.firstChild);

  // On writing-index pages: tag <main> so blog.css can make it full-bleed on mobile
  const pageContainer = document.querySelector('.page-container');
  if (pageContainer && pageContainer.classList.contains('writing-index-page')) {
    const mainEl = document.querySelector('main');
    if (mainEl) mainEl.classList.add('writing-index-main');
  }

  initHeaderLogic();
});

function initHeaderLogic() {
  const hamburgerBtn  = document.querySelector('.hamburger-btn');
  const menu          = document.querySelector('.mobile-nav-menu');
  const desktopSearch = document.querySelector('.search-input');

  if (!hamburgerBtn || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.classList.add('is-open');
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.classList.remove('is-open');
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when clicking outside the header
  document.addEventListener('click', (e) => {
    const header = document.querySelector('.site-header');
    if (header && !header.contains(e.target)) closeMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Desktop search: open Google site: search on Enter
  if (desktopSearch) {
    desktopSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const q = desktopSearch.value.trim();
        if (!q) return;
        window.open(`https://www.google.com/search?q=site:denismwangangi.com+${encodeURIComponent(q)}`, '_blank');
        desktopSearch.value = '';
      }
    });
  }
}
