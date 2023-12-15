import icons from '../img/sprite.svg';

const localFavorite = document.querySelector('.favorites__list');
const buttonFavorite = document.getElementById('favoritesButton');

buttonFavorite.addEventListener('click', renderFavorite());

function renderFavorite() {
  const local = JSON.parse(localStorage.getItem('exerciseData'));
  if (local === null) {
    return;
  } else {
    localFavorite.innerHTML = '';

    const markup = local
      .map(({ _id, name, burnedCalories, bodyPart, target }) => {
        return `
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <button class="card__btn js-remove-btn" data-id="${_id}" type="button">Remove
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
              <button class="card__btn" data-id="${_id}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${icons}#icon-running-stick-figure"></use>
                </svg>
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

    localFavorite.insertAdjacentHTML('beforeend', markup);
  }
}
