AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false
});

const menu = document.getElementById('menu');
const navLeft = document.querySelector('.nav-left');
menu.addEventListener('click', () => {
  navLeft.classList.toggle('active');
});
