import icons from '../img/sprite.svg';

const localFavorite = document.querySelector('.favorites__list');
const buttonFavorite = document.getElementById('favoritesButton');

buttonFavorite.addEventListener('click', renderFavorite());

export function renderFavorite() {
  const local = JSON.parse(localStorage.getItem('exerciseData'));

  if (local == null || local.length === 0) {
    return;
  } else {
    localFavorite.innerHTML = '';

    const markup = local
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

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('.favorites__list');
  const listItemSelector = '.fav-filters__item-card';
  const minItemsToShowScroll = 6;
  const fixedWidth = 420;

  const checkScroll = () => {
    const listItems = listContainer.querySelectorAll(listItemSelector);
    if (listItems.length > minItemsToShowScroll) {
      listContainer.classList.add('scrollable');
    } else {
      listContainer.classList.remove('scrollable');
    }
  };

  const checkWidth = () => {
    const listItems = listContainer.querySelectorAll(listItemSelector);
    if (listItems.length === 1) {
      listContainer.style.width = `${fixedWidth}px`;
    } else {
      listContainer.style.width = 'auto';
    }
  };

  const applyStyles = () => {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth;
    if (screenWidth >= 1440) {
      checkWidth();
    } else {
      listContainer.style.width = 'auto';
    }
  };

  checkScroll();
  applyStyles();

  const observerScroll = new MutationObserver(mutations => {
    checkScroll();
  });
  observerScroll.observe(listContainer, { childList: true, subtree: true });

  const observerWidth = new MutationObserver(mutations => {
    applyStyles();
  });
  observerWidth.observe(listContainer, { childList: true, subtree: true });

  window.addEventListener('resize', applyStyles);
});
