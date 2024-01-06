const teamLink = document.querySelector('.footer__link');
const teamBackdrop = document.querySelector('.team__backdrop');
const teamCloseBtn = document.querySelector('.team__modal-close-btn');

function onLinkClick(event) {
  event.preventDefault();

  openModalStaff();
  addAllEventListeners();
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    closeAndRemoveListeners();
  }
}

function onBackdropClick(event) {
  if (!event.target.closest('.team__wrapper')) {
    closeAndRemoveListeners();
  }
}

function onCloseBtnClick(event) {
  event.preventDefault();
  closeAndRemoveListeners();
}

function addAllEventListeners() {
  document.addEventListener('keydown', onEscClick);
  teamBackdrop.addEventListener('click', onBackdropClick);
  teamCloseBtn.addEventListener('click', onCloseBtnClick);
}

function closeAndRemoveListeners() {
  document.removeEventListener('keydown', onEscClick);
  teamBackdrop.removeEventListener('click', onBackdropClick);
  teamCloseBtn.removeEventListener('click', onCloseBtnClick);

  closeModalStaff();
}

function openModalStaff() {
  teamBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeModalStaff() {
  teamBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

teamLink.addEventListener('click', onLinkClick);
