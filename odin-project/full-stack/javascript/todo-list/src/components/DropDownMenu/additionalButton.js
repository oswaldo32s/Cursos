import newElement from "../../functions/newElement"
import { newIcon } from "../../functions/newIcon"


export default function additionalButton(textContent, IconPng) {
  const button = newElement('button', '', ['additional-btn'])
  const span = newElement('span', textContent)
  const Icon = newIcon(IconPng, 'aditional button Icon', 'additional-icon')

  button.appendChild(span)
  button.appendChild(Icon)
  
  return button
}