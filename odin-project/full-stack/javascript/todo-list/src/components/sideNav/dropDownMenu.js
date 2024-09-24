import newElement from "../../functions/newElement";
import sideNavButton from "./sideNavButton";
import projectPNG from '../../assets/icons/project.png'
import arrowPNG from '../../assets/icons/arrow.png'
import rocketPNG from '../../assets/icons/rocket.png'
import dotsPNG from '../../assets/icons/dots.png'
import { newIcon } from "../../functions/newIcon";

export default function dropDownMenu(hiddenMenuListObject) {
  const dropDownMenuSection = newElement('section', '', ['dd-menu'])
  const dropDownMenuHiddenSection = newElement('ul', '', ['dd-hidden-menu', 'hidden'])
  const button = sideNavButton(projectPNG, 'project dropDown Button', 'Custom Projects', undefined, arrowPNG, 'arrow image to show dropdown', 'dropdown-arrow')

  button.addEventListener('click', () => {
    const hiddenMenu = document.querySelector('.dd-hidden-menu')
    hiddenMenu.classList.toggle('hidden')

    const arrow = document.querySelector('.dropdown-arrow')
    arrow.classList.toggle('rotate-arrow')
  })

  hiddenMenuListObject.forEach(object => {
    const hiddenLi = newElement('li', '', ['hidden-li', object.projectID])
    const hiddenButton = sideNavButton(rocketPNG, `${object.projectName} Icon`, object.projectName)
    hiddenLi.appendChild(hiddenButton)
    dropDownMenuHiddenSection.appendChild(hiddenLi)
  });

  dropDownMenuSection.appendChild(button)
  dropDownMenuSection.appendChild(dropDownMenuHiddenSection)

  return dropDownMenuSection
}