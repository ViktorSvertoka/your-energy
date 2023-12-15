// import APIService from './00-api';
// const apiService = new APIService();

// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// const listItem = document.querySelector('.js-list');

// listItem.addEventListener('click', onSearch);

// let query = '';

// searchButton.addEventListener('click', function (event) {
//   event.preventDefault();
//   onSearch();
// });

// searchInput.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     onSearch();
//   }
// });

// async function onSearch(event) {
//   const searchQuery = searchInput.value.trim();

//   if (!event.target.closest('.filters__item')) {
//     return;
//   }

//   const item = event.target.closest('.filters__item');

//   const filter = item.children[0].innerText.toLowerCase();
//   const name = item.children[1].innerText.toLowerCase();

//   try {
//     const data = await apiService.getSearch(filter, name, searchQuery);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }

//   listItem.innerHTML = '';

//   query = searchQuery;
// }
