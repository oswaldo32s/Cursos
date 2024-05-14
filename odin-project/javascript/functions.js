function min(a,b) {
    return (a > b) ? b : a
}

function pow(value, power) {
    return value ** power
}

const prueba = function() {
    console.log('Esto corre si usas una Fuctions Expression')
}

console.log( `The min number is: ${min(10, 12)}`)
console.log( `The number to the power is: ${pow(3, 5)}`)
prueba()

let ask = (question, yes, no) => confirm(question) ? yes() : no()

ask('Do you agree?', function() {alert("You agreed.")},
                        function() {alert("You canceled the excecution.")})