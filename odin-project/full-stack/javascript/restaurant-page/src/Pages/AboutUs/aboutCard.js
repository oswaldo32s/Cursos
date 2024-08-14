function AboutCard(name, position, phone, email) {

    // Create Elements
    const aboutCardContainer = document.createElement('div')
    const aboutCardName = document.createElement('h3')
    const aboutCardPosition = document.createElement('p')
    const aboutCardPhone = document.createElement('p')
    const aboutCardEmail = document.createElement('p')

    // Add Classes
    aboutCardContainer.classList.add('about-card-container')
    aboutCardName.classList.add('about-card-name')
    aboutCardPosition.classList.add('about-card-position')
    aboutCardPhone.classList.add('about-card-phone')
    aboutCardEmail.classList.add('about-card-email')

    // Add text
    aboutCardName.textContent = name
    aboutCardPosition.textContent = position
    aboutCardPhone.textContent = phone
    aboutCardEmail.textContent = email

    // Append to parents
    aboutCardContainer.appendChild(aboutCardName)
    aboutCardContainer.appendChild(aboutCardPosition)
    aboutCardContainer.appendChild(aboutCardPhone)
    aboutCardContainer.appendChild(aboutCardEmail)


    return aboutCardContainer
}

export default AboutCard