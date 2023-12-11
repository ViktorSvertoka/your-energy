import APIService from './00-api';
const apiService = new APIService();
const muscleList = document.querySelector('.js-list');

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
  <li class="muscles__item">
  <h2 class="muscles__title">${filter}</h2>
  <p class="muscles__text">${name}</p>
  <img src="${imgURL}" class="muscles__img"></img>
  </li>
    `;
    })
    .join('');

  muscleList.insertAdjacentHTML('beforeend', markup);
}

document.querySelectorAll('.btnFilters').forEach(button => {
  button.addEventListener('click', () => {
    const params = button.innerText;
    muscleList.innerHTML = '';
    getFiltersExercises(params);
  });
});
