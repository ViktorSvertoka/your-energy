const burgerMenu = document.getElementById('burgerMenu');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalButton = document.getElementById('closeModal');
const openHomeButton = document.getElementById('homeButton');
const openFavoritesButton = document.getElementById('favoritesButton');

burgerMenu.addEventListener('click', toggleMobileMenu);

closeModalButton.addEventListener('click', closeModal);

openHomeButton.addEventListener('click', () => {
  toggleButtonsFunction();
  redirectToHome();
});

openFavoritesButton.addEventListener('click', () => {
  toggleButtonsFunction();
  redirectToFavorites();
});

function toggleMobileMenu() {
  if (modalOverlay.style.display === 'block') {
    closeModal();
  } else {
    openModal();
  }
}

function openModal() {
  modalOverlay.style.display = 'block';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

function toggleButtonsFunction() {
  if (!openHomeButton.classList.contains('active')) {
    openHomeButton.classList.add('active');
    openFavoritesButton.classList.remove('active');
  } else {
    openHomeButton.classList.remove('active');
    openFavoritesButton.classList.add('active');
  }
}

function redirectToHome() {
  window.location.href = '../partials/10-favorites.html';
}

function redirectToFavorites() {
  window.location.href = '../partials/10-favorites.html';
}
