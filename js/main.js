let prevScroll = window.pageYOffset;
let navbar = document.querySelector(".navbar");
let portfolioBox = document.querySelectorAll(".filter-box");
let filterBtns = document.querySelectorAll(".filter-btn");
let navLink = document.querySelectorAll(".nav-link");
let navBtn = document.querySelector(".navbar-toggler");

window.onscroll = function () {
  let currentScroll = window.scrollY;
  if (currentScroll < prevScroll || currentScroll == prevScroll) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-80px";
  }
  prevScroll = currentScroll;
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.type == "all") {
      portfolioBox.forEach((box) => {
        box.style.display = "block";
      });
    } else if (btn.dataset.type == "websites") {
      portfolioBox.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains(btn.dataset.type)) {
          box.style.display = "block";
        }
      });
    } else if (btn.dataset.type == "desing") {
      portfolioBox.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains(btn.dataset.type)) {
          box.style.display = "block";
        }
      });
    } else if (btn.dataset.type == "mockup") {
      portfolioBox.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains(btn.dataset.type)) {
          box.style.display = "block";
        }
      });
    }
  });
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navBtn.click();
  });
});
