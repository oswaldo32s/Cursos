function overviewCard(title, description) {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    const cardTitle = document.createElement('h3')
    const cardDescription = document.createElement('p')

    cardTitle.textContent = title
    cardTitle.classList.add('card-title')
    cardDescription.textContent = description
    cardDescription.classList.add('card-description')

    cardContainer.appendChild(cardTitle)
    cardContainer.appendChild(cardDescription)

    return cardContainer
}

export default overviewCard