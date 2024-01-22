import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Messages } from './13-messages.js';

const form = document.getElementById('subscribeForm');
const emailInput = form.querySelector('input[name="email"]');
const subscribeBtn = document.getElementById('subscribeBtn');

emailInput.addEventListener('input', handleEmailValidation);
form.addEventListener('submit', subscribe);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleEmailValidation() {
  const emailValue = emailInput.value;
  const isValid = isValidEmail(emailValue);

  emailInput.style.borderColor = isValid ? 'green' : 'red';
}

async function subscribe(e) {
  e.preventDefault();
  const formData = new FormData(form);

  const emailValue = formData.get('email');
  const isValid = isValidEmail(emailValue);
  if (!isValid) {
    console.error('Invalid email address');
    return Messages.error('Invalid email address');
  }

  try {
    subscribeBtn.disabled = true;
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
      form.reset();
      emailInput.style.borderColor = '';
      return Messages.success(`${response.data.message}`);
    } else {
      console.error('Server Error:', response.status, response.statusText);
      return Messages.error(
        `Server Error: ${response.status} ${response.statusText}`
      );
    }
  } catch (err) {
    console.error('Error:', err.message);
    return Messages.error(`Error: ${err.message}`);
  } finally {
    subscribeBtn.disabled = false;
  }
}
