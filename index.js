document.addEventListener("DOMContentLoaded", () => {
  function wheelOfFortune(selector) {
    const node = document.querySelector(selector);
    if (!node) return;

    const spinButtons = document.querySelectorAll(
      ".spin-button, .spin-button-main"
    );
    const wheel = node.querySelector(".wheel-list");
    const items = node.querySelectorAll(".wheel-segment");
    const popupOverlay = document.querySelector("#popup-overlay");
    const popupRegular = document.querySelector("#popup-regular");
    const popupJackpot = document.querySelector("#popup-jackpot");
    const popupNumberElement = document.querySelector("#popup-number-regular");
    const popupUnitsElement = document.querySelector("#popup-units-regular");
    const closePopupButtons = document.querySelectorAll(".popup-close");

    const numberOfItems = items.length;
    const itemAngle = 360 / numberOfItems;
    const offsetAngle = 120;
    let animation;
    let previousEndDegree = 0;

    const sectorData = [
      { number: "50 000", units: " Ft", isJackpot: false },
      { number: "30", units: " Ip", isJackpot: false },
      { number: "", units: "", isJackpot: true },
      { number: "50", units: " Ip", isJackpot: false },
      { number: "30 000", units: " Ft", isJackpot: false },
      { number: "70", units: " Ip", isJackpot: false },
    ];

    function showPopup(sector) {
      popupOverlay.style.display = "flex";
      if (sector.isJackpot) {
        popupRegular.style.display = "none";
        popupJackpot.style.display = "flex";
      } else {
        popupJackpot.style.display = "none";
        popupRegular.style.display = "flex";
      }
      if (popupNumberElement) {
        popupNumberElement.textContent = sector.number;
      }
      if (popupUnitsElement) {
        popupUnitsElement.textContent = sector.units;
      }
    }

    function hidePopup() {
      popupOverlay.style.display = "none";
    }

    spinButtons.forEach((spinButton) => {
      spinButton.addEventListener("click", () => {
        if (animation) {
          animation.cancel();
        }

        items.forEach((item) => item.classList.remove("active"));

        const randomAdditionalDegrees = Math.random() * 360 + 1800;
        const newEndDegree = previousEndDegree + randomAdditionalDegrees;

        animation = wheel.animate(
          [
            { transform: `rotate(${previousEndDegree}deg)` },
            { transform: `rotate(${newEndDegree}deg)` },
          ],
          {
            duration: 4000,
            direction: "normal",
            easing: "cubic-bezier(0.440, -0.205, 0.000, 1.130)",
            fill: "forwards",
            iterations: 1,
          }
        );

        animation.onfinish = () => {
          const finalDegree = newEndDegree % 360;
          const winningIndex = Math.floor(
            ((360 - finalDegree + offsetAngle) % 360) / itemAngle
          );
          items[winningIndex].classList.add("active");
          showPopup(sectorData[winningIndex]);
          previousEndDegree = newEndDegree;
        };
      });
    });

    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) {
        hidePopup();
      }
    });

    closePopupButtons.forEach((button) => {
      button.addEventListener("click", hidePopup);
    });
  }

  wheelOfFortune(".wheel");
});
