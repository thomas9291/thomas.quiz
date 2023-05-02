const svgIconsWhite = document.querySelector(".toggle-icon-white");
const icons = document.querySelector(".icons");
icons.addEventListener("click", (e) => {
  svgIconsWhite.classList.toggle("toggle-icon-white");
});
const btnToggle = document.querySelector(".btn");
const text = document.querySelector(".answert");

btnToggle.addEventListener("click", (e) => {
  console.log("hello");
  if (btnToggle.textContent === "Show answer") {
    text.textContent = "flex-direction";
    btnToggle.textContent = "hide answer";
  } else {
    text.textContent = "";
    btnToggle.textContent = "Show answer";
  }
});
