import newElement from "../../functions/newElement";
import sideNavButton from "./sideNavButton";
import inboxPNG from '../../assets/icons/inbox.png'
import todayPNG from '../../assets/icons/today.png'
import dropDownMenu from "../DropDownMenu/dropDownMenu";


export default function projectNav() {
  const tasks = newElement('nav', '', ['project-nav'])
  const ul = newElement('ul', '', ['project-ul'])
  const allProjectLi = newElement('li', '', ['project-li'])
  const TodayLi = newElement('li', '', ['project-li'])
  const projectsLi = newElement('li', '', ['project-li', 'dropdown-menu'])


  allProjectLi.appendChild(sideNavButton(inboxPNG, 'All projects Button', 'All Projects'))
  TodayLi.appendChild(sideNavButton(todayPNG, "Today's button", 'Today'))
  projectsLi.appendChild(dropDownMenu(JSON.parse(localStorage.projects)))

  ul.appendChild(allProjectLi)
  ul.appendChild(TodayLi)
  ul.appendChild(projectsLi)

  tasks.appendChild(ul)

  return tasks
}