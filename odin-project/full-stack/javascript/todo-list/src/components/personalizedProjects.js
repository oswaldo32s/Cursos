import AddImg from '../img/add.png'
import ProjectImg from '../img/project-icon.png'
import TaskBoard from './taskBoard'

export default function PersonalizedProjectNav() {
    const personalizedProjectContainer = document.createElement('div')
    personalizedProjectContainer.classList.add('personalized-projects')
    personalizedProjectContainer.classList.add('hidden')

    const addNewProjectButton = document.createElement('button')
    const addNewProjectText = document.createElement('span')

    // Create Img to add new projects
    const AddImgBtn = new Image()
    AddImgBtn.src = AddImg
    AddImgBtn.classList.add('project-img')

    addNewProjectButton.classList.add('project-btn')

    // Add text to button
    addNewProjectText.textContent = 'New Project'

    // Append Img and text to button
    addNewProjectButton.appendChild(AddImgBtn)
    addNewProjectButton.appendChild(addNewProjectText)

    JSON.parse(localStorage.projects).forEach(project => {
        const projectContainer = document.createElement('button')
        projectContainer.classList.add('project-btn')

        const defaultProjectIcon = new Image()
        defaultProjectIcon.src = ProjectImg
        defaultProjectIcon.classList.add('project-img')

        const projectText = document.createElement('span')
        projectText.textContent = project.projectName

        console.log(project.projectName)
        projectContainer.appendChild(defaultProjectIcon)
        projectContainer.appendChild(projectText)
        projectContainer.addEventListener('click', () => TaskBoard(project.projectName))
        personalizedProjectContainer.appendChild(projectContainer)

    });

    // Append elements to the container
    personalizedProjectContainer.appendChild(addNewProjectButton)

    return personalizedProjectContainer
}