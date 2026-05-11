document.addEventListener("DOMContentLoaded", () => {
  // Don't inject if a page already renders its own .site-header (e.g. me/about)
  if (document.querySelector('.site-header')) return;

  const headerHTML = `
    <nav class="site-navbar">

      <!-- Brand / site name (left) -->
      <a href="/" class="nav-brand" aria-label="Denis Mwangangi – home">Denis Mwangangi</a>

      <!-- Desktop nav links (centre-right) -->
      <div class="nav-links desktop-nav-links">
        <a href="/site"   class="nav-item">Site</a>
        <a href="/me"     class="nav-item">Me</a>
        <a href="/notes"  class="nav-item">Notes</a>
        <a href="/graph"  class="nav-item">Graph</a>
      </div>

      <!-- Desktop search (right) -->
      <div class="search-wrapper desktop-only">
        <input type="text" class="search-input" placeholder="Search…" aria-label="Search site">
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
        <a href="/site"   class="mobile-nav-item">Site</a>
        <a href="/me"     class="mobile-nav-item">Me</a>
        <a href="/notes"  class="mobile-nav-item">Notes</a>
        <a href="/graph"  class="mobile-nav-item">Graph</a>
      </nav>
    </div>
  `;

  const pageContainer = document.querySelector('.page-container');
  if (!pageContainer) return;

  const headerElement = document.createElement('header');
  headerElement.className = 'site-header';
  headerElement.innerHTML = headerHTML;
  pageContainer.insertBefore(headerElement, pageContainer.firstChild);

  // On writing-index pages: tag <main> so blog.css can make it full-bleed on mobile
  if (pageContainer.classList.contains('writing-index-page')) {
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
