const form = document.querySelector('form'); // Renamed from 'from' to 'form'
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Corrected query selectors for input values
    const height = parseInt(document.querySelector('#Height').value); // Use .value to get input value
    const weight = parseInt(document.querySelector('#weight').value); // Use .value to get input value
    const result = document.querySelector('#result');

    // Validation for height input
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter a valid height`;
    } 
    // Validation for weight input
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter a valid weight`;
    } 
    else {
        // BMI calculation (height in cm, so we convert it to meters for BMI formula)
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Formula for BMI

        // Display BMI result
        result.innerHTML = `Your BMI is ${bmi}`;
    }
});
