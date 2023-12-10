import axios from 'axios';

export default class APIService {
  constructor() {
    this.baseURL = 'https://your-energy.b.goit.study/api/';
    this.page = 0;
  }

  resetPage() {
    this.page = 0;
  }

  async getExercises() {
    try {
      this.page += 1;
      const response = await axios.get(`${this.baseURL}exercises`);

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getExercisesById(_id) {
    try {
      this.page += 1;

      const response = await axios.get(`${this.baseURL}exercises/${_id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilter(params) {
    try {
      this.page += 1;
      const response = await axios.get(
        `${this.baseURL}filters?filter=${params}&page=${this.page}`
      );

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getQuote() {
    try {
      this.page += 1;
      const response = await axios.get(`${this.baseURL}quote`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async patchRating(_id, ratingData) {
    try {
      this.page += 1;
      const response = await axios.patch(
        `${this.baseURL}exercises/${_id}/rating`,
        ratingData
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postSubscriptions(email) {
    try {
      this.page += 1;
      const response = await axios.post(`${this.baseURL}subscription`, email);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
