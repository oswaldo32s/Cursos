import addNewProject from "../../functions/addNewProject"
import newElement from "../../functions/newElement"
import closePNG from '../../assets/icons/close.png'
import { newIcon } from "../../functions/newIcon"
import { closestTo } from "date-fns"

export default function handleNewProject() {
  const page = document.querySelector('.nav-section')
  const newProjectSection = newElement('section', '', ['new-project-section'])
  const title = newElement('h3', 'Add New Project', ['add-new-project-title'])
  const formContainer = newElement('form', '', ['new-project-form'])
  const formBox = newElement('div', '', ['form-box'])
  const formLaben = newElement('label', 'Project Name', ['form-label'])
  const formInput = newElement('input', '', ['form-input', 'new-project-input'])
  const formButton = newElement('button', 'Submit', ['form-btn'])
  const DeleteButton = newElement('button', '', ['delete-button'])
  const deleteIcon = newIcon(closePNG, 'close icon', 'close-icon')

  DeleteButton.appendChild(deleteIcon)
  DeleteButton.addEventListener('click', () => {
    newProjectSection.remove()
  })

  // Prevent multiple additional menus from being added
  const existingContainer = document.querySelector('.new-project-section');
  if (existingContainer) {
    existingContainer.remove();
  }

  formBox.appendChild(formLaben)
  formBox.appendChild(formInput)
  formContainer.appendChild(formBox)
  formContainer.appendChild(formButton)

  formButton.addEventListener('click', addNewProject)

  newProjectSection.appendChild(title)
  newProjectSection.appendChild(formContainer)
  newProjectSection.appendChild(DeleteButton)
  
  page.appendChild(newProjectSection)
}