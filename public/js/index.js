function observeElements(elements, className) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(className, entry.isIntersecting);
      });
    },
    {
      // Add your options here if needed
      // threshold: 1,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// header
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var headerHeight = header.offsetHeight;

  function updateHeader() {
    if (window.scrollY > headerHeight) {
      header.classList.add("header-solid");
      header.classList.remove("header-transparent");
    } else {
      header.classList.remove("header-solid");
      header.classList.add("header-transparent");
    }
  }

  // Initial check in case the user starts partway down the page
  updateHeader();

  // Listen for scroll events
  window.addEventListener("scroll", function () {
    updateHeader();
  });
});

// // heading
// const heading = document.querySelectorAll(".heading-hide");
// observeElements(heading, "heading-show");
// // box
// const box = document.querySelectorAll(".box-hide");
// observeElements(box, "box-show");

// // bar
// const bar = document.querySelectorAll(".bar-hide");
// observeElements(bar, "bar-show");

// // Helicopters
// const helicopter1 = document.querySelectorAll(".helicopter");
// observeElements(helicopter1, "helicopter-show");

// const helicopter2 = document.querySelectorAll(".helicopter2");
// observeElements(helicopter2, "helicopter2-show");

// const helicopter3 = document.querySelectorAll(".helicopter3");
// observeElements(helicopter3, "helicopter3-show");

// // Tanks
// const tank1 = document.querySelectorAll(".tank");
// observeElements(tank1, "tank-show");

// const tank2 = document.querySelectorAll(".tank2");
// observeElements(tank2, "tank2-show");

// const tank3 = document.querySelectorAll(".tank3");
// observeElements(tank3, "tank3-show");

// // drone
// const drone1 = document.querySelectorAll(".drone");
// observeElements(drone1, "drone-show");

// const drone2 = document.querySelectorAll(".drone2");
// observeElements(drone2, "drone2-show");

// const drone3 = document.querySelectorAll(".drone3");
// observeElements(drone3, "drone3-show");

// // atomics
// const atomics = document.querySelectorAll(".atomic");
// observeElements(atomics, "atomic-show");

// // plane
// const plane = document.querySelectorAll(".slide-plane-hide");
// observeElements(plane, "slide-plane-show");

// fade in up
const fadeInUp = document.querySelectorAll(".fade-content-hide");
observeElements(fadeInUp, "fade-content-show");

$(document).ready(function () {
  $(".dmshow").click(function () {
    if ($(this).find("i").hasClass("fa-bars1")) {
      $("#menuContainer").fadeIn();

      $("#headNav .ssh:not(:last)")
        .removeClass("animated fadeIn faster")
        .addClass("animated fadeOut faster");

      $("#headNav-mob .ssh:not(:last)")
        .removeClass("animated fadeIn faster")
        .addClass("animated fadeOut faster");

      $(this).find("i").removeClass("fa-bars1").addClass("fa-times1");

      $(this).find("span").text("Close");
    } else {
      $("#menuContainer").fadeOut();

      $("#headNav .ssh:not(:last)")
        .removeClass("animated fadeOut faster")
        .addClass("animated fadeIn faster");

      $("#headNav-mob .ssh:not(:last)")
        .removeClass("animated fadeOut faster")
        .addClass("animated fadeIn faster");

      $(this).find("i").removeClass("fa-times1").addClass("fa-bars1");

      $(this).find("span").text("Menu");
    }
  });

  $(".dmsearch").click(function () {
    $(".fs-searchpanel")
      .removeClass("animated faster fadeOutUp")
      .addClass("animated faster fadeInDown")
      .show();

    $(".searchClose").show();

    $(".ssh").hide();
  });

  $(".searchClose").click(function () {
    $(".ssh").show();

    $(".fs-searchpanel")
      .removeClass("animated faster fadeInDown")
      .addClass("animated faster fadeOutUp")
      .show();

    $(".searchClose").hide();
  });
});

const linksContainer = document.querySelector(".menu__box");

linksContainer.addEventListener("click", (e) => {
  if (e.target.matches(".menu__item")) {
    e.preventDefault();
    closeSideMenu();
    window.location.href = e.target.href;
  }
});

function closeSideMenu() {
  const sideMenuToggle = document.querySelector("#dmshow");
  sideMenuToggle.click();
}

// product
const slides = document.querySelectorAll(".slides");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dots = document.querySelectorAll(".productdot");

let index = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity = "1";

// positioning the slides

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// move slide function

const moveSlide = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

// remove dots opacity 1 from all dots

const removeDotsOpacity = () => {
  dots.forEach((dot) => {
    dot.style.opacity = ".2";
  });
};

dots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    index = i;
    removeDotsOpacity();
    e.target.style.opacity = "1";
    moveSlide();
  });
});

// show the previous slide

prevBtn.addEventListener("click", () => {
  if (index === 0) return index;
  index--;
  removeDotsOpacity();
  dots[index].style.opacity = "1";
  moveSlide();
});

// show the next slide

nextBtn.addEventListener("click", () => {
  if (index === slides.length - 1) return index;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity = "1";
  moveSlide();
});

// auto play slide

const autoPlaySlide = () => {
  removeDotsOpacity();
  if (index === slides.length - 1) index = -1;
  index++;
  dots[index].style.opacity = "1";
  moveSlide();
};

window.onload = () => {
  setInterval(autoPlaySlide, 6000);
};

// star user gallery

//tabs
function changeTab(tab) {
  // Remove the 'active' class from all dots
  document.querySelectorAll(".tabs .dot").forEach(function (item) {
    item.classList.remove("active");
  });

  // Add the 'active' class to the clicked dot
  tab.querySelector(".dot").classList.add("active");
}

// Intersection observer
function observeElements(elements, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(className, entry.isIntersecting);
    });
  }, {});

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Heading
const heading = document.querySelectorAll(".heading-hide");
observeElements(heading, "heading-show");
const heading2 = document.querySelectorAll(".heading-hide2");
observeElements(heading2, "heading-show2");

// Box
const box = document.querySelectorAll(".box-hide");
observeElements(box, "box-show");

// Bar
const bar = document.querySelectorAll(".bar-hide");
observeElements(bar, "bar-show");

// Tabs and Swiper
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    autoplay: {
      delay: 1000000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Handle tab click
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      // Activate the clicked tab
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");

      // Navigate to the corresponding slide
      swiper.slideTo(index + 1); // Adjust index to match the slide number
    });
  });

  // Add custom logic to handle first and last slide navigation
  swiper.on("slideChange", function () {
    updateTabActiveClass();
  });

  // Helper function to update tab active class based on the current slide
  function updateTabActiveClass() {
    var activeIndex =
      ((swiper.realIndex % tabs.length) + tabs.length) % tabs.length;
    tabs.forEach(function (tab, index) {
      tab.classList.toggle("active", index === activeIndex);
    });
  }
});

// //Navbar
var lastScrollTop = 0; // Initialize lastScrollTop
var navbar = document.querySelector(".header"); // Use querySelector to get the first element with the class "header"

// Hide the navbar initially
navbar.style.top = "-80px";

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "0"; // Show navbar on scroll down
  } else {
    navbar.style.top = "-80px"; // Hide navbar on scroll up
  }
  lastScrollTop = scrollTop;
});
