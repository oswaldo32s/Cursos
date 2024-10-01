import newElement from "../../functions/newElement";
import sideNavButton from "../sideNav/sideNavButton";
import projectPNG from '../../assets/icons/project.png'
import arrowPNG from '../../assets/icons/arrow.png'
import rocketPNG from '../../assets/icons/rocket.png'
import dotsPNG from '../../assets/icons/dots.png'
import addPNG from '../../assets/icons/add.png'
import { handleAdditionalMenu, handleDropDown } from "./handleFunctions";
import handleNewProject from "./addNewProject";

export default function dropDownMenu(hiddenMenuListObject, isHidden = true) {
  // Create containers
  const dropDownMenuSection = newElement('section', '', ['dd-menu'])
  const dropDownMenuHiddenSection = newElement('ul', '', ['dd-hidden-menu'])
  if(isHidden) {
    dropDownMenuHiddenSection.classList.add('hidden')
  }

  // Create Buttons and Set the index
  const DropDownButton = sideNavButton(projectPNG, 'project dropDown Button', 'Custom Projects', undefined, arrowPNG, 'arrow image to show dropdown', 'dropdown-arrow')
  const addNewProject = sideNavButton(addPNG, 'Add New Project Button', 'Add New Project')
  let indexBtn = 0

  // Hidde and Unhide DropDown Menu
  DropDownButton.addEventListener('click', handleDropDown)
  addNewProject.addEventListener('click', handleNewProject)

  // Insert all project under the drop down menu
  hiddenMenuListObject.forEach(object => {
    const hiddenLi = newElement('li', '', ['hidden-li', object.projectID, indexBtn])
    const hiddenButton = sideNavButton(rocketPNG, `${object.projectName} Icon`, object.projectName, undefined, dotsPNG, 'additional menu button', 'three-dots')

    indexBtn++
    hiddenLi.appendChild(hiddenButton)
    dropDownMenuHiddenSection.appendChild(hiddenLi)
    
    const hiddenButtonDots = hiddenButton.children[1]
    hiddenButtonDots.addEventListener('click', handleAdditionalMenu)

  });

  dropDownMenuHiddenSection.appendChild(addNewProject)
  dropDownMenuSection.appendChild(DropDownButton)
  dropDownMenuSection.appendChild(dropDownMenuHiddenSection)
  indexBtn = 0
  
  return dropDownMenuSection
}