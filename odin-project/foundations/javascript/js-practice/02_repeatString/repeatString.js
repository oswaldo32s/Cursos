const repeatString = function(word, times) {
    const wordReceived = word
    let finalWord = ''
    if (word = '') {
        return ''
    }
    for (let i = 0; i < times; i++) {
        finalWord += wordReceived
    }
    return times >= 0 ? finalWord : 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
