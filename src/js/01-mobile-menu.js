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

// Переключение кнопок-ссылок

// document.addEventListener('DOMContentLoaded', () => {
//   const currentPath = window.location.pathname;

//   if (currentPath.includes('index.html')) {
//     const homeButton = document.getElementById('homeButton');
//     homeButton.classList.add('active');
//     homeButton.addEventListener('click', handleClick);
//   } else if (currentPath.includes('favorites.html')) {
//     const favoritesButton = document.getElementById('favoritesButton');
//     favoritesButton.classList.add('active');
//     favoritesButton.addEventListener('click', handleClick);
//   }
// });

// const handleClick = event => {
//   if (!event.currentTarget.classList.contains('active')) {
//     alert('Button clicked!');
//   } else {
//     event.preventDefault();
//   }
// };

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const homeButton = document.getElementById('homeButton');
  const favoritesButton = document.getElementById('favoritesButton');

  if (currentPath.includes('index.html')) {
    homeButton.classList.add('active');
    homeButton.addEventListener('click', handleClick);
  } else if (currentPath.includes('favorites.html')) {
    favoritesButton.classList.add('active');
    favoritesButton.addEventListener('click', handleClick);
  } else {
    // Добавляем класс "active" на кнопку Home при первой загрузке страницы
    homeButton.classList.add('active');
    homeButton.addEventListener('click', handleClick);
  }
});

const handleClick = event => {
  const homeButton = document.getElementById('homeButton');
  const favoritesButton = document.getElementById('favoritesButton');

  if (!event.currentTarget.classList.contains('active')) {
    alert('Button clicked!');
  } else {
    event.preventDefault();
  }

  // Убираем класс "active" с кнопки Home при переходе на favorites.html
  if (event.currentTarget === favoritesButton) {
    homeButton.classList.remove('active');
  }
};
