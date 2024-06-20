import { createGameField } from "../createGameField";
import { createNode } from "../createNode";
import "./modal.css";

function closeModal() {
  createGameField();
  const popup = document.querySelector(".popup");
  popup.innerHTML = "";
  popup.classList.add("modal_close");
}

export function openModal(answer, resultGame) {
  const popup = document.querySelector(".popup");

  const modal = createNode("div", ["modal"], null);

  popup.append(modal);

  if (resultGame === "win") {
    const title = createNode("h2", ["modal__title"], "You have won");
    modal.append(title);
  } else {
    const title = createNode("h2", ["modal__title"], "You have lost");
    modal.append(title);
  }

  const correctAnswerBlock = createNode(
    "p",
    ["modal__correct-answer"],
    `Correct answer is ${answer}`,
  );
  modal.append(correctAnswerBlock);

  const buttonForStartNewGame = createNode(
    "button",
    ["modal__button"],
    "Try again!",
  );
  modal.append(buttonForStartNewGame);
  document
    .querySelector(".modal__button")
    .addEventListener("click", closeModal);

  popup.classList.remove("modal_close");
}
