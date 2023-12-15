import APIService from './00-api';
const apiService = new APIService();

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const listItem = document.querySelector('.js-list');

listItem.addEventListener('click', onExercisesCardClick);

async function onExercisesCardClick(event) {
  if (!event.target.closest('.filters__btn-second')) {
    return;
  }

  try {
    const exerciseID = event.target
      .closest('.filters__btn-second')
      .getAttribute('data-id');

    const exerciseData = await apiService.getExercisesById(exerciseID);

    const markup = createMarkup(exerciseData);
    updateModal(markup);
    openModalExercises();
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
}

function createRating(rating) {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const remainder = rating - filledStars;

  const filledStarsHTML =
    '<svg class="icon-star"><use href="./img/sprite.svg#icon-star"></use></svg>'.repeat(
      filledStars
    );

  const partialStarHTML = '';
  if (remainder > 0) {
    const roundedRemainder = Math.round(remainder * 10) / 10;
    partialStarHTML = `<svg class="icon-star" style="width: ${
      roundedRemainder * 100
    }%"><use href="./img/sprite.svg#icon-star"></use></svg>`;
  }

  const emptyStarsHTML =
    '<svg class="icon-star-empty"><use href="./img/sprite.svg#icon-star"></use></svg>'.repeat(
      maxRating - filledStars
    );

  const ratingText = Number.isInteger(rating)
    ? `${rating}.0`
    : `${rating}.toFixed(1)`;
  const starsHTML = `${filledStarsHTML}${partialStarHTML}${emptyStarsHTML}`;

  const ratingWithStars = `${ratingText} ${starsHTML}`;

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
      return;
      // Треба заглушку
    }
    return `src="${gifUrl}"`;
  }
  const ratingStarsHTML = createRating(rating);
  return `
  <div class="modal-exercises__container" data-id="${_id}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="./img/sprite.svg#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${getExerciseGif}
    alt="Exercise video"
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

      <div class="modal-exercises__btn-container">
        <button class="modal-exercises__btn-favorites modal-exercises__btn">
            Add to favorites
            <svg class="btn-favorites__icon">
              <use href="./img/sprite.svg#icon-favorites"></use>
            </svg>
          </button>
        <button class="modal-exercises__btn-rating modal-exercises__btn">Give a rating</button>
      </div>
    </div>
  </div>
`;
}

function closeModalExercises() {
  modalExercises.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.paddingRight = '0px';
  document.body.style.overflow = 'auto';
}

overlay.addEventListener('click', closeModalExercises);
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalExercises.classList.contains('hidden')) {
    closeModalExercises();
  }
});
