let count = 0;
const countDisplay = document.getElementById("count");
const inButton = document.getElementById("increase");
const deButton = document.getElementById("decrease");
const resButton = document.getElementById("reset");

inButton.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
});
deButton.addEventListener("click", () => {
    count--;
    countDisplay.innerText = count;
});
resButton.addEventListener("click", () => {
    count = 0;
    countDisplay.innerText = count;
});














