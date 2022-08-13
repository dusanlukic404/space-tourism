"use strict";

const btnMenu = document.querySelector(".btn-menu");
const primaryNav = document.querySelector(".primary-navigation");

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("btn-menu--active");
  if (btnMenu.classList.contains("btn-menu--active")) {
    primaryNav.style.transform = "translateX(0)";
  } else {
    primaryNav.style.transform = "translateX(100%)";
  }
});
