const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
];

let currentIndex = 0;
const slider = document.getElementById("slider");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// Function to update image
function showImage(index){
    slider.src = images[index];
}


// Manual navigation
previousBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
// Auto-play every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);
