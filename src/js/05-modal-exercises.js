import APIService from './00-api';
const apiService = new APIService();

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const modalOpen = document.querySelector('.filters__btn-second');
console.log(modalOpen);

// modalOpen.addEventListener('click', onExercisesCardClick);

// function onExercisesCardClick(event) {}

// addModalListener(exercisesList);

// function addModalListener(listRef) {
//   if (!listRef) {
//     return;
//   }
//   listRef.addEventListener('click', onExercisesCardClick);

//   async function onExercisesCardClick(event) {
//     if (!event.target.closest('.filters__item')) {
//       return;
//     }

//     try {
//       const exerciseID = e.target
//         .closest('.filters__item')
//         .getAttribute('data-id');
//       const exerciseData = await apiService.getExercisesById(exerciseID);
//       const markup = createMarkup(exerciseData);
//       updateModal(markup);
//       btnModalClose.addEventListener('click', closeModalExercises);
//       openModalExercises();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function openModalExercises() {
//     const lockPaddingValue =
//       window.innerWidth - document.body.offsetWidth + 'px';

//     modalExercises.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//     document.body.style.paddingRight = lockPaddingValue;
//     document.body.style.overflow = 'hidden';
//   }

//   function updateModal(markup) {
//     modalExercises.innerHTML = markup;
//   }
// }

// // Треба вставити .map і .join('') але поки що не розумію як і куди. Також у нас гівка приходить різного розміру треба зробити srcset
// function createMarkup({
//   _id,
//   bodyPart,
//   equipment,
//   gifUrl,
//   name,
//   target,
//   description,
//   rating,
//   burnedCalories,
//   time,
//   popularity,
// }) {
//   const getExerciseGif = getGif(gifUrl);
//   function getGif(gifUrl) {
//     if (gifUrl === null || !gifUrl) {
//       return;
//       // Треба заглушку
//     }
//     return `src="${gifUrl}"`;
//   }
//   return `
//   <div class="modal-exercises__container" data-id="${_id}">
//   <button class="modal-exercises__btn-close"><svg width="24" height="24">
//     <use href="./img/sprite.svg#icon-menu-mobile-close"></use>
//   </svg>
//   </button>
//   <img
//     class="modal-exercises__img"
//     ${getExerciseGif}
//     alt="Exercise video"
//     loading="lazy"
//   />
//   <div class="modal-exercises__card">
//     <h2 class="modal-exercises__name">${name}</h2>
//     <div class="modal-exercises__block">
//       <!-- Зірочки -->
//       <ul class="modal-exercises__list">
//         <li class="modal-exercises__item">
//           <h3 class="modal-exercises__subtitle">Target</h3>
//           <p class="modal-exercises__text">${target}</p>
//         </li>
//         <li class="modal-exercises__item">
//           <h3 class="modal-exercises__subtitle">Body Part</h3>
//           <p class="modal-exercises__text">${bodyPart}</p>
//         </li>
//         <li class="modal-exercises__item">
//           <h3 class="modal-exercises__subtitle">Equipment</h3>
//           <p class="modal-exercises__text">${equipment}</p>
//         </li>
//         <li class="modal-exercises__item">
//           <h3 class="modal-exercises__subtitle">Popular</h3>
//           <p class="modal-exercises__text">${popularity}</p>
//         </li>
//         <li class="modal-exercises__item">
//           <h3 class="modal-exercises__subtitle">Burned calories</h3>
//           <p class="modal-exercises__text">${burnedCalories}/${time}</p>
//         </li>
//       </ul>
//       <p class="modal-exercises__description">${description}</p>
//     </div>
//     <div class="modal-exercises__btn-container">
//         <button class="modal-exercises__btn-favorites">
//             Add to favorites
//             <svg class="btn-favorites__icon" width="18" height="18">
//               <use href="../img/sprite.svg#icon-favorites"></use>
//             </svg>
//           </button>
//           <button class="modal-exercises__btn-rating">Give a rating</button>
//     </div>
//   </div>
// </div>
// `;
// }

// function closeModalExercises() {
//   modalExercises.classList.add('hidden');
//   overlay.classList.add('hidden');
//   document.body.style.paddingRight = '0px';
//   document.body.style.overflow = 'auto';
//   checkStorage();
// }

// overlay.addEventListener('click', closeModalExercises);
// window.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape' && !modalExercises.classList.contains('hidden')) {
//     closeModalExercises();
//   }
// });
