import newElement from "../../functions/newElement";
import sideNavButton from "./sideNavButton";
import inboxPNG from '../../assets/icons/inbox.png'
import todayPNG from '../../assets/icons/today.png'
import projectPNG from '../../assets/icons/project.png'
import dropDownMenu from "./dropDownMenu";
import { projectData } from "../../assets/data/projects";


export default function projectNav() {
  const tasks = newElement('nav', '', ['project-nav'])
  const ul = newElement('ul', '', ['project-ul'])
  const allProjectLi = newElement('li', '', ['project-li'])
  const TodayLi = newElement('li', '', ['project-li'])
  const projectsLi = newElement('li', '', ['project-li'])

  allProjectLi.appendChild(sideNavButton(inboxPNG, 'All projects Button', 'All Projects'))
  TodayLi.appendChild(sideNavButton(todayPNG, "Today's button", 'Today'))
  projectsLi.appendChild(dropDownMenu(projectData))

  ul.appendChild(allProjectLi)
  ul.appendChild(TodayLi)
  ul.appendChild(projectsLi)

  tasks.appendChild(ul)

  return tasks
}