import AboutCard from "./aboutCard"

function AboutPage() {
    // Erase everything from main page, this will help us when using nav buttons
    const mainElement = document.querySelector('#content')
    mainElement.innerHTML = ''

    // Create the container that will hold all the menu
    const AboutUsContainer = document.createElement('div')
    AboutUsContainer.classList.add('aboutUs-container')

    const AboutUsCardContainer = document.createElement('div')
    AboutUsCardContainer.classList.add('aboutUs-card-container')

    // Create the menu Title
    const AboutTitle = document.createElement('h1')
    AboutTitle.textContent = "About Us"
    AboutTitle.classList.add('AboutUs-title')
    AboutUsContainer.appendChild(AboutTitle)

    AboutUsCardContainer.appendChild(AboutCard('Paty Valle', 'Jefa', '(33) 1234 - 4213', 'patyValle@gmail.com'))
    AboutUsCardContainer.appendChild(AboutCard('Oswaldo Gonzalez', 'Cocinero', '(33) 1740 - 8022', 'oswaldo32gonzalez@gmail.com'))
    AboutUsCardContainer.appendChild(AboutCard('Jorge Estrada', 'Mesero', '(33) 4352 - 9823', 'jorgeElMesero@gmail.com'))

    AboutUsContainer.appendChild(AboutUsCardContainer)

    mainElement.appendChild(AboutUsContainer)
}

export default AboutPage