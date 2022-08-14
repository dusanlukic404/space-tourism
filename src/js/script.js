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

// Animations

gsap.from(".logo", {
  duration: 1,
  opacity: 0,
  x: -100,
});

gsap.from(".primary-navigation .link", {
  duration: 1,
  opacity: 0,
  x: 50,
  stagger: 0.25,
});

if (document.querySelector("#home-heading")) {
  gsap.from("#home-heading", { duration: 1, opacity: 0, y: 100, delay: 1 });
}

if (document.querySelector(".home-section__text p")) {
  gsap.from(".home-section__text p", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 1.5,
  });
}

if (document.querySelector(".btn-explore")) {
  gsap.from(".btn-explore", {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 2,
  });
}
