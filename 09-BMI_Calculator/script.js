const wightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", ()=> {
    const weight = parseFloat(wightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || height ===0){
        result.textContent = "Please eneter wight and height.";
    }

    const bmi = weight / (height * height);
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});