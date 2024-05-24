const body = document.querySelector('body')

const pElement = document.createElement('p')
const h3Element = document.createElement('h3')
const div = document.createElement('div')
const h1 = document.createElement('h1')
const secondPElement = document.createElement('p')
secondPElement.classList.add('second')

const secondp = document.querySelector('.second')
pElement.textContent = "Hey I'm red!"
h3Element.textContent = "I'm a blue h3"
secondPElement.textContent = 'ME TOO!'
h1.textContent = "I'm in a div"
pElement.style.color = 'red'
h3Element.style.color = 'blue'
div.style.border = '1px solid black'
div.style.backgroundColor = 'pink'

body.appendChild(pElement)
body.appendChild(h3Element)
div.appendChild(h1)
div.appendChild(secondPElement)

body.appendChild(div)

function alertFunction() {
    alert("holaaaa")
}

div.addEventListener('click', alertFunction)
div.addEventListener('click', function (e) {
    console.log(e.target.style.background = 'blue')
})