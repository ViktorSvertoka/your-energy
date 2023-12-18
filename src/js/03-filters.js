import APIService from './00-api';
const apiService = new APIService();
const listItem = document.querySelector('.js-list');
const paginationButtons = document.getElementById('pagination-numbers');
let currentPage = 1;

getFiltersExercises('Muscles', currentPage);

async function getFiltersExercises(params, currentPage) {
  try {
    const { results, totalPages } = await apiService.getFilter(
      params,
      currentPage
    );

    setupPagination({ results, totalPages });
    displayExercises(results);
  } catch (error) {
    console.log(error);
  }
}

function displayExercises(results) {
  listItem.innerHTML = '';
  const markup = results
    .map(({ filter, name, imgURL }) => {
      return `
  <li class="filters__item">
    <img class="filters__img-first" src="${imgURL}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${filter}</h2>
    <p class="filters__text-first">${name}</p>
    </div>
  </li>
    `;
    })
    .join('');

  listItem.insertAdjacentHTML('beforeend', markup);
}

document.querySelectorAll('.btnFilters').forEach(button => {
  button.addEventListener('click', () => {
    const params = button.innerText;
    listItem.innerHTML = '';
    currentPage = 1;
    getFiltersExercises(params, currentPage);
  });
});

function setupPagination({ results, totalPages }) {
  paginationButtons.innerHTML = '';

  if (totalPages <= 1) return;

  const params = results[0].filter;

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('button');
    pageNumber.className = 'pagination-button';
    pageNumber.textContent = i;

    paginationButtons.appendChild(pageNumber);

    pageNumber.addEventListener('click', () => {
      setCurrentPage(params, i);
    });
  }
  handleActivePageNumber();
}

async function setCurrentPage(params, i) {
  currentPage = i;
  await getFiltersExercises(params, currentPage);
  handleActivePageNumber();
  scrollToTop();
}

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination-button').forEach((button, page) => {
    button.classList.remove('active-btn');
    if (page + 1 === currentPage) {
      button.classList.add('active-btn');
    }
  });
};

function scrollToTop() {
  window.scrollTo({
    top: 830,
    behavior: 'auto',
  });
}
