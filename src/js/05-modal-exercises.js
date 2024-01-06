import APIService from './00-api';
import icons from '../img/sprite.svg';
import image from '../img/modal-exercise-image.jpg';
import imageRetina from '../img/modal-exercise-image@2x.jpg';
const apiService = new APIService();

import { createMarkupFavorite } from './15-remove-local';

let isFavorite = false;
let idFavorite;

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const listItem = document.querySelector('.js-list');

listItem.addEventListener('click', onExercisesCardClick);

async function onExercisesCardClick(event) {
  if (!event.target.closest('.card__btn')) {
    return;
  }

  try {
    const exerciseID = event.target
      .closest('.card__btn')
      .getAttribute('data-id');

    const exerciseData = await apiService.getExercisesById(exerciseID);

    idFavorite = exerciseID;

    const markup = createMarkup(exerciseData);
    updateModal(markup);
    openModalExercises();

    const btnModalFavorites = document.querySelector(
      '.modal-exercises__btn-favorites'
    );
    btnModalFavorites.addEventListener('click', toggleBtn);
    const btnModalClose = document.querySelector('.modal-exercises__btn-close');
    btnModalClose.addEventListener('click', closeModalExercises);
  } catch (error) {
    console.log(error);
  }
}

function openModalExercises() {
  const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';

  modalExercises.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.paddingRight = lockPaddingValue;
  document.body.style.overflow = 'hidden';
}

function updateModal(markup) {
  modalExercises.innerHTML = markup;

  toggleFavorites();
}

function createRating(rating) {
  const starColor = '#EEA10C';
  const emptyStarColor = '#F4F4F4';
  const totalStars = 5;

  let stars = '';
  for (let i = 0; i < totalStars; i++) {
    const gradientId = `starGradient${i}`;
    const fillPercentage =
      i + 1 <= rating ? 100 : i < rating ? (rating % 1) * 100 : 0;

    const gradientStops = [
      { offset: '0%', color: starColor, opacity: '1' },
      { offset: `${fillPercentage}%`, color: starColor, opacity: '1' },
      {
        offset: `${fillPercentage + 1}%`,
        color: emptyStarColor,
        opacity: '0.20',
      },
    ];

    const linearGradient = `
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${gradientStops
            .map(
              stop =>
                `<stop offset="${stop.offset}" style="stop-color:${stop.color};stop-opacity:${stop.opacity}" />`
            )
            .join('')}
        </linearGradient>
      `;

    const fill = `url(#${gradientId})`;

    stars += `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${linearGradient}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${fill}" fill-opacity="1"/></svg>`;
  }

  const ratingText = Number.isInteger(rating)
    ? `${rating}.0`
    : rating.toFixed(1);

  const ratingWithStars = `${ratingText} ${stars}`;

  return ratingWithStars;
}

function createMarkup({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
}) {
  const getExerciseGif = getGif(gifUrl);
  function getGif(gifUrl) {
    if (gifUrl === null || !gifUrl) {
      return `srcset = '${image} 1x,${imageRetina} 2x'
      src = '${image}'`;
    }
    return `src="${gifUrl}"`;
  }

  const ratingStarsHTML = createRating(rating);

  return `
  <div class="modal-exercises__container" data-id="${_id}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${icons}#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${getExerciseGif}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${name}</h2>
      <div class="modal-exercises__rating">${ratingStarsHTML}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${target}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Body Part</h3>
              <p class="modal-exercises__text">${bodyPart}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Equipment</h3>
              <p class="modal-exercises__text">${equipment}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Popular</h3>
              <p class="modal-exercises__text">${popularity}</p>
            </li>
            
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Burned Calories</h3>
              <p class="modal-exercises__text">${burnedCalories}/${time}</p>
            </li>
          </ul>
          <p class="modal-exercises__description">${description}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises__btn-container">
  <button class="modal-exercises__btn-favorites modal-exercises__btn" type="button" data-id="${_id}">
      Add to favorites
      <svg class="btn-favorites__icon">
        <use href="${icons}#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises__btn-rating modal-exercises__btn" type="button" data-id="${_id}">Give a rating</button>
</div>
`;
}

function toggleFavorites() {
  const local = JSON.parse(localStorage.getItem('exerciseData'));

  const btnModalFavorites = document.querySelector(
    '.modal-exercises__btn-favorites'
  );

  if (local?.some(item => item._id === idFavorite)) {
    isFavorite = true;
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
  } else {
    isFavorite = false;
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
  }
}

function toggleBtn() {
  isFavorite = !isFavorite;
  const btnModalFavorites = document.querySelector(
    '.modal-exercises__btn-favorites'
  );

  const localFavorite = document.querySelector('.favorites__list');

  if (isFavorite) {
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
    localFavorite == null
      ? console.log('')
      : setTimeout(() => {
          createMarkupFavorite();
        }, 100);
  } else {
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
    localFavorite == null
      ? console.log('')
      : setTimeout(() => {
          createMarkupFavorite();
        }, 100);
  }
}

function createAddToFavoritesMarkup() {
  return `
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${icons}#icon-favorites"></use>
    </svg>`;
}

function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${icons}#icon-trash"></use>
  </svg>`;
}

function closeModalExercises() {
  modalExercises.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.paddingRight = '0px';
  document.body.style.overflow = 'auto';
}

overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    closeModalExercises();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalExercises.classList.contains('hidden')) {
    closeModalExercises();
  }
});
