//FUNCTION BOOTCAMPT

//UPPFIFT 1

/*Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.
Anropa funktion och console.log svaret. Tips! Du kan skriva .
length på en variabel som är en sträng för att få längden. */

// function strinLength(str) {
//     return str.length;
// }

// console.log(strinLength("Länden på denna sträng är 32 tecken lång"));

//-------------------------------------------------------------

//UPPGIFT 2
/*
Skriv en funktion som plockar ut året från en sträng i datumformat.
Använd substring(startIndex, endIndex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring.
 Funktionen ska ta en parameter, som ska vara en sträng.
 Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.
Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.
*/



// function year(dateString) {
//     let yearString = dateString.substring(0, 4);
//     let yearNumber = Number(yearString);
//     return yearNumber;
// }
// console.log(year('2019-10-14'));
// window.alert(year('2019-10-14'));


//-------------------------------------------------------------

//UPPGIFT 3

/* Skriv en funktion som tar tre parametrar.
De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'.
Utför beräkningen och returnera summan och skriv ut.
Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då)
och varje operation ska vara sin egen funktion.
Tips! Här kan typeof vara bra att använda
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 Grunden till denna övninga, samt intruktioner finner du i mappen miniräknare.
*/


// function miniräknare(numberOne, text, numberTwo) {
//     if (typeof numberOne === 'number' && typeof numberTwo === 'number' && typeof text === 'string') {
//         if (text === '+') {
//             return numberOne + numberTwo;
//         } else if (text === '-') {
//             return numberOne - numberTwo;
//         } else if (text === '*') {
//             return numberOne * numberTwo;
//         } else if (text === '/') {
//             return numberOne / numberTwo;
//         } else {
//             return 'Du måste skriva in en text som är +, -, * eller /';
//         }
//     } else {
//         return 'Du måste skriva in siffror';
//     }
// }
// window.alert(miniräknare(Number(prompt('Skriv in ett tal')), prompt('Skriv in +, -, * eller /'), Number(prompt('Skriv in ett tal'))))


//-------------------------------------------------------------






let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
