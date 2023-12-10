import APIService from './00-api';

const apiService = new APIService();

test();

async function test() {
  try {
    const data = await apiService.postSubscriptions({
      email: 'test888338@gmail.com',
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
