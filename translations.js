document.addEventListener("DOMContentLoaded", () => {
  //translations
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith("hu") ? "hu" : "en";

  fetch(`./assets/translations/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      const elements = {
        title: document.querySelector(".title"),
        spinButton: document.querySelector(".spin-button"),
        button: document.querySelector(".button"),
        popupRegularTitle: document.querySelector(
          "#popup-regular .popup-title"
        ),
        popupRegularButton: document.querySelector(
          "#popup-regular .popup-button"
        ),
        popupJackpotTitle: document.querySelector(
          "#popup-jackpot .popup-title"
        ),
        popupJackpotDescription: document.querySelector(
          "#popup-jackpot .popup-description-subtitle"
        ),
        popupJackpotDescription1: document.querySelector(
          "#popup-jackpot .popup-description-bonus-1"
        ),
        popupJackpotDescription2: document.querySelector(
          "#popup-jackpot .popup-description-bonus-2"
        ),
        popupJackpotButton: document.querySelector(
          "#popup-jackpot .popup-button"
        ),
      };

      const setTextContent = (element, text) => {
        if (element) {
          element.textContent = text;
        }
      };

      elements.title.innerHTML = translations.title.replace(/\n/g, "<br>");
      setTextContent(elements.spinButton, translations.spinButton);
      setTextContent(elements.button, translations.button);
      setTextContent(elements.popupRegularTitle, translations.popupTitle);
      setTextContent(
        elements.popupRegularButton,
        translations.popupRegularButton
      );
      setTextContent(
        elements.popupJackpotTitle,
        translations.popupJackpotTitle
      );
      setTextContent(
        elements.popupJackpotDescription,
        translations.popupJackpotDescription
      );
      setTextContent(
        elements.popupJackpotDescription1,
        translations.popupNumberBonusDescription
      );
      setTextContent(
        elements.popupJackpotDescription2,
        translations.popupNumberBonus2Description
      );
      setTextContent(
        elements.popupJackpotButton,
        translations.popupJackpotButton
      );
    })
    .catch((error) => console.error("Error loading translations:", error));
});
