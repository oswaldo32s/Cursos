import overviewCard from "./overview"

function HomePage() {
    // Erase everything from main page, this will help us when using nav buttons
    const mainElement = document.querySelector('#content')
    mainElement.innerHTML = ''

    //Create banner and add img
    const banner = document.createElement('div')
    banner.classList.add('banner')

    // Add text to the banner
    const bannerText = document.createElement('h1')
    bannerText.textContent = "Paty's Burgers"
    bannerText.classList.add('banner-text')
    banner.appendChild(bannerText)

    // Append banner to home site
    mainElement.appendChild(banner)

    // Create welcome message and append it
    const welcomeMessage = document.createElement('h3')
    welcomeMessage.textContent = "Descubre el sabor auténtico de las mejores hamburguesas de Guadalajara, Jalisco. En Paty's Burgers, cada mordida es una experiencia única, hecha con ingredientes frescos y de la más alta calidad. Desde nuestras jugosas carnes asadas al punto perfecto hasta nuestras crujientes papas fritas, aquí encontrarás un paraíso para los amantes de las hamburguesas."
    welcomeMessage.classList.add('welcome-message')
    mainElement.appendChild(welcomeMessage)

    // Create overview Cards sections
    const overviewContainer = document.createElement('div')
    overviewContainer.classList.add('overview-container')
    mainElement.appendChild(overviewContainer)

    // Add the cards to the home page
    overviewContainer.appendChild(overviewCard('¡Explora Nuestro Menú!', 'Tienes antojo de algo delicioso? Dale un vistazo a nuestras irresistibles opciones. Desde las clásicas hamburguesas que amas hasta nuestras creaciones exclusivas, cada platillo en nuestro menú está hecho para satisfacer tu apetito.'))
    overviewContainer.appendChild(overviewCard('Conócenos Mejor', "Descubre la historia y la pasión detrás de Paty's Burgers. Aprende cómo nacimos, nuestra misión, y por qué cada hamburguesa es una obra maestra."))
}

export default HomePage