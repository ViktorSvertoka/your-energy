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
  <p class="text__quote">${quote}</p>
  <h4 class="text__author">${author}</h4>
    `;
}
