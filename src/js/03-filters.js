import APIService from './00-api';
const apiService = new APIService();
const listItem = document.querySelector('.js-list');

getFiltersExercises('Muscles');

async function getFiltersExercises(params) {
  try {
    const data = await apiService.getFilter(params);
    displayExercises(data);
  } catch (error) {
    console.log(error);
  }
}

function displayExercises(data) {
  const markup = data
    .map(({ filter, name, imgURL }) => {
      return `
  <li class="filters__item">
    <img class="filters__img-first" src="${imgURL}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${filter}</h2>
    <p class="filters__text-first">${name}</p>
    </div>
  </li>
    `;
    })
    .join('');

  listItem.insertAdjacentHTML('beforeend', markup);
}

document.querySelectorAll('.btnFilters').forEach(button => {
  button.addEventListener('click', () => {
    const params = button.innerText;
    listItem.innerHTML = '';
    getFiltersExercises(params);
  });
});
