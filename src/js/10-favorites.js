import APIService from './00-api';
const apiService = new APIService();

const modalExercises = document.querySelector('.modal-exercises');

modalExercises.addEventListener('click', onExercisesCardClick);

let array = JSON.parse(localStorage.getItem('exerciseData')) || [];

async function onExercisesCardClick(event) {
  if (!event.target.closest('.modal-exercises__btn-favorites')) {
    return;
  }

  try {
    const exerciseID = event.target
      .closest('.modal-exercises__btn-favorites')
      .getAttribute('data-id');

    const exerciseData = await apiService.getExercisesById(exerciseID);

    if (array.some(item => item._id === exerciseData._id)) {
      array = array.filter(item => item._id !== exerciseData._id);
    } else {
      array.push(exerciseData);
    }

    localStorage.setItem('exerciseData', JSON.stringify(array));
  } catch (error) {
    console.log(error);
  }
}
