import './style.css'
import MainHeader from './components/mainHeader'
import TaskSections from './components/TaskSections'
import {defaultTasks} from './data/tasks'
import {projects} from './data/projects'
import TaskBoard from './components/taskBoard'

// Create the items in local Storage
if (!localStorage.tasks) {
    localStorage.setItem('tasks', JSON.stringify(defaultTasks))
}

if (!localStorage.projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}

// Header
const header = document.querySelector('.main-header')
// Add logo to header
header.appendChild(MainHeader())

// Side Nav Bar
const sideNav = document.querySelector('.task-nav')

// append tasks headers
sideNav.appendChild(TaskSections())

// Run the Task Board components
TaskBoard('default')