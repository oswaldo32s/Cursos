const reverseString = function(word) {
    let finalWord = ''
    const receivedWord = word
    let wordToArray = receivedWord.split('')
    for (let i = wordToArray.length -1; i >=0; i--) {
        finalWord += wordToArray[i]
    }
    return finalWord
};

// Do not edit below this line
module.exports = reverseString;
