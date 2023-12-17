import APIService from './00-api';
import { renderExercises } from './12-exercises';
const apiService = new APIService();

const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');

let query = '';

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  onSearch();
});

searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    onSearch();
  }
});

async function onSearch(event) {
  const { filter, name } = JSON.parse(localStorage.getItem('paramSearch'));

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    return;
  }

  try {
    const data = await apiService.getSearch(filter, name, searchQuery);
    renderExercises(data);
  } catch (error) {
    console.log(error);
  }

  query = searchQuery;
}
