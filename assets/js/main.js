// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      siteNav.classList.toggle('active');
    });
  }
  
  // Publications search and filter
  const searchInput = document.getElementById('pub-search');
  const yearFilter = document.getElementById('year-filter');
  const typeFilter = document.getElementById('type-filter');
  const publicationCards = document.querySelectorAll('.publication-card');
  const yearGroups = document.querySelectorAll('.pub-year-group');
  
  function filterPublications() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedYear = yearFilter ? yearFilter.value : '';
    const selectedType = typeFilter ? typeFilter.value : '';
    
    let visibleCount = 0;
    
    publicationCards.forEach(card => {
      const title = card.querySelector('.pub-title').textContent.toLowerCase();
      const authors = card.querySelector('.pub-authors').textContent.toLowerCase();
      const venue = card.querySelector('.pub-venue') ? card.querySelector('.pub-venue').textContent.toLowerCase() : '';
      const year = card.dataset.year;
      const type = card.dataset.type;
      
      const matchesSearch = !searchTerm || 
        title.includes(searchTerm) || 
        authors.includes(searchTerm) || 
        venue.includes(searchTerm);
      const matchesYear = !selectedYear || year === selectedYear;
      const matchesType = !selectedType || type === selectedType;
      
      if (matchesSearch && matchesYear && matchesType) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Show/hide year group headers
    yearGroups.forEach(group => {
      const visibleCards = group.querySelectorAll('.publication-card:not([style*="display: none"])');
      group.style.display = visibleCards.length > 0 ? '' : 'none';
    });
    
    // Show no results message
    const noResults = document.getElementById('no-results');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }
  
  if (searchInput) searchInput.addEventListener('input', filterPublications);
  if (yearFilter) yearFilter.addEventListener('change', filterPublications);
  if (typeFilter) typeFilter.addEventListener('change', filterPublications);
});

// Smooth reveal animations on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.cv-entry, .publication-card, .news-item').forEach(el => {
  observer.observe(el);
});
