"use strict";

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const techData = data.technology;
    const techLinks = document.querySelectorAll(".technology-link");
    const techLinksContainer = document.querySelector(".technology-list");
    let selectedTech = "";

    techLinksContainer.addEventListener("click", function (e) {
      e.preventDefault();

      if (
        e.target.classList.contains("technology-link") ||
        e.target.classList.contains("tech-num")
      ) {
        techLinks.forEach((link) => {
          link.classList.remove("technology-link--active");
          link.setAttribute("aria-selected", false);
        });

        e.target
          .closest(".technology-link")
          .classList.add("technology-link--active");
        e.target
          .closest(".technology-link")
          .setAttribute("aria-selected", true);

        selectedTech = e.target.closest(".technology-link").dataset.techname;

        const [dataForTech] = techData.filter(
          (data) => selectedTech == data.name.toLowerCase()
        );

        changeTech(dataForTech);
      }
    });
  });

function changeTech(data) {
  const techName = document.querySelector(".technology-heading");
  const techDescription = document.querySelector(".technology-info");
  const techImg = document.querySelectorAll(".technology-img");

  techName.textContent = data.name;
  techDescription.textContent = data.description;

  if (window.innerWidth > 980) {
    techImg[0].srcset = data.images.portrait;
  } else {
    techImg[1].srcset = data.images.landscape;
  }
}

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
