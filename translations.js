document.addEventListener("DOMContentLoaded", () => {
  //translations
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith("hu") ? "hu" : "en";

  fetch(`./assets/translations/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      const titleElement = document.querySelector(".title");
      const spinButtonElement = document.querySelector(".spin-button");
      const buttonElement = document.querySelector(".button");
      const popupRegularTitleElement = document.querySelector(
        "#popup-regular .popup-title"
      );

      const popupRegularButton = document.querySelector(
        "#popup-regular .popup-button"
      );

      const popupJackpotTitleElement = document.querySelector(
        "#popup-jackpot .popup-title"
      );

      const popupJackpotDescriptionElement = document.querySelector(
        "#popup-jackpot .popup-description-subtitle"
      );

      const popupJackpotDescription1Element = document.querySelector(
        "#popup-jackpot .popup-description-bonus-1"
      );

      const popupJackpotDescription2Element = document.querySelector(
        "#popup-jackpot .popup-description-bonus-2"
      );

      const popupJackpotButton = document.querySelector(
        "#popup-jackpot .popup-button"
      );

      titleElement.innerHTML = translations.title.replace(/\n/g, "<br>");

      spinButtonElement.textContent = translations.spinButton;

      buttonElement.textContent = translations.button;

      popupRegularTitleElement.textContent = translations.popupTitle;

      popupJackpotTitleElement.textContent = translations.popupJackpotTitle;

      popupJackpotDescriptionElement.textContent =
        translations.popupJackpotDescription;

      popupJackpotDescription1Element.textContent =
        translations.popupNumberBonusDescription;

      popupJackpotDescription2Element.textContent =
        translations.popupNumberBonus2Description;

      popupJackpotButton.textContent = translations.popupJackpotButton;

      popupRegularButton.textContent = translations.popupRegularButton;
    })
    .catch((error) => console.error("Error loading translations:", error));
});
