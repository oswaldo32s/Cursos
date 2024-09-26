import newElement from "../../functions/newElement";
import sideNavButton from "./sideNavButton";
import projectPNG from '../../assets/icons/project.png'
import arrowPNG from '../../assets/icons/arrow.png'
import rocketPNG from '../../assets/icons/rocket.png'
import dotsPNG from '../../assets/icons/dots.png'
import addPNG from '../../assets/icons/add.png'

export default function dropDownMenu(hiddenMenuListObject) {
  const dropDownMenuSection = newElement('section', '', ['dd-menu'])
  const dropDownMenuHiddenSection = newElement('ul', '', ['dd-hidden-menu', 'hidden'])
  const button = sideNavButton(projectPNG, 'project dropDown Button', 'Custom Projects', undefined, arrowPNG, 'arrow image to show dropdown', 'dropdown-arrow')
  const addNewProject = sideNavButton(addPNG, 'Add New Project Button', 'Add New Project')

  button.addEventListener('click', () => {
    const hiddenMenu = document.querySelector('.dd-hidden-menu')
    hiddenMenu.classList.toggle('hidden')

    const arrow = document.querySelector('.dropdown-arrow')
    arrow.classList.toggle('rotate-arrow')
  })

  hiddenMenuListObject.forEach(object => {
    const hiddenLi = newElement('li', '', ['hidden-li', object.projectID])
    const hiddenButton = sideNavButton(rocketPNG, `${object.projectName} Icon`, object.projectName, undefined, dotsPNG, 'additional menu button', 'three-dots')
    
    hiddenLi.appendChild(hiddenButton)
    dropDownMenuHiddenSection.appendChild(hiddenLi)
    
    hiddenButton.children[1].addEventListener('click', () => {console.log('hola')})

  });

  dropDownMenuHiddenSection.appendChild(addNewProject)
  dropDownMenuSection.appendChild(button)
  dropDownMenuSection.appendChild(dropDownMenuHiddenSection)

  return dropDownMenuSection
}