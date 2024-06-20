import { createContentBlock } from "./content/content";
import { createHangmanBlock } from "./hangman/hangman";
import { createNode } from "./createNode";

export function createGameField() {
  const body = document.querySelector("body");
  body.classList.add("body");
  body.innerHTML = "";

  createHangmanBlock();

  createContentBlock();

  const modalWindowBlock = createNode("div", ["popup", "modal_close"], null);
  body.append(modalWindowBlock);
}
