// Navigation

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
})

// function courseSection(e) {
//   e.preventDefault();
//   window.location = "courses.html";
//   console.log("y this thing no won work??");
// }

//  Initialize Swiper

//  Hero Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Courses Swiper
var swiper = new Swiper(".courseSwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    791: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Course Mate Swiper
var swiper = new Swiper(".courseMateSwiper", {
  effect: "coverflow",
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    791: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
