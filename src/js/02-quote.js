import APIService from './00-api';

const quoteOfTheDay = document.querySelector('.js-quote');

const apiService = new APIService();

quote();

async function quote() {
  try {
    const data = await apiService.getQuote();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
}

function displayQuote({ author, quote }) {
  quoteOfTheDay.innerHTML = `
  <p class="quote__text">${quote}</p>
  <h4 class="quote__author">${author}</h4>
    `;
}
