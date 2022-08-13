"use strict";

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const destinationsData = data.destinations;
    const destinationLinks = document.querySelectorAll(".link-section");
    const destinationLinksContainer =
      document.querySelector(".destination-list");
    let selectedDestination = "";

    destinationLinksContainer.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("link-section")) return;

      destinationLinks.forEach((link) => link.classList.remove("link--active"));
      e.target.classList.add("link--active");

      selectedDestination = e.target.dataset.destination;
      const [dataForDestination] = destinationsData.filter(
        (data) => selectedDestination === data.name.toLowerCase()
      );

      changeDestination(dataForDestination);
    });
  });

function changeDestination(data) {
  const destinationHeading = document.querySelector(".section-text h2");
  const destinationInfoText = document.querySelector(".section-text p");
  const [avgDistance, travelTime] = [
    ...document.querySelectorAll("[data-subheadingValue]"),
  ];
  const destinationImg = document.querySelector(".destination-img");

  destinationHeading.textContent = data.name;
  destinationInfoText.textContent = data.description;
  avgDistance.textContent = data.distance;
  travelTime.textContent = data.travel;
  destinationImg.src = data.images.png;
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
