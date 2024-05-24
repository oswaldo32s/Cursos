const sumAll = function(start, end) {
    let finalSum = 0
    let finalArray = []
    let startOfArray = start
    let endOfArray = end
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR'
    }
    if (start > end) {
        startOfArray = end
        endOfArray = start
    }
    finalArray = [...Array(endOfArray - startOfArray + 1).keys()].map(i => i + startOfArray)
    finalArray.forEach(num => finalSum += num)
    return finalSum
};

console.log(sumAll(3,1))
// Do not edit below this line
module.exports = sumAll;
