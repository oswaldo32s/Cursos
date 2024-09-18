import TaskSections from "../components/TaskSections";
import addNewProject from "./addNewProject";

// Function to handle the project entry button click
export function handleProjectEnter(event) {
    event.preventDefault();
    const ProjectContainer = document.querySelector('.new-project-container');
    const newProjectName = document.querySelector('#newProjectName');
    
    addNewProject(newProjectName.value);
    ProjectContainer.classList.toggle('hidden');
    newProjectName.value = '';
    TaskSections();
}
