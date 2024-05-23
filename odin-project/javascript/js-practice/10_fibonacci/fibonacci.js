const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS'
    } 
    let total = 1
    const currentArray = [1]
    for (let i = 1; i < number; i ++) {
        currentArray.push(total)
        total = currentArray[currentArray.length - 2] + currentArray[currentArray.length - 1]
    }
    return number == 0 ? 0 : currentArray[currentArray.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci('8'))