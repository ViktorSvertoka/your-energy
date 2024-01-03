const modalExercises = document.querySelector('.modal-exercises');
const modalIsOpen = document.querySelector('.modal-rating');
const btnIsClosed = document.querySelector('.rating-close-btn');

modalExercises.addEventListener('click', onExercisesCardClick);
btnIsClosed.addEventListener('click', closeModalExercises);

function onExercisesCardClick(event) {
  if (!event.target.closest('.modal-exercises__btn-rating')) {
    return;
  }

  modalIsOpen.classList.remove('is-hidden');
  modalExercises.classList.add('hidden');
}

function closeModalExercises() {
  modalIsOpen.classList.add('is-hidden');
  modalExercises.classList.remove('hidden');
}
