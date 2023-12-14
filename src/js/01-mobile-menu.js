document.addEventListener('DOMContentLoaded', function () {
  const homeButton = document.getElementById('homeButton');
  const favoritesButton = document.getElementById('favoritesButton');

  homeButton.addEventListener('click', () => {
    console.log('Home button clicked');
    homeButton.classList.add('active');
    favoritesButton.classList.remove('active');
  });

  favoritesButton.addEventListener('click', () => {
    console.log('Favorites button clicked');
    favoritesButton.classList.add('active');
    homeButton.classList.remove('active');
  });
});

const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const backdrop = document.querySelector('[data-menu-backdrop]');
const menuNavLinks = document.querySelectorAll('.menu__nav-link');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

openMenuButton.addEventListener('click', () => {
  openMobileMenu();
});

closeMenuButton.addEventListener('click', () => {
  closeMobileMenu();
});

backdrop.addEventListener('click', () => {
  closeMobileMenu();
});

menuNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      closeMobileMenu();
    }
  });
});
