document.addEventListener('DOMContentLoaded', function () {
  const ratingStars = document.querySelectorAll('.rating-label');
  const ratingValue = document.querySelector('.rating-value');
  const ratingForm = document.querySelector('.rating-form');

  let ratingCount = 0;

  ratingStars.forEach(star => {
    star.addEventListener('click', () => {
      ratingCount = star.dataset.rating;
      updateRating(ratingCount);
    });
  });

  function updateRating(count) {
    ratingValue.textContent = count;

    for (let i = 0; i < ratingStars.length; i++) {
      if (i < count) {
        ratingStars[i].classList.add('active');
      } else {
        ratingStars[i].classList.remove('active');
      }
    }
  }

  ratingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const ratingEmail = document.querySelector('.rating-email').value;
    const ratingComment = document.querySelector('.rating-comment').value;

    if (!ratingEmail || !ratingComment) {
      alert('Please fill out the email and comment fields');
      return;
    }

    alert('Rating submitted successfully!');
  });
});
