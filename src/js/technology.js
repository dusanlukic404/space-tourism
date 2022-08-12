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
  const techImg = document.querySelector(".technology-img");

  techName.textContent = data.name;
  techDescription.textContent = data.description;
  techImg.src = data.images.portrait;
}
