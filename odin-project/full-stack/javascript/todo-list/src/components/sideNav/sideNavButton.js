import newElement from "../../functions/newElement";
import { newIcon } from "../../functions/newIcon";


export default function sideNavButton(iconPNG, alt, spanText, addClass = [], lastIcon, lIconDescription, lastIconClass) {
  const button = newElement('button', '', ['side-nav-btn'])

  if (Array.isArray(addClass)) {
    addClass.forEach((className) => {
      button.classList.add(className);
    });
  }

  const icon = newIcon(iconPNG, alt, 'side-nav-icon')
  const text = newElement('span', spanText, ['side-nav-text'])

  button.appendChild(icon)
  button.appendChild(text)

  if (lastIcon) {
    const endIcon = newIcon(lastIcon, lIconDescription, lastIconClass)
    button.appendChild(endIcon)
  }

  return button
}