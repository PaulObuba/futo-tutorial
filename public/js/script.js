// MOBILE NAVIGATION

const navTogglerBtn = document.querySelector(".nav-toggler");
const rightSection = document.querySelector(".left-section");

navTogglerBtn.addEventListener("click", () => {
  rightSectionTogglerBtn();
});

function rightSectionTogglerBtn() {
  rightSection.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}