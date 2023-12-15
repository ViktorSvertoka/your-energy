 var svg = document.getElementById("mySVG");

svg.style.transform = "scale(1)";
  svg.style.transition = "fill 0.3s ease, transform 0.3s ease";

  var colors = ["var(--color-yellow)", "var(--color-black)", "var(--color-valid)"];
  var currentColorIndex = 0;

  svg.addEventListener("mouseover", function() {
    svg.style.fill = colors[currentColorIndex];
    svg.style.transform = "scale(1.6) rotate(145deg)";
  });

  svg.addEventListener("mouseout", function() {
    svg.style.transform = "scale(1) rotate(0deg)";
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  });

const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);