// Set chaging variables
let color = 'black'
let gridSize = 16

// Get body
const body = document.querySelector('body')

// Create a button to ask user to change grid size
let button = document.createElement('button')
button.textContent = 'Want to change grid size? click here'
body.appendChild(button)
button = document.querySelector('button')

button.addEventListener('click', e => {
    const userSize = parseInt(prompt('input new grid from 1 to 100'))
    if (userSize > 100 || userSize < 0 || !Number.isInteger(userSize)) {
        gridSize = 16
        createGrid()
        window.alert(`Make sure your number is from 1 to 100.`)
    } else {
        gridSize = userSize
        createGrid()
    }
})

// Create container for Div and Add it to body
let container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)
container = document.querySelector('.container')

function createGrid() {
    if (document.querySelectorAll('.box-container')) {
        const boxContainers = document.querySelectorAll('.box-container')
        boxContainers.forEach(item => {
            container.removeChild(item)
        })
    }

    for (let i = 0; i < gridSize; i++) {
        container.appendChild(document.createElement('div')).classList.add(`box-container`)
    }
    const boxContainer = document.querySelectorAll('.box-container')
    boxContainer.forEach(container => {
        for (let i = 0; i < gridSize; i++) {
            container.appendChild(document.createElement('div')).classList.add(`box`)
        }
    })

    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.style.background = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
        })
    })
}

createGrid()


