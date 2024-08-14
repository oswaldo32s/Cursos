function MenuCard(menuObject, objectPrice, objectDescription) {


    // Create Containers
    const cardContainer = document.createElement('div')
    const cardTop = document.createElement('div')

    // Create all elements
    const menuName = document.createElement('h3')
    const menuPrice = document.createElement('h3')
    const menuDescription = document.createElement('p')

    // Add class for styling
    cardContainer.classList.add('menu-card-container')
    cardTop.classList.add('menu-cardTop')
    menuName.classList.add('menu-name')
    menuPrice.classList.add('menu-price')
    menuDescription.classList.add('menu-description')

    // Add Text
    menuName.textContent = menuObject
    menuPrice.textContent = objectPrice
    menuDescription.textContent = objectDescription

    // Append Name and price to cardTop
    cardTop.appendChild(menuName)
    cardTop.appendChild(menuPrice)

    // Append CardTop and menuDescription to cardContainer
    cardContainer.appendChild(cardTop)
    cardContainer.appendChild(menuDescription)

    return cardContainer
}

export default MenuCard