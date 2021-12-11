// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var sentenceLower = sentence.toLowerCase();
    var sentenceArray = sentenceLower.split('');
    var alphabetArray = alphabet.split('');
    var result = [];

    for (var i = 0; i < sentenceArray.length; i++) {
        for (var j = 0; j < alphabetArray.length; j++) {
            if (sentenceArray[i] === alphabetArray[j]) {
                result.push(sentenceArray[i]);
            }
        }
    }

    if (result.length === 26) {
        return true;
    } else {
        return false;
    }
}