const goTopBtn = document.querySelector('.scroll__go-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offset = window.scrollY;
  const coords = document.documentElement.clientHeight;
  goTopBtn.classList.toggle('scroll__go-top--show', offset > coords);
}

function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75);
    requestAnimationFrame(goTop);
  }
}
