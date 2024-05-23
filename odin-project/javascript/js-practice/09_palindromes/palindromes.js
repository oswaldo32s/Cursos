const palindromes = function (palindrome) {
    const cleanWord = palindrome.split('')
    .filter(letter => letter != '!'&& letter != ',' && letter != '.' && letter != ' ')
    .map(letter => letter.toLowerCase())
    .join("")
    const backwardWord = palindrome.split('')
    .filter(letter => letter != '!'&& letter != ',' && letter != '.' && letter != ' ')
    .map(letter => letter.toLowerCase())
    .reverse()
    .join("")
    console.log(cleanWord, backwardWord)
    return backwardWord == cleanWord
    
};

// Do not edit below this line
module.exports = palindromes;
