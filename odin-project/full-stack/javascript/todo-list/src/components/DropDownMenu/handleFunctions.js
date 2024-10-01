import newElement from "../../functions/newElement";
import editPNG from '../../assets/icons/edit.png'
import trashPNG from '../../assets/icons/trash.png'
import additionalButton from "./additionalButton";
import dropDownMenu from "./dropDownMenu";

export function handleAdditionalMenu(e){
  // Create the element that will hold the additional menu
  const page = document.querySelector('body')
  const location = e.target.parentElement.parentElement.parentElement
  const firstTarget = e.target

  // Prevent multiple additional menus from being added
  const existingMenu = document.querySelector('.additional-menu');
  if (existingMenu) {
      existingMenu.remove();
  }
  const componentContainer = newElement('section','',['additional-menu'])
  const editButton = additionalButton('Edit', editPNG)
  const DeleteButton = additionalButton('Remove', trashPNG)

  DeleteButton.addEventListener('click', () => {
    const dropDownMenuElement = document.querySelector('.dropdown-menu')
    const currentProjects = JSON.parse(localStorage.projects)
    
    // get the index of the clicked element and remove it form the array
    currentProjects.splice(currentProjects.findIndex((item) => item == location.classList[1]), 1)

    localStorage.setItem('projects', JSON.stringify(currentProjects))
    dropDownMenuElement.innerHTML = ''
    dropDownMenuElement.appendChild(dropDownMenu(JSON.parse(localStorage.projects), false))
  })

  componentContainer.appendChild(editButton)
  componentContainer.appendChild(DeleteButton)

  location.appendChild(componentContainer)
    // Add event listener to the rest of the web, if the user clicks outside the component delete from the DOM
    const handleClickOutside = (e) => {
      if (!componentContainer.contains(e.target) && e.target !== firstTarget) {
          componentContainer.remove();
          page.removeEventListener('click', handleClickOutside);
      }
  };

  setTimeout(() => {
      page.addEventListener('click', handleClickOutside);
  }, 0);

}

export function handleDropDown() {
  const hiddenMenu = document.querySelector('.dd-hidden-menu')
  hiddenMenu.classList.toggle('hidden')

  const arrow = document.querySelector('.dropdown-arrow')
  arrow.classList.toggle('rotate-arrow')
}