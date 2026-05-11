/* carousel.js — lightweight slider for the notes featured carousel */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const track   = document.getElementById('carousel-track');
    if (!track) return;                         // no carousel on this page

    const slides   = Array.from(track.querySelectorAll('.carousel-slide'));
    const pips     = Array.from(document.querySelectorAll('.carousel-pip'));
    const prevBtn  = document.getElementById('carousel-prev');
    const nextBtn  = document.getElementById('carousel-next');

    if (slides.length < 2) {
      // Single slide: hide controls
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      document.getElementById('carousel-pips')?.style.setProperty('display', 'none');
      return;
    }

    let current  = 0;
    let autoplay = null;

    function goTo(index) {
      current = ((index % slides.length) + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      pips.forEach((pip, i) => pip.classList.toggle('active', i === current));
    }

    function startAutoplay() {
      autoplay = setInterval(() => goTo(current + 1), 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplay);
    }

    // Button handlers
    prevBtn?.addEventListener('click', () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
    nextBtn?.addEventListener('click', () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });

    // Pip handlers
    pips.forEach((pip) => {
      pip.addEventListener('click', () => {
        stopAutoplay();
        goTo(parseInt(pip.dataset.slide, 10));
        startAutoplay();
      });
    });

    // Touch / swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        stopAutoplay();
        goTo(diff > 0 ? current + 1 : current - 1);
        startAutoplay();
      }
    });

    // Pause autoplay on hover
    const outer = track.closest('.carousel-outer');
    outer?.addEventListener('mouseenter', stopAutoplay);
    outer?.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }
}());
