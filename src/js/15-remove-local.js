import icons from '../img/sprite.svg';

const localFavorite = document.querySelector('.js-list');

localFavorite.addEventListener('click', removeElement);

function removeElement(event) {
  if (!event.target.closest('.js-remove-btn')) {
    return;
  }

  const exerciseId = event.target
    .closest('.js-remove-btn')
    .getAttribute('data-id');

  const local = JSON.parse(localStorage.getItem('exerciseData'));

  const newLocal = local.filter(item => item._id !== exerciseId);

  localStorage.setItem('exerciseData', JSON.stringify(newLocal));

  createMarkupFavorite();
}

export function createMarkupFavorite() {
  const newLocal = JSON.parse(localStorage.getItem('exerciseData'));

  if (newLocal.length === 0) {
    localFavorite.innerHTML = '';

    const markup = `
     <li class="favorites__empty">
            It appears that you haven't added any exercises to your favorites
            yet. To get started, you can add exercises that you like to your
            favorites for easier access in the future.
          </li>
    `;

    localFavorite.insertAdjacentHTML('beforeend', markup);
  } else {
    localFavorite.innerHTML = '';
    const markup = newLocal
      .map(({ _id, name, burnedCalories, bodyPart, target }) => {
        return `
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${_id}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${icons}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${_id}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${icons}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${icons}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${name}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${burnedCalories}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${bodyPart}</p>
            <p class="fav-card__text-info"><span>Target:</span>${target}</p>
          </div>
        </div>
      </li>`;
      })
      .join('');

    localFavorite.insertAdjacentHTML('beforeend', markup);
  }
}
