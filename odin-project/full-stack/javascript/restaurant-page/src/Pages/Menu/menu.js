import MenuCard from "./menuCard"
import MenuSection from "../../titleSection"

function MenuPage() {
    // Erase everything from main page, this will help us when using nav buttons
    const mainElement = document.querySelector('#content')
    mainElement.innerHTML = ''

    // Create the container that will hold all the menu
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    // Create the menu Title
    const menuTitle = document.createElement('h1')
    menuTitle.textContent = "Menu"
    menuTitle.classList.add('menu-title')
    menuContainer.appendChild(menuTitle)

    menuContainer.appendChild(MenuSection('Entrées'))
    menuContainer.appendChild(MenuCard('Grilled Chicken Caesar Salad', '$12.99', 'Fresh romaine lettuce topped with grilled chicken breast, shaved Parmesan, and house-made Caesar dressing.'))
    menuContainer.appendChild(MenuCard('Stuffed Mushrooms', '$9.99', 'Button mushrooms stuffed with a blend of cream cheese, garlic, and herbs, baked to golden perfection.'))
    menuContainer.appendChild(MenuCard('Spaghetti Carbonara', '$14.99', 'Classic Italian pasta dish with crispy pancetta, creamy egg sauce, and freshly grated Parmesan cheese.'))

    menuContainer.appendChild(MenuSection('Desserts'))
    menuContainer.appendChild(MenuCard('Chocolate Lava Cake', '$7.99', 'Rich chocolate cake with a molten chocolate center, served with a scoop of vanilla ice cream.'))
    menuContainer.appendChild(MenuCard('Tiramisu', '$6.99', 'Traditional Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.'))
    menuContainer.appendChild(MenuCard('Cheesecake with Berry Compote', '$8.49', 'Creamy cheesecake topped with a sweet and tangy berry compote.'))

    menuContainer.appendChild(MenuSection('Drinks'))
    menuContainer.appendChild(MenuCard('Mojito', '$8.99', 'Refreshing cocktail with white rum, fresh mint, lime juice, sugar, and a splash of soda water.'))
    menuContainer.appendChild(MenuCard('Lemonade', '$3.99', 'Freshly squeezed lemonade with a perfect balance of sweet and tart flavors.'))
    menuContainer.appendChild(MenuCard('Espresso', '$2.99', 'Strong, rich Italian coffee, brewed to perfection.'))

    mainElement.appendChild(menuContainer)
}

export default MenuPage