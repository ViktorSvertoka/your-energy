import APIService from './00-api';

const quoteOfTheDay = document.querySelector('.js-quote');

const apiService = new APIService();

quote();

async function quote() {
  const quoteData = JSON.parse(localStorage.getItem('quoteDay'));
  const currentDate = new Date();
  const newData = currentDate.toISOString().split('T')[0];

  if (quoteData?.currentDate === newData) {
    displayQuote(quoteData.data);
    return;
  }

  try {
    const data = await apiService.getQuote();
    const combinedData = {
      data: data,
      currentDate: newData,
    };

    localStorage.setItem('quoteDay', JSON.stringify(combinedData));
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
