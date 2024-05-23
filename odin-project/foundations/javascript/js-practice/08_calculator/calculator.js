const add = function(a, b) {
	if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b
  } 
  return 0
};

const subtract = function(a, b) {
	if (Number.isInteger(a) && Number.isInteger(b)) {
    return a - b
  }
};

const sum = function(array) {
  if (array.length > 0) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }
	return 0
};

const multiply = function(array) {
  if (array.length > 0) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
  }
	return 0
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let total = 1
	for (let i = 1; i <= a; i++) {
    total *= i
  }

  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

console.log(add([]))