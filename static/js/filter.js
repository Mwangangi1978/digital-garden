document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.filter-tab');
  const articles = document.querySelectorAll('.article-item');
  const noResults = document.getElementById('no-results');

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          const filter = tab.getAttribute('data-filter');

          // Update UI
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          let visibleCount = 0;

          articles.forEach(article => {
              const category = article.getAttribute('data-category');
              const isFiction = article.getAttribute('data-is-fiction') === 'true';
              
              let show = false;

              if (filter === 'all') {
                  show = true;
              } else if (filter === 'fiction') {
                  show = isFiction;
              } else {
                  // Match specific category, but only if it's not fiction 
                  // (unless specifically looking for it)
                  show = (category === filter);
              }

              if (show) {
                  article.style.display = 'flex';
                  visibleCount++;
              } else {
                  article.style.display = 'none';
              }
          });

          // Show empty state if needed
          noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      });
  });
});