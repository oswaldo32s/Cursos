import { newElement } from "../../functions/newElement";
import { newIcon } from "../../functions/newIcon";


export default function sideNavButton(iconPNG, alt, spanText) {
  const li = newElement('li', '', 'project-li')
  const button = newElement('button', '', ['nav-btn', 'side-nav-btn'])
  const icon = newIcon(iconPNG, alt, 'side-nav-icon')
  const text = newElement('span', spanText, ['side-nav-text'])

  button.appendChild(icon)
  button.appendChild(text)

  li.appendChild(button)

  return li
}