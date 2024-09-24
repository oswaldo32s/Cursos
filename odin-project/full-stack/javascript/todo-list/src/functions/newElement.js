export function newElement(elementType, textContent, classes = []) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  
  if (Array.isArray(classes)) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }

  return element;
}
