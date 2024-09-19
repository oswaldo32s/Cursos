import { closestTo } from 'date-fns'
import CloseImg from '../img/close.png'
import addNewProject from '../functions/addNewProject'
import TaskSections from './TaskSections'
import { handleProjectEnter } from '../functions/handleProjectEnter'

export default function NewProject() {
    // Get the element to append to
    const taskSection = document.querySelector('body')

    // create the container (divs) for the card
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('new-project-container')
    projectContainer.classList.add('hidden')
    const closeContainer = document.createElement('div')
    closeContainer.classList.add('close-container')
    const newProjectContainer = document.createElement('div')
    newProjectContainer.classList.add('new-project-section')

    // Close Container
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn')
    const closeIcon = new Image()
    closeIcon.src = CloseImg
    closeIcon.classList.add('close-icon')
    closeBtn.addEventListener('click', () => {
        const newProjectCard = document.querySelector('.new-project-container')
        newProjectCard.classList.toggle('hidden')
    })
    closeBtn.appendChild(closeIcon)
    closeContainer.appendChild(closeBtn)

    // new Project Container
    const newProjectHeader = document.createElement('h3')
    newProjectHeader.classList.add('new-project-header')
    newProjectHeader.textContent = 'Add New Project'

    const formContainer = document.createElement('div')
    formContainer.classList.add('new-project-form-content')
    const newProjectForm = document.createElement('form')
    newProjectForm.classList.add('new-project-form')
    newProjectForm.setAttribute('id', 'NewProjectCard')
    const projectNameLabel = document.createElement('label')
    projectNameLabel.setAttribute('for', 'newProjectName')
    projectNameLabel.classList.add('label-project-name')
    projectNameLabel.textContent = 'Project Name'
    const projectNameInput = document.createElement('input')
    projectNameInput.setAttribute('type', 'text')
    projectNameInput.setAttribute('id', 'newProjectName')
    projectNameInput.setAttribute('minlength', '5')
    projectNameInput.setAttribute("maxlength", "20")
    const projectEnterBtn = document.createElement('button')
    projectEnterBtn.setAttribute('id', 'enterNewProject')
    projectEnterBtn.textContent = 'Create New Project'

    //
    projectEnterBtn.addEventListener('click', handleProjectEnter)

    formContainer.appendChild(projectNameLabel)
    formContainer.appendChild(projectNameInput)
    newProjectForm.appendChild(formContainer)
    newProjectForm.appendChild(projectEnterBtn)

    newProjectContainer.appendChild(newProjectHeader)
    newProjectContainer.appendChild(newProjectForm)

    // Append to main container
    projectContainer.appendChild(closeContainer)
    projectContainer.appendChild(newProjectContainer)


    taskSection.appendChild(projectContainer)
}