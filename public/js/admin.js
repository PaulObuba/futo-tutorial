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

const confirmDelete = (e) => {
  let url = "http://localhost:9999/api/v1/notification/:id";

  let response = fetch(url);
  console.log(response);

  if (e === "yes") {
    console.log("The delete button was clicked");
  } else {
    console.log("The cancel button was clicked");
  }
};

// popup
const popup = document.querySelector(".popup");

const openPopup = (e) => {
  popup.classList.toggle("openn");

  let id = e;
  let url = `http://localhost:9999/api/v1/notification/${id}`;
  console.log(url, `/notification/${id}`, document.querySelector(".sure"));
  document
    .querySelector(".sure")
    .setAttribute("href", `/api/v1/notification/${id}`);
};

const editFunction = (e) => {
  let id = e;

  document.querySelector(".editt").setAttribute("action", `/api/v1/notification/edit/${id}`);
};
