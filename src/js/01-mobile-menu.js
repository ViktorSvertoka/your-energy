// // Отримуємо посилання на елементи DOM
// const openMenuButton = document.querySelector('.js-open-menu');
// const closeMenuButton = document.querySelector('.js-close-menu');
// const mobileMenu = document.querySelector('#mobile-menu');
// const backdrop = document.querySelector('[data-menu-backdrop]');
// const menuNavLinks = document.querySelectorAll('.menu__nav-link');

// // Функція для відкриття мобільного меню
// function openMobileMenu() {
//   mobileMenu.classList.add('is-open');
//   backdrop.classList.remove('is-hidden');
//   document.body.classList.add('no-scroll'); // Додаємо клас, щоб запобігти скролінгу фону
// }

// // Функція для закриття мобільного меню
// function closeMobileMenu() {
//   mobileMenu.classList.remove('is-open');
//   backdrop.classList.add('is-hidden');
//   document.body.classList.remove('no-scroll'); // Видаляємо клас, дозволяючи скролінг тла
// }

// // Обробник кліку на кнопку відкриття меню
// openMenuButton.addEventListener('click', () => {
//   openMobileMenu();
// });

// // Обробник кліку на кнопку закриття меню
// closeMenuButton.addEventListener('click', () => {
//   closeMobileMenu();
// });

// // Обробник кліка на бекдроп для закриття меню
// backdrop.addEventListener('click', () => {
//   closeMobileMenu();
// });

// // Обробник кліку на елементи меню для переходу до відповідної секції та закриття меню
// menuNavLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     const targetId = link.getAttribute('href').substring(1);
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//       // Прокручуємо до цільової секції
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//       // Закриваємо меню
//       closeMobileMenu();
//     }
//   });
// });

const logo = document.getElementById('logo');
const toggleButtons = document.getElementById('toggleButtons');
const burgerMenu = document.getElementById('burgerMenu');
const socialMedia = document.getElementById('socialMedia');
const openHomeButton = document.getElementById('homeButton');
const openFavoritesButton = document.getElementById('favoritesButton');

function openMobileMenu() {}

function closeMobileMenu() {}

function toggleButtonsFunction() {
  const homeButton = document.getElementById('homeButton');
  const favoritesButton = document.getElementById('favoritesButton');

  if (!homeButton.classList.contains('active')) {
    homeButton.classList.add('active');
    favoritesButton.classList.remove('active');
    openMobileMenu();
    redirectToHome();
  } else {
    homeButton.classList.remove('active');
    favoritesButton.classList.add('active');
    openMobileMenu();
    redirectToFavorites();
  }
}

function redirectToHome() {
  //   window.location.href = '../partials/02-hero.html';
}

function redirectToFavorites() {
  //   window.location.href = '../partials/10-favorites.html';
}

toggleButtons.addEventListener('click', toggleButtonsFunction);
// burgerMenu.addEventListener('click');
openHomeButton.addEventListener('click', () => {
  openMobileMenu();
  redirectToHome();
});
openFavoritesButton.addEventListener('click', () => {
  openMobileMenu();
  redirectToFavorites();
});
