export function createNode(tag, classes, content) {
  const element = document.createElement(tag);
  if (classes.length > 0) {
    classes.forEach((item) => element.classList.add(item));
  }

  if (content) {
    element.innerText = content;
  }

  return element;
}
