const menu = document.getElementById('menu');
const navLeft = document.querySelector('.nav-left');
menu.addEventListener('click', () => {
  navLeft.classList.toggle('active');
});