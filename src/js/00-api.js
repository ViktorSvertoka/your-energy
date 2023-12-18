import axios from 'axios';

export default class APIService {
  constructor() {
    this.baseURL = 'https://your-energy.b.goit.study/api/';
    this.page = 0;
  }

  resetPage() {
    this.page = 0;
  }

  async getExercises(params1, params2, page) {
    try {
      const response = await axios.get(
        `${this.baseURL}exercises?${params1}=${params2}&page=${page}&limit=10`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getSearch(params1, params2, params3) {
    try {
      const response = await axios.get(
        `${this.baseURL}exercises?${params1}=${params2}&keyword=${params3}&page=1&limit=10`
      );

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getExercisesById(_id) {
    try {
      const response = await axios.get(`${this.baseURL}exercises/${_id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilter(params, page) {
    try {
      const response = await axios.get(
        `${this.baseURL}filters?filter=${params}&page=${page}&limit=12`
      );

      return response.data;
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

  async postSubscriptions(emailData) {
    try {
      this.page += 1;
      const response = await axios.post(
        `${this.baseURL}subscription`,
        emailData
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
