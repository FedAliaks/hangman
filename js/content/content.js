import { openModal } from "../modal/modal";
import { createNode } from "../createNode";
import "./content.css";

export const questions = [
  {
    country: "Estonia",
    capital: "Tallinn",
  },
  {
    country: "Zambia",
    capital: "Lusaka",
  },
  {
    country: "Uruguay",
    capital: "Montevideo",
  },
  {
    country: "Senegal",
    capital: "Dakar",
  },
  {
    country: "Mozambique",
    capital: "Maputo",
  },
  {
    country: "Montenegro",
    capital: "Podgorica",
  },
  {
    country: "Moldova",
    capital: "Chisinau",
  },
  {
    country: "Barbados",
    capital: "Bridgetown",
  },
  {
    country: "Belize",
    capital: "Belmopan",
  },
  {
    country: "Bangladesh",
    capital: "Dhaka",
  },
  {
    country: "Germany",
    capital: "Berlin",
  },
];

let unsuccessStep = 0;
let answer = "";
const openedLetter = [];

function addHiddenAnswer() {
  const hiddenAnswerBlock = document.querySelector(
    ".content__hidden-answer-block",
  );

  for (let i = 0; i < answer.length; i += 1) {
    const letter = createNode(
      "div",
      ["hidden-answer-block__letter", "letter_hidden"],
      answer[i],
    );
    hiddenAnswerBlock.append(letter);
  }
}

function openNewLetter(letter) {
  openedLetter.push(letter);

  const listOfLetters = document.querySelectorAll(
    ".hidden-answer-block__letter",
  );

  listOfLetters.forEach((item) => {
    if (item.classList.contains("letter_hidden") && item.innerText === letter) {
      item.classList.remove("letter_hidden");
      item.classList.add("letter_showed");
    }
  });

  if (document.querySelectorAll(".letter_hidden").length === 0) {
    openModal(answer, "win");
  }
}

function addMistakeCount() {
  unsuccessStep += 1;

  const countMistakesBlock = document.querySelector(
    ".content__unsuccess-block",
  );
  countMistakesBlock.innerText = `unsuccessful attempts ${unsuccessStep} / 6`;

  if (unsuccessStep === 1) {
    document
      .querySelector(`.mistake${unsuccessStep}`)
      .classList.add("svg-stroke_red");
  } else {
    if (unsuccessStep < 7) {
      document
        .querySelector(`.mistake${unsuccessStep}`)
        .classList.add("svg-fill_red");
    }
  }

  if (unsuccessStep >= 6) {
    openModal(answer, "lose");
  }
}

function createKeyboard() {
  const keyboardBlock = document.querySelector(".content__keyboard-block");
  for (let i = 65; i <= 90; i += 1) {
    const key = createNode("div", ["key"], String.fromCharCode(i));
    key.id = String.fromCharCode(i);
    keyboardBlock.append(key);
  }
}

export function checkCorrectLettersInAnswer(letter) {
  const letterOnKeyboard = document.querySelector(
    `.content__keyboard-block > #${letter}`,
  );

  if (answer.split("").includes(letter)) {
    letterOnKeyboard.classList.add("key_correct");
    openNewLetter(letter);
  } else if (!letterOnKeyboard.classList.contains("key_mistake")) {
    letterOnKeyboard.classList.add("key_mistake");
    addMistakeCount();
  }
}

function clickOnKeyboard(target) {
  if (
    !target.classList.contains("key_correct") &&
    !target.classList.contains("key_mistake")
  ) {
    checkCorrectLettersInAnswer(target.id);
  }
}

export function createContentBlock() {
  unsuccessStep = 0;
  const body = document.querySelector("body");
  const question = questions[Math.floor(Math.random() * questions.length)];

  answer = question.capital.toUpperCase();

  const contentBlock = createNode("div", ["content-block"], null);
  body.append(contentBlock);

  const hiddenAnswerBlock = createNode(
    "div",
    ["content__hidden-answer-block"],
    null,
  );
  contentBlock.append(hiddenAnswerBlock);
  addHiddenAnswer();

  const questionBlock = createNode(
    "div",
    ["content__question-block"],
    `Hint: The capital of ${question.country}`,
  );
  contentBlock.append(questionBlock);

  const unsuccessfulBlock = createNode(
    "div",
    ["content__unsuccess-block"],
    `unsuccessful attempts ${unsuccessStep} / 6`,
  );
  contentBlock.append(unsuccessfulBlock);

  const keyboardBlock = createNode("div", ["content__keyboard-block"], null);
  contentBlock.append(keyboardBlock);
  createKeyboard();
  keyboardBlock.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("key")) {
      clickOnKeyboard(target);
    }
  });
}
