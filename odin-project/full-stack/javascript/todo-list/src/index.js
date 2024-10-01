import './style.css';
import newElement from './functions/newElement';
import MainHeader from './components/mainHeader';
import mainPage from './components/mainPage';
import { projectData } from './assets/data/projects';
import { projectDetails } from './assets/data/projectDetails';

// get a big component as my website
function myApp() {
  const website = newElement('div', '', ['main-page'])

  startLocalStorage()
  website.appendChild(MainHeader())
  website.appendChild(mainPage())

  return website
}

document.body.appendChild(myApp());

function startLocalStorage() {

  // Create Projects
  if(!localStorage.projects) {
    localStorage.setItem('projects', JSON.stringify(projectData))
  }
  
  // Create Project Tasks
  if(!localStorage.tasks) {
    localStorage.setItem('tasks', JSON.stringify(projectDetails))
  }
}