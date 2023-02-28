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

// ================================ COURSES DELETE AND UPDATE STARS ==================================>

// ConfirmDelete from Mongodb
const coursesConfirmDelete = (e) => {
  let id = e;

  document
    .querySelector(".deleteFromDB")
    .setAttribute("href", `/api/v1/courses/${id}`);
};

// Edit and Update Data from Mongodb
const coursesEditFunction = (e) => {
  let id = e;

  document
    .querySelector(".editDB")
    .setAttribute("action", `/api/v1/courses/edit/${id}`);
};
// ================================ COURSES DELETE AND UPDATE ENDS ==================================>

// ================================ EVENTS DELETE AND UPDATE STARS ==================================>

// ConfirmDelete from Mongodb
const eventsConfirmDelete = (e) => {
  let id = e;

  document
    .querySelector(".deleteFromDB")
    .setAttribute("href", `/api/v1/events/${id}`);
};

// Edit and Update Data from Mongodb
const eventsEditFunction = (e) => {
  let id = e;

  document
    .querySelector(".editDB")
    .setAttribute("action", `/api/v1/events/edit/${id}`);
};
// ================================ EVENTS DELETE AND UPDATE ENDS ==================================>

// ================================ STUDENS DELETE AND UPDATE STARS ==================================>

// ConfirmDelete from Mongodb
const studentsConfirmDelete = (e) => {
  let id = e;

  document
    .querySelector(".deleteFromDB")
    .setAttribute("href", `/api/v1/students/${id}`);
};

// Edit and Update Data from Mongodb
const studentsEditFunction = (e) => {
  let id = e;

  document
    .querySelector(".editDB")
    .setAttribute("action", `/api/v1/students/edit/${id}`);
};
// ================================ STUDENS DELETE AND UPDATE ENDS ==================================>

// ================================ TEACHERS DELETE AND UPDATE STARS ==================================>
// ConfirmDelete from Mongodb
const teachersConfirmDelete = (e) => {
  let id = e;

  document
    .querySelector(".deleteFromDB")
    .setAttribute("href", `/api/v1/teachers/${id}`);
};

// Edit and Update Data from Mongodb
const teachersEditFunction = (e) => {
  let id = e;

  document
    .querySelector(".editDB")
    .setAttribute("action", `/api/v1/teachers/edit/${id}`);
};
// ================================ TEACHERS DELETE AND UPDATE ENDS ==================================>

// ================================ NOTIFICATION DELETE AND UPDATE STARS ==================================>

// ConfirmDelete from Mongodb
const notificationConfirmDelete = (e) => {
  let id = e;

  document
    .querySelector(".deleteFromDB")
    .setAttribute("href", `/api/v1/notification/${id}`);
};

// Edit and Update Data from Mongodb
const notificationEditFunction = (e) => {
  let id = e;

  document
    .querySelector(".editDB")
    .setAttribute("action", `/api/v1/notification/edit/${id}`);
};
// ================================ NOTIFICATION DELETE AND UPDATE ENDS ==================================>

// ================================ NOTIFICATION DELETE AND UPDATE STARS ==================================>
// ================================ NOTIFICATION DELETE AND UPDATE ENDS ==================================>
