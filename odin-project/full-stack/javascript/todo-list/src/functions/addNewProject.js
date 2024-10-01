import dropDownMenu from "../components/DropDownMenu/dropDownMenu"

class Project {
  constructor(projectID, projectName) {
    this.projectID = projectID
    this.projectName = projectName
  }
}
let currentProjectID = 4

export default function addNewProject(e) {
  const dropDownMenuElement = document.querySelector('.dropdown-menu')
  e.preventDefault()
  const projectInput = document.querySelector('.new-project-input')
  const inputName = projectInput.value
  const newProject = new Project(currentProjectID, inputName)

  if(inputName.length > 3) {
    pushToProject(newProject)
    projectInput.value = ''

    currentProjectID++
    dropDownMenuElement.innerHTML = ''
    dropDownMenuElement.appendChild(dropDownMenu(JSON.parse(localStorage.projects), false))
    console.log(currentProjectID)
  } else {
    alert('Project name needs to have more than 3 letters')
  }

  function pushToProject(object) {
    const Storage = JSON.parse(localStorage.getItem('projects'))
    Storage.push(object)
    localStorage.setItem('projects', JSON.stringify(Storage))
  }
}