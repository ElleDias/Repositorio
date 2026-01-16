/* ===============================
   SCROLL SUAVE
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const section = document.querySelector(this.getAttribute('href'));

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Fecha o menu no mobile após clicar
    menu.classList.remove('active');
  });
});


/* ===============================
   MENU MOBILE
================================ */
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // abre ou fecha
});

// Scroll suave e fecha o menu ao clicar
document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    menu.classList.remove('active'); // fecha o menu
  });
});



/* ===============================
   ANIMAÇÃO AO ROLAR (REVEAL)
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
