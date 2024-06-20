import { createNode } from "../createNode";
import "./hangman.css";

export function createHangmanBlock() {
  const body = document.querySelector("body");

  const hangmanBlock = createNode("div", ["hangman-block"], null);
  body.append(hangmanBlock);

  const title = createNode("h1", ["title"], "Hangman");

  hangmanBlock.append(title);

  const svgBlock = createNode("div", ["hangman"], null);
  hangmanBlock.append(svgBlock);
  svgBlock.innerHTML = `<svg class="hangman-svg" viewBox="0 0 483 708" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 42C40 40.8954 40.8954 40 42 40H441C442.105 40 443 40.8954 443 42V666C443 667.105 442.105 668 441 668H42C40.8954 668 40 667.105 40 666V42Z"/>
  <path d="M42 41H441V39H42V41ZM442 42V666H444V42H442ZM441 667H42V669H441V667ZM41 666V42H39V666H41ZM42 667C41.4477 667 41 666.552 41 666H39C39 667.657 40.3432 669 42 669V667ZM442 666C442 666.552 441.552 667 441 667V669C442.657 669 444 667.657 444 666H442ZM441 41C441.552 41 442 41.4477 442 42H444C444 40.3431 442.657 39 441 39V41ZM42 39C40.3431 39 39 40.3432 39 42H41C41 41.4477 41.4477 41 42 41V39Z" fill="white" fill-opacity="0.1"/>
  <circle cx="346.5" cy="277.5" r="48" class="mistake1" fill="white" stroke-width="5"/>
  <rect x="220.337" y="112.666" width="39" height="199.598" transform="rotate(45 220.337 112.666)" fill="black" stroke="#FFFEFE" stroke-width="3"/>
  <rect x="78.5" y="79.5" width="39" height="578" rx="3.5" fill="black" stroke="#FFFEFE" stroke-width="3"/>
  <rect x="395.5" y="112.5" width="39" height="350" rx="3.5" transform="rotate(90 395.5 112.5)" fill="black" stroke="#FFFEFE" stroke-width="3"/>
  <rect x="342" y="153" width="10" height="74" fill="black"/>
  <rect x="341" y="329" width="5" height="131" class="mistake2"/>
  <rect x="346" y="331.19" width="5" height="100" transform="rotate(-39.6353 346 331.19)" class="mistake4"/>
  <rect x="341.796" y="329" width="5" height="100" transform="rotate(39.64 341.796 329)" class="mistake3"/>
  <rect x="346" y="463.19" width="5" height="100" transform="rotate(-39.6353 346 463.19)" class="mistake6"/>
  <rect x="341.796" y="460" width="5" height="100" transform="rotate(39.64 341.796 460)" class="mistake5"/>
  </svg>`;
}
