function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    displayResult(bmi);
  } else {
    alert("Please enter valid values for weight and height");
  }
}

function displayResult(bmi) {
  const resultDiv = document.getElementById("result");
  let text = ''

  if (bmi < 18.5) {
    text = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    text = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    text = "Overweight";
  } else {
    text = "Obese";
  }

  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} - ${text}`;
}

document.getElementById("btnCalculate").addEventListener("click", calculateBMI);
