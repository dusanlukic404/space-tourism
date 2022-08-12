"use strict";

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const crewData = data.crew;
    const crewLinks = document.querySelectorAll(".crew-link");
    const crewLinksContainer = document.querySelector(".crew-links");
    let selectedCrew = "";

    crewLinksContainer.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("crew-link")) return;

      crewLinks.forEach((link) => {
        link.classList.remove("crew-link--active");
        link.setAttribute("aria-selected", false);
      });
      e.target.classList.add("crew-link--active");
      e.target.setAttribute("aria-selected", true);

      selectedCrew = e.target.dataset.crewname;

      const [dataForCrew] = crewData.filter(
        (data) => selectedCrew === data.name
      );

      changeCrew(dataForCrew);
    });
  });

function changeCrew(data) {
  const crewProfession = document.querySelector(".crew-text__profession");
  const crewName = document.querySelector(".crew-text__name");
  const crewBio = document.querySelector(".crew-text__bio");
  const crewImg = document.querySelector(".crew-img");

  crewProfession.textContent = data.role;
  crewName.textContent = data.name;
  crewBio.textContent = data.bio;
  crewImg.src = data.images.png;
}
