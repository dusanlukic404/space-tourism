"use strict";

const btnMenu = document.querySelector(".btn-menu");
const primaryNav = document.querySelector(".primary-navigation");

if (window.innerWidth < 620) {
  primaryNav.setAttribute("aria-expanded", false);
} else {
  primaryNav.setAttribute("aria-expanded", true);
}

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("btn-menu--active");
  if (btnMenu.classList.contains("btn-menu--active")) {
    openNav();
  } else {
    closeNav();
  }
});

function openNav() {
  primaryNav.style.transform = "translateX(0)";
  primaryNav.setAttribute("aria-expanded", true);
}

function closeNav() {
  primaryNav.style.transform = "translateX(100%)";
  primaryNav.setAttribute("aria-expanded", false);
}
