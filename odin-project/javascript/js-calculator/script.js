let firstNumber = 0
let operatorIndex = ''
let operator = ''
let secondNumber = 0
let display = ''
let isNegativeNumber = false
let result = document.createElement('p')


const clearbutton = document.querySelector('.clear')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const screen = document.querySelector('.screen')
const calculate = document.querySelector('.equal')

function add(a,b) {
    return (a) + (b)
}

function substract(a,b) {
    return (a) - (b)
}

function multiply(a,b) {
    return (a) * (b)
}

function divide(a,b) {
    if (b == 0) {
        return 'Cannot Divide by 0'
    }
    return (a) / (b)
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        display = add(firstNumber, secondNumber)
    } else if (operator == '-') {
        display = substract(firstNumber, secondNumber)
    } else if (operator == 'x') {
        display = multiply(firstNumber, secondNumber)
    } else if (operator == '/') {
        display = divide(firstNumber, secondNumber)
    }
    return 0
}

function getValues() {
    if (display[0] == '-' && display.length == 1) {
        isNegativeNumber = true
        display = ""
        // .findLastIndex(value => (value == '-' || value =='+' || value =='x' || value =='/'))
    } else if (display[0] == '-' && display.length > 1) {
        isNegativeNumber = true
        display = display.slice(1)
    } else {
        operatorIndex = display.split('').findLastIndex(value => (value == '-' || value =='+' || value =='x' || value =='/')) == -1 ? '' : display.split('').findLastIndex(value => (value == '-' || value =='+' || value =='x' || value =='/'))
        operator = operatorIndex != '' ? display[operatorIndex] : ''
        firstNumber = operator != '' ? display.split(operator)[0] : undefined
        secondNumber = operator != '' ? display.split(operator)[1] : undefined
    }

}

function updateScreen() {
    result.textContent = display
    screen.appendChild(result)
}

// EQUAL BUTTON
calculate.addEventListener('click', () => {
    if(isNegativeNumber == true) {
        firstNumber -= firstNumber * 2
        console.log(firstNumber, secondNumber)
        operate(operator, parseInt(firstNumber), parseInt(secondNumber))
        isNegativeNumber = false
        updateScreen()
    }
    operate(operator, parseInt(firstNumber), parseInt(secondNumber))
    updateScreen()
})

// CLEAR BUTTON
clearbutton.addEventListener('click', () => {
    display = ""
    isNegativeNumber = false
    updateScreen()
})

// NUMBERS
numbers.forEach(number => number.addEventListener('click', (e) => {
    display += e.target.value
    getValues()
    updateScreen()
}))

// OPERATORS
operators.forEach(singleOperator => singleOperator.addEventListener('click', (e) => {
    if(operator != '') {
        if(isNegativeNumber == true) {
            firstNumber -= firstNumber * 2
            operate(operator, parseInt(firstNumber), parseInt(secondNumber))
            isNegativeNumber = false
            updateScreen()
        }
        operate(operator, parseInt(firstNumber), parseInt(secondNumber))
        updateScreen()
    }
    display += e.target.value
    updateScreen()
    getValues()

}))


