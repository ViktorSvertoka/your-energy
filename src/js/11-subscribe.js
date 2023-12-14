import axios from 'axios';

const form = document.getElementById('subscribeForm');
console.dir(form);

form.addEventListener('submit', subscribe);

async function subscribe(e) {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await axios.post(
      'https://your-energy.b.goit.study/api/subscription',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status >= 200 && response.status < 300) {
      console.log('Server Response:', response);
    } else {
      console.error('Server Error:', response.status, response.statusText);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
