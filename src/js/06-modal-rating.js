import APIService from './00-api';

const apiService = new APIService();

const modalOpen = document.querySelector('.modal-exercises__btn-favorites');

modalOpen.addEventListener('click', modalIsOpen);

function modalIsOpen() {
  console.log('Ku Ku');
}
