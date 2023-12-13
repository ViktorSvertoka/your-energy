import APIService from './00-api';
const apiService = new APIService();
const muscleList = document.querySelector('.js-list');

getFiltersExercises('Muscles');

let items;

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

  muscleList.insertAdjacentHTML('beforeend', markup);
  items = document.querySelectorAll('.filters__item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.children[0].innerText.toLowerCase();
      const name = item.children[1].innerText.toLowerCase();

      exercises();

      async function exercises() {
        try {
          const data = await apiService.getExercises(filter, name);

          renderExercises(data);
        } catch (error) {
          console.log(error);
        }
      }
    });
  });
}

document.querySelectorAll('.btnFilters').forEach(button => {
  button.addEventListener('click', () => {
    const params = button.innerText;
    muscleList.innerHTML = '';
    getFiltersExercises(params);
  });
});

function renderExercises(data) {
  muscleList.innerHTML = '';
  const markup = data
    .map(({ name, burnedCalories, bodyPart, target }) => {
      return `
  <li class="filters__item">
  <h2 class="filters__title-second">${name}</h2>
  <p class="filters__text-second"><span>Burned calories:</span>${burnedCalories}</p>
  <p class="filters__text-second"><span>Body part:</span>${bodyPart}</p>
  <p class="filters__text-second"><span>Target:</span>${target}</p>
  </li>
    `;
    })
    .join('');

  muscleList.insertAdjacentHTML('beforeend', markup);
}
