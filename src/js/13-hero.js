let svg = document.getElementById('mySVG');

svg.style.transform = 'scale(1)';
svg.style.transition = 'fill 0.3s ease, transform 0.3s ease';

let colors = [
  'var(--color-yellow)',
  'var(--color-black)',
  'var(--color-valid)',
];
let currentColorIndex = 0;

svg.addEventListener('mouseover', function () {
  svg.style.fill = colors[currentColorIndex];
  svg.style.transform = 'scale(1.6) rotate(145deg)';
});

svg.addEventListener('mouseout', function () {
  svg.style.transform = 'scale(1) rotate(0deg)';
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});
