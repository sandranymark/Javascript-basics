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

//UPPGIFT 5

/*
Once upon a time, there was a little girl named Goldilocks.
She went for a walk in the forest.Pretty soon, she came upon a house.
She knocked and, when no one answered, she walked right in.

At the table in the kitchen, there were three bowls of porridge.
Goldilocks was hungry.She tasted the porridge from the first bowl.

"This porridge is too hot!" she exclaimed.

    So, she tasted the porridge from the second bowl.

"This porridge is too cold," she said.

    So, she tasted the last bowl of porridge.

"Ahhh, this porridge is just right," she said happily and she ate it all up.

After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired.So, 
she walked into the living room where she saw three chairs.Goldilocks sat in the first chair to rest.

"This chair is too big!" she exclaimed.

So she sat in the second chair.

"This chair is too big, too!" she whined.

So she tried the last and smallest chair.

"Ahhh, this chair is just right," she sighed.But just as she settled down into the chair to rest, 
it broke into pieces!

Goldilocks and the Three Bears: sleeping - goldilocksGoldilocks was very tired by this time, 
she went upstairs to the bedroom.She lay down in the first bed, but it was too hard.
Then she lay in the second bed, but it was too soft.Then she lay down in the third bed and it was just right.
Goldilocks fell asleep.

As she was sleeping, the three bears came home.

"Someone's been eating my porridge," growled the Papa bear.

"Someone's been eating my porridge," said the Mama bear.

"Someone's been eating my porridge and they ate it all up!" cried the Baby bear.

"Someone's been sitting in my chair," growled the Papa bear.

"Someone's been sitting in my chair," said the Mama bear.

"Someone's been sitting in my chair and they've broken it to pieces," cried the Baby bear.

They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled,

    "Someone's been sleeping in my bed.”

"Someone's been sleeping in my bed, too" said the Mama bear.

"Someone's been sleeping in my bed and she's still there!" exclaimed the Baby bear.

Just then, Goldilocks woke up.She saw the three bears.She screamed, "Help!" 
And she jumped up and ran out of the room.Goldilocks ran down the stairs, opened the door, 
and ran away into the forest.She never returned to the home of the three bears.
*/

//-------------------------------------------------------------

/* Parprogrammera gärna denna med en klasskompis! 
I denna övning ska du få göra ett choose your own adventure baserat på Guldlock och de tre björnarna.
 Berättelsen kan du hitta här som du kan kopiera ifrån.

Förslag på en sagolik font https://fonts.google.com/specimen/Indie+Flower att använda.

Börja med att analysera berättelsen och bryta ner den i mindre delar. 
Skapa sedan steg-för-steg instruktioner att koda efter.
*/

function guldlock() {
    let choice = window.prompt('Du är Guldlock och har gått vilse i skogen. Du kommer till ett hus. Vill du gå in? (ja/nej)').toUpperCase();

    if (choice === 'JA') {
        enterHouse();
    } else {
        endGame();
    }
}

function enterHouse() {
    let choice = window.prompt('Du kommer in i huset. Vill du smaka på gröt? (ja/nej)').toUpperCase();

    if (choice === 'JA') {
        let svar = window.prompt('Vilken grötskål vill du smaka på? (liten/mellan/stor)').toUpperCase();
        tastePorridge(svar);

    } else {
        endGame();
    }
}
function tastePorridge(svar) {
    if (svar === 'LITEN') {
        window.alert('Den var för kall!');
        happyEnding();
    } else if (svar === 'MELLAN') {
        window.alert('Den var för varm!');
        happyEnding();
    } else if (svar === 'STOR') {
        window.alert('Den var lagom!');
        happyEnding();
    } else {
        window.alert('Du måste välja mellan liten, mellan eller stor!');
        tastePorridge();
    }
}

function happyEnding() {
    window.alert('Hoppas gröten smakade bra, stick här ifrån snorunge!');
}


function endGame() {
    window.alert('Du är en tråkig person och får gå hem!!!!');
}

guldlock();