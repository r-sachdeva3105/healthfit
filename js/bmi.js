function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = 'Please enter valid height and weight.';
    } else {
        const bmi = calculateBMIFromHeightWeight(height, weight);
        const category = getBMICategory(bmi);
        resultDiv.textContent = `Your BMI: ${bmi.toFixed(2)} (${category})`;
    }
}

function calculateBMIFromHeightWeight(height, weight) {
    // BMI Formula: weight (kg) / (height (m))^2
    const heightInMeters = height / 100; // Convert height to meters
    return weight / (heightInMeters ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
