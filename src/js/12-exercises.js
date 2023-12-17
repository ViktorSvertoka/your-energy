import APIService from './00-api';
import icons from '../img/sprite.svg';
const apiService = new APIService();
const listItem = document.querySelector('.js-list');
listItem.addEventListener('click', onCardClick);
async function onCardClick(event) {
  if (!event.target.closest('.filters__item')) {
    return;
  }
  const item = event.target.closest('.filters__item');
  let filter = item.lastElementChild.children[0].innerText
    .toLowerCase()
    .replace(/\s/g, '');
  const name = item.lastElementChild.children[1].innerText
    .toLowerCase()
    .replace(/\s/g, '%20');
  if (filter === 'bodyparts') {
    filter = 'bodypart';
  }
  try {
    const data = await apiService.getExercises(filter, name);
    renderExercises(data);
  } catch (error) {
    console.log(error);
  }
}
function renderExercises(data) {
  listItem.innerHTML = '';
  const markup = data
    .map(({ _id, rating, name, burnedCalories, bodyPart, target }) => {
      return `
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${rating}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${icons}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${_id}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${icons}#icon-running-stick-figure"></use>
                </svg>
                </div>
                <h2 class="card__title">${name}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${burnedCalories}</p>
                <p class="card__text-info"><span>Body part:</span>${bodyPart}</p>
                <p class="card__text-info"><span>Target:</span>${target}</p>
              </div>
        </div>
      </li>`;
    })
    .join('');
  listItem.insertAdjacentHTML('beforeend', markup);
}
