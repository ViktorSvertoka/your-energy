// const logo = document.getElementById('logo');
// const toggleButtons = document.getElementById('toggleButtons');
// const burgerMenu = document.getElementById('burgerMenu');
// const socialMedia = document.getElementById('socialMedia');
// const openHomeButton = document.getElementById('homeButton');
// const openFavoritesButton = document.getElementById('favoritesButton');
// const modal = document.getElementById('myModal');
// const closeModal = document.getElementById('closeModal');
// const modalContent = document.getElementById('modalContent');

// function openMobileMenu() {
//   showModal();
// }

// function closeMobileMenu() {
//   closeModal();
// }

// function toggleButtonsFunction() {
//   if (!openHomeButton.classList.contains('active')) {
//     openHomeButton.classList.add('active');
//     openFavoritesButton.classList.remove('active');
//     openMobileMenu();
//     redirectToHome();
//   } else {
//     openHomeButton.classList.remove('active');
//     openFavoritesButton.classList.add('active');
//     openMobileMenu();
//     redirectToFavorites();
//   }
// }

// function redirectToHome() {
//   window.location.href = '../partials/02-hero.html';
// }

// function redirectToFavorites() {
//   window.location.href = '../partials/10-favorites.html';
// }

// function showModal() {
//   modalContent.innerHTML = '<p>Content for Home or Favorite goes here.</p>';
//   modal.style.display = 'block';
// }

// function closeModal() {
//   modal.style.display = 'none';
// }

// toggleButtons.addEventListener('click', toggleButtonsFunction);
// burgerMenu.addEventListener('click', openMobileMenu);
// closeModal.addEventListener('click', closeMobileMenu);

// openHomeButton.addEventListener('click', () => {
//   openMobileMenu();
//   redirectToHome();
// });

// openFavoritesButton.addEventListener('click', () => {
//   openMobileMenu();
//   redirectToFavorites();
// });

// toggleButtons.addEventListener('click', function () {
//   console.log('Toggle buttons clicked');
//   toggleButtonsFunction();
// });

// burgerMenu.addEventListener('click', function () {
//   console.log('Burger menu clicked');
//   openMobileMenu();
// });

// closeModal.addEventListener('click', function () {
//   console.log('Close modal clicked');
//   closeMobileMenu();
// });

// openHomeButton.addEventListener('click', function () {
//   console.log('Open home button clicked');
//   openMobileMenu();
//   redirectToHome();
// });

// openFavoritesButton.addEventListener('click', function () {
//   console.log('Open favorites button clicked');
//   openMobileMenu();
//   redirectToFavorites();
// });
