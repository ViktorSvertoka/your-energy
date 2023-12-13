// import APIService from './00-api';
// const apiService = new APIService();
// const listItem = document.querySelector('.js-list');

// listItem.addEventListener('click', onCardClick);

// async function onCardClick(e) {
//   if (!e.target.closest('.filters__item')) {
//     return;
//   }

//   const item = e.target.closest('.filters__item');

//   const filter = item.children[0].innerText.toLowerCase();
//   const name = item.children[1].innerText.toLowerCase();

//   try {
//     const data = await apiService.getExercises(filter, name);
//     renderExercises(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderExercises(data) {
//   listItem.innerHTML = '';
//   const markup = data
//     .map(({ name, burnedCalories, bodyPart, target }) => {
//       return `
//   <li class="filters__item">
//     <p class="filters__pre-title-second"></p>
//     <button class="filters__btn-second" type="button">svg</button>
//     <h2 class="filters__title-second">${name}</h2>
//     <p class="filters__text-second"><span>Burned calories:</span>${burnedCalories}</p>
//     <p class="filters__text-second"><span>Body part:</span>${bodyPart}</p>
//     <p class="filters__text-second"><span>Target:</span>${target}</p>
//   </li>
//     `;
//     })
//     .join('');

//   listItem.insertAdjacentHTML('beforeend', markup);
// }
