import Logo from './../img/todo-logo.png'

export default function MainHeader() {
    // Create Container and add clas
    const logoContainer = document.createElement('div')
    logoContainer.classList.add('logo-container')

    // Create img Element and add class
    const mainLogo = new Image()
    mainLogo.src = Logo
    mainLogo.classList.add('todo-logo')

    // Create logo text element, add class and text
    const logoText = document.createElement('h1')
    logoText.classList.add('logo-text')
    logoText.textContent = 'My To Do List'

    // Append to container
    logoContainer.appendChild(mainLogo)
    logoContainer.appendChild(logoText)

    // return img
    return logoContainer
}