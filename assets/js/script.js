const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});



const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');
hamburguer.addEventListener('click', () => {
menu.classList.toggle('active');
});