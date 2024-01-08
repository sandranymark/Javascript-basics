'use strict';

console.log('Hello, World!');

// VG uppgiften

let startWord = 'FOUR';
let endWord = 'FIVE';
let isInputApproved = false;
let counter = 0;
let dictionary = ['FOUR', 'FOUL', 'FOOL', 'FOOT', 'FORT', 'FIRE', 'FIVE'];

while (startWord !== endWord) {
    while (!isInputApproved) {
        let newWord = window.prompt('Nuvarande ord: ' + startWord +
            '. Antal gissningar: ' + counter +
            '. Vänligen ange det nya ordet!');


        if (newWord.length !== startWord.length) {
            window.alert('Ditt ord måste innehålla lika många bokstäver som det förra ordet!');
        } else if (!dictionary.includes(newWord)) {
            window.alert('Ditt ord finns inte i ordlistan, pucko!');
            console.log(newWord);
        } else if (!isOneLetterApart(newWord, startWord)) {
            window.alert('Du får bara byta ut en bokstav i taget!');
        } else {
            isInputApproved = true;
            startWord = newWord;
            counter++;
        }
    }
    isInputApproved = false;
}

function isOneLetterApart(newWord, startWord) {
    let diffCount = 0;

    for (let i = 0; i < startWord.length; i++) {
        if (newWord[i] !== startWord[i]) {
            diffCount++;
            //Diffcount = diffCount + 1;
            //Diffcount += 1;
        }
    }
    return diffCount === 1; // Sant om diffCount är 1, annars falskt
}

console.log('GRATTIS du vann! WOHO! ');

