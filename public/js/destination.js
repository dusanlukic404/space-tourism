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

      const tl = gsap.timeline();

      tl.from(".destination-img", {
        duration: 0.7,
        opacity: 0,
        x: -100,
      });

      tl.from(".section-text h2", {
        duration: 1,
        opacity: 0,
        y: 20,
      });

      tl.from(".destination-description", {
        duration: 1,
        opacity: 0,
        y: 50,
      });

      tl.from(".box", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.25,
      });
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

gsap.from(".section-text .link", {
  duration: 1,
  opacity: 0,
  y: 10,
  stagger: 0.25,
});

gsap.from(".destination-img", {
  duration: 1,
  opacity: 0,
  x: -100,
  delay: 0.5,
});

gsap.from(".destination-description", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 1,
});

gsap.from(".box", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.25,
  delay: 1,
});

gsap.from(".section-text h2", {
  duration: 1,
  opacity: 0,
  y: 20,
  delay: 0.7,
});
