function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector('.theme-btn');
  if (body.dataset.theme === 'dark') {
    body.removeAttribute('data-theme');
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.dataset.theme = 'dark';
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.dataset.theme = 'dark';
  document.querySelector('.theme-btn').textContent = '☀️';
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
