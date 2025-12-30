document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
      <nav class="site-navbar">
          <a href="/" class="nav-item">SITE</a>
          <a href="/me" class="nav-item">ME</a>
          
          <div class="search-wrapper desktop-only">
              <input type="text" class="search-input" placeholder="Search..." aria-label="Search">
          </div>
  
          <a href="/blog" class="nav-item">BLOG</a>
          <a href="/logs" class="nav-item">LOGS</a>
  
          <button class="mobile-search-btn mobile-only" aria-label="Open Search">
              <span class="search-icon-text">?</span>
          </button>
  
          <div class="mobile-search-overlay">
              <input type="text" class="mobile-search-input" placeholder="Type query + enter..." aria-label="Search">
              <button class="close-search">×</button>
          </div>
      </nav>
    `;
  
    // Inject the header at the top of the .page-container
    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
      const headerElement = document.createElement('header');
      headerElement.className = 'site-header';
      headerElement.innerHTML = headerHTML;
      pageContainer.insertBefore(headerElement, pageContainer.firstChild);
      
      initializeHeaderLogic();
    }
  });
  
  function initializeHeaderLogic() {
    const mobileBtn = document.querySelector('.mobile-search-btn');
    const closeBtn = document.querySelector('.close-search');
    const overlay = document.querySelector('.mobile-search-overlay');
    const inputs = document.querySelectorAll('.search-input, .mobile-search-input');
  
    // 1. Mobile Slide Logic
    mobileBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      document.querySelector('.mobile-search-input').focus();
    });
  
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  
    // 2. Search Functionality (Google Site Search)
    inputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const query = input.value.trim();
          if (query) {
            // Opens new tab with site:denismwangangi.com query
            window.open(`https://www.google.com/search?q=site:denismwangangi.com+${encodeURIComponent(query)}`, '_blank');
            input.value = ''; // Clear input
            overlay.classList.remove('active'); // Close mobile overlay if open
          }
        }
      });
    });
  }