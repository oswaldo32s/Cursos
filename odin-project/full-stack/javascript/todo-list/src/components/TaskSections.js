import allTasksIcon from './../img/all-tasks.png'
import todayTaskIcon from './../img/sun.png'
import projectIcon from './../img/projects.png'
import TaskBoard from './taskBoard'
import PersonalizedProjectNav from './personalizedProjects'

export default function TaskSections() {

    const sideNav = document.querySelector('.task-nav')
    sideNav.innerHTML = ''

    //Create unordered list element
    const ul = document.createElement('ul')
    ul.classList.add('ul-nav')

    // Create images
    const allTasksIconElement = new Image()
    allTasksIconElement.src = allTasksIcon
    const todayTasksIconElement = new Image()
    todayTasksIconElement.src = todayTaskIcon
    const projectIconElement = new Image()
    projectIconElement.src = projectIcon

    // add Class to Images
    allTasksIconElement.classList.add('task-icon')
    todayTasksIconElement.classList.add('task-icon')
    projectIconElement.classList.add('task-icon')

    // Create li elements
    const allTasks = document.createElement('li')
    const todayTasks = document.createElement('li')
    const projects = document.createElement('li')

    // add Classes
    allTasks.classList.add('sidebar-nav')
    todayTasks.classList.add('sidebar-nav')
    projects.classList.add('sidebar-nav')

    // Create Button elements
    const allTasksButton = document.createElement('button')
    const todayTasksButton = document.createElement('button')
    const projectsButton = document.createElement('button')

    // add Classes
    allTasksButton.classList.add('sidebar-button')
    todayTasksButton.classList.add('sidebar-button')
    projectsButton.classList.add('sidebar-button')

    // Append Images to button
    allTasksButton.appendChild(allTasksIconElement)
    todayTasksButton.appendChild(todayTasksIconElement)
    projectsButton.appendChild(projectIconElement)

    // Create elements for text
    const allTaskText = document.createElement('span')
    const todaytaskText = document.createElement('span')
    const projectsText = document.createElement('span')

    // Add class to text
    allTaskText.classList.add('task-text')
    todaytaskText.classList.add('task-text')
    projectsText.classList.add('task-text')

    // Add text to Text elements
    allTaskText.textContent = 'All Tasks'
    todaytaskText.textContent = "Today's Tasks"
    projectsText.textContent = 'My Projects'

    // Append Text to button
    allTasksButton.appendChild(allTaskText)
    todayTasksButton.appendChild(todaytaskText)
    projectsButton.appendChild(projectsText)

    // Function to the button
    allTasksButton.addEventListener('click', () => TaskBoard('default'))
    todayTasksButton.addEventListener('click', () => TaskBoard('today'))
    projectsButton.addEventListener('click', () => document.querySelector('.personalized-projects').classList.toggle('hidden'))

    // Append Button to li
    allTasks.appendChild(allTasksButton)
    todayTasks.appendChild(todayTasksButton)
    projects.appendChild(projectsButton)
    projects.appendChild(PersonalizedProjectNav())

    // append li to ul
    ul.appendChild(allTasks)
    ul.appendChild(todayTasks)
    ul.appendChild(projects)

    sideNav.appendChild(ul)

}