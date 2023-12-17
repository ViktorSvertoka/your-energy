import axios from 'axios';
import iziToast from 'izitoast';

class RatingModal {
  constructor() {
    this.modalExercises = document.querySelector('.modal-exercises');
    this.modalRating = document.querySelector('.modal-rating');
    this.stars = document.querySelectorAll('.rating-star');
    this.ratingValue = document.querySelector('.rating-value');
    this.ratingForm = document.querySelector('.rating-form');
    this.ratingEmail = document.querySelector('.rating-email');
    this.ratingComment = document.querySelector('.rating-comment');
    this.ratingSubmitBtn = document.querySelector('.rating-submit-btn');

    this.setupModalToggle();
    this.setupStarRating();
    this.setupFormSubmission();
  }

  setupModalToggle() {
    $(document).ready(() => {
      $('.modal-exercises .btn').click(() => {
        this.modalExercises.modal('hide');
        this.modalRating.modal('show');
      });
    });
  }

  setupStarRating() {
    this.stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = star.getAttribute('rating-value');
        document.querySelectorAll('.rating-star.rated').forEach(star => {
          star.classList.remove('rated');
        });
        for (let i = 0; i < value; i++) {
          this.stars[i].classList.add('rated');
        }
        this.ratingValue.textContent = value + '.0';
      });
    });
  }

  setupFormSubmission() {
    this.ratingForm.addEventListener('submit', e => {
      e.preventDefault();
      this.submitRating();
    });
  }

  submitRating() {
    const email = this.ratingEmail.value;
    const comment = this.ratingComment.value;
    const rating = this.ratingValue.textContent;
    if (email && comment && rating) {
      const data = JSON.stringify({
        email: email,
        comment: comment,
        rating: rating,
      });
      axios
        .post('https://your-energy.b.goit.study/api/', data)
        .then(response => {
          if (response.status === 200) {
            iziToast.success({
              title: 'Success',
              message: 'Your rating has been submitted successfully!',
              position: 'topRight',
            });
            this.modalRating.modal('hide');
            this.modalExercises.modal('show');
          }
        })
        .catch(error => {
          iziToast.error({
            title: 'Error',
            message:
              'There was an error submitting your rating. Please try again.',
            position: 'topRight',
          });
        });
    } else {
      iziToast.warning({
        title: 'Warning',
        message: 'Please fill in all fields before submitting your rating.',
        position: 'topRight',
      });
    }
  }
}

new RatingModal();
