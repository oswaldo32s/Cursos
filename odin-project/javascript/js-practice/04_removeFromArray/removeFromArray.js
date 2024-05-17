const removeFromArray = function(array, ...values) {
    return array.filter(item => !values.includes(item));
    
};

removeFromArray([1, 2, 2, 3], 2)

// Do not edit below this line
module.exports = removeFromArray;
