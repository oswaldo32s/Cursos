import { newElement } from "../../functions/newElement";
import sideNavButton from "./sideNavButton";
import inboxPNG from '../../assets/icons/inbox.png'
import todayPNG from '../../assets/icons/today.png'


export default function projectNav() {
  const  tasks = newElement('nav', '', ['project-nav'])
  
  const ul = newElement('ul', '', 'project-ul')

  ul.appendChild(sideNavButton(inboxPNG, 'All projects Button', 'All Projects'))
  ul.appendChild(sideNavButton(todayPNG, "Today's button", 'Today'))

  tasks.appendChild(ul)

  return tasks
}