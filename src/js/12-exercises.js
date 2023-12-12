import APIService from './00-api';

// const quoteOfTheDay = document.querySelector('.js-quote');

const apiService = new APIService();

exercises();

async function exercises() {
  try {
    const data = await apiService.getExercises('muscles', 'abs');

    console.log(data);
    // displayQuote(data);
  } catch (error) {
    console.log(error);
  }
}
