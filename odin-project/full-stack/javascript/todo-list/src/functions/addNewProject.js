export default function addNewProject(projectName) {
    const currentProjects = JSON.parse(localStorage.projects)
    currentProjects.push({'projectName' : projectName})
    localStorage.setItem('projects', JSON.stringify(currentProjects))
}