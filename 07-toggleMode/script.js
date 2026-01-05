const body = document.body;
const toggleBtn = document.getElementById("toggleBtn");

// Get theme from localStorage or default to light
const currentTheme = localStorage.getItem("theme") || "light";
body.classList.add(currentTheme);

// Button click to toggle theme
toggleBtn.addEventListener("click", ()=> {
    body.classList.toggle("dark");
    body.classList.toggle("light");

// Save new theme in localStorage
  const newTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
});