import { checkCorrectLettersInAnswer } from "/js/content/content";
import { createGameField } from "./js/createGameField";

import "./style.css";

window.onload = function () {
  createGameField();

  document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    if (e.key.length === 1) {
      const unicodeLetter = key.charCodeAt(0);
      if (unicodeLetter >= 65 && unicodeLetter <= 90) {
        checkCorrectLettersInAnswer(key);
      }
    }
  });
};
