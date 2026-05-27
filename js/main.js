document.addEventListener('DOMContentLoaded', function() {
  // ===== منوی موبایل =====
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');
  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }

  // ===== جستجوی صفحه اصلی =====
  const homeSearch = document.getElementById('homeSearch');
  if (homeSearch) {
    homeSearch.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.topic-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        card.style.display = title.includes(query) ? '' : 'none';
      });
    });
  }

  // ===== جستجو و فیلتر سطح در صفحات ویدیو =====
  const videoSearch = document.getElementById('videoSearch');
  const levelFilter = document.getElementById('levelFilter');
  if (videoSearch && levelFilter) {
    function filterVideos() {
      const searchTerm = videoSearch.value.trim().toLowerCase();
      const levelValue = levelFilter.value;
      const cards = document.querySelectorAll('.video-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const level = card.getAttribute('data-level') || '';
        const matchSearch = title.includes(searchTerm);
        const matchLevel = (levelValue === 'all' || level === levelValue);
        card.style.display = (matchSearch && matchLevel) ? '' : 'none';
      });
    }
    videoSearch.addEventListener('input', filterVideos);
    levelFilter.addEventListener('change', filterVideos);
  }

  // ===== دکمه‌های فیلتر سطح (دکمه‌ای) =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const level = this.getAttribute('data-level');
        document.querySelectorAll('.video-card').forEach(card => {
          if (level === 'all') {
            card.style.display = '';
          } else {
            card.style.display = card.getAttribute('data-level') === level ? '' : 'none';
          }
        });
      });
    });
  }
});