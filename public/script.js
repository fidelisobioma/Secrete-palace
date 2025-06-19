const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".open-btn");
const ulEl = document.querySelector("ul");

closeButton.addEventListener("click", () => {
  ulEl.classList.remove("show-menu");
});

openButton.addEventListener("click", () => {
  ulEl.classList.add("show-menu");
});
