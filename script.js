const inputWeight = document.querySelector('.input-weight');
const inputHeight = document.querySelector('.input-height');
const calculateWeight = document.querySelector('.add');
const result = document.querySelector('.result');

calculateWeight.addEventListener('click', () => {
    const inputWeightValue = Number(inputWeight.value);
    const inputHeightValue = Number(inputHeight.value);

    if (inputWeight === "" || inputHeight === "" || inputHeight <= 0 || inputWeight <= 0) {
        result.innerHTML = "Please enter valid height and weight values.";
        return;
    }

    const heightInMeters = inputHeightValue / 100;
    const bmi = inputWeightValue / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(2);

    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal Weight';
    } else {
        category = 'Overweight';
    }

    result.innerHTML = `Your BMI is <strong>${roundedBmi}</strong> (${category})`;
    inputWeight.value = '';
    inputHeight.value = '';
})