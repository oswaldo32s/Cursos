function overviewCard(title, description, btnMgs) {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    const cardTitle = document.createElement('h3')
    const cardDescription = document.createElement('p')
    const cardButton = document.createElement('button')

    cardTitle.textContent = title
    cardTitle.classList.add('card-title')
    cardDescription.textContent = description
    cardDescription.classList.add('card-description')
    cardButton.textContent = btnMgs
    cardButton.classList.add('card-btn')

    cardContainer.appendChild(cardTitle)
    cardContainer.appendChild(cardDescription)
    cardContainer.appendChild(cardButton)

    return cardContainer
}

export default overviewCard