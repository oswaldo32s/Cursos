import newElement from "../../functions/newElement";
import { newIcon } from "../../functions/newIcon";


export default function sideNavButton(iconPNG, alt, spanText, addClass = [], lastIcon, lIconDescription, lastIconClass) {
  const sideNavButtonSection = newElement('section', '', ['side-nav-btn-section'])
  const button = newElement('button', '', ['side-nav-btn'])
  const rightButton = newElement('button', '', ['right-button'])

  if (Array.isArray(addClass)) {
    addClass.forEach((className) => {
      button.classList.add(className);
    });
  }

  const icon = newIcon(iconPNG, alt, 'side-nav-icon')
  const text = newElement('span', spanText, ['side-nav-text'])

  button.appendChild(icon)
  button.appendChild(text)
  sideNavButtonSection.appendChild(button)

  if (lastIcon) {
    const endIcon = newIcon(lastIcon, lIconDescription, lastIconClass)
    rightButton.appendChild(endIcon)
  }

  sideNavButtonSection.appendChild(rightButton)

  return sideNavButtonSection
}