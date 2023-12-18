document.addEventListener('DOMContentLoaded', function () {
  const teamLink = document.querySelector('.bmi__link');
  const teamBackdrop = document.querySelector('.bmi__backdrop');
  const teamCloseBtn = document.querySelector('.bmi__modal-close-btn');
  const asideImg = document.querySelector('.aside__img');
  const bmiInputEl = document.getElementById('bmi-result');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const btnEl = document.getElementById('btn');
  const weightConditionEl = document.getElementById('weight-condition');

  function onLinkClick(event) {
    event.preventDefault();
    resetInputs();
    openModal();
  }

  function onAsideImgClick() {
    resetInputs();
    openModal();
  }

  function onEscClick(event) {
    if (event.code === 'Escape') {
      closingModalStaff();
    }
  }

  function onBackdropClick(event) {
    if (!event.target.closest('.bmi__wrapper')) {
      closingModalStaff();
    }
  }

  function onCloseBtnClick(event) {
    event.preventDefault();
    closingModalStaff();
  }

  function addAllEventListeners() {
    document.addEventListener('keydown', onEscClick);
    teamBackdrop.addEventListener('click', onBackdropClick);
    teamCloseBtn.addEventListener('click', onCloseBtnClick);
    asideImg.addEventListener('click', onAsideImgClick);
  }

  function closingModalStaff() {
    document.removeEventListener('keydown', onEscClick);
    teamBackdrop.removeEventListener('click', onBackdropClick);
    teamCloseBtn.removeEventListener('click', onCloseBtnClick);
    asideImg.removeEventListener('click', onAsideImgClick);

    teamBackdrop.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  }

  function openModal() {
    teamBackdrop.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
    addAllEventListeners();
  }

  function resetInputs() {
    heightInput.value = '180';
    weightInput.value = '80';
    bmiInputEl.value = '';
  }

  function calculateBMI() {
    const heightValue = heightInput.value / 100;
    const weightValue = weightInput.value;
    const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(1);

    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5) {
      weightConditionEl.innerText = 'Under weight!';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      weightConditionEl.innerText = 'Normal weight!';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      weightConditionEl.innerText = 'Overweight!';
    } else if (bmiValue >= 30) {
      weightConditionEl.innerText = 'Obesity!';
    }
  }

  btnEl.addEventListener('click', calculateBMI);
  teamLink.addEventListener('click', onLinkClick);
});
