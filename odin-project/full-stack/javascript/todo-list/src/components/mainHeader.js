import { newElement } from "../functions/newElement"
import sunPNG from '../assets/icons/sun.png'
import moonPNG from '../assets/icons/moon.png'
import todoPNG from '../assets/icons/todo-list.png'
import { newIcon } from "../functions/newIcon"
import toggleTheme from "../functions/toggleTheme"

export default function MainHeader() {
  const header = newElement('header', '', ['main-header'])

  // TITLE SECTION
  const titleSection = newElement('section', '', ['title-section'])
  const taskIcon = newIcon(todoPNG, 'to do list Icon', 'todo-icon')
  const titleElement = newElement('h1', 'To Do List', ['main-title'])

  titleSection.appendChild(taskIcon)
  titleSection.appendChild(titleElement)


  // CHANGE THEME SECTION

  const themeSection = newElement('section', '', ['theme-section'])

  const lightBtn = newElement('button', '', ['small-button', 'light-btn'])
  const lightIcon = newIcon(sunPNG, 'Light theme icon', 'light-theme')
  lightBtn.appendChild(lightIcon)
  lightBtn.addEventListener('click', toggleTheme)

  const darkBtn = newElement('button', '', ['small-button', 'dark-btn', 'hidden'])
  const darkIcon = newIcon(moonPNG, 'Dark theme icon', 'dark-theme')
  darkBtn.appendChild(darkIcon)
  darkBtn.addEventListener('click', toggleTheme)

  themeSection.appendChild(lightBtn)
  themeSection.appendChild(darkBtn)

  // APEND TO HEADER
  header.appendChild(titleSection)
  header.appendChild(themeSection)

  return header
}