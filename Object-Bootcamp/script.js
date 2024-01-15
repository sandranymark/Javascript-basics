

/*1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`.*/


let book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    numberPages: 310
};
console.log(book);


/* 2. Skapa en array av objekt med flera stycken böcker*/

let books = [{ title: 'The Hobbit', author: 'J.R.R. Tolkien', numberPages: 310 },
{ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', numberPages: 1178 },
{ title: 'The Silmarillion', author: 'J.R.R. Tolkien', numberPages: 365 }];

console.log(books);


/*3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så 
returneras objektet annars `null`.
 Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.*/



function searchByTitle(books, searchTerm) {
    return books.find(book => book.title === searchTerm) || null;
}
let searchTerm = "The Lord of the Rings";
let foundBook = searchByTitle(books, searchTerm);

if (foundBook !== null) {
    console.log("Bok hittad:", foundBook);
} else {
    console.log("Ingen matchning för söktermen:", searchTerm);
}


/* Letter Frequency
Räkna tecken i en sträng och organisera detta i ett objekt.
Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. 
Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara
 antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

```js
letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
```
*/

function letterFrequency(str) {

    let frequencyObject = {};


    for (let char of str) {

        if (frequencyObject[char]) {
            frequencyObject[char]++;
        } else {

            frequencyObject[char] = 1;
        }
    }

    return frequencyObject;
}



console.log(letterFrequency("kalle")); // => { "k": 1, "a": 1, "l": 2, "e": 1 }
console.log(letterFrequency("aaaa"));  // => { "a": 4 }
console.log(letterFrequency("ni talar bra latin"));
// => { "n": 2, "i": 2, " ": 3, "t": 2, "a": 4, "l": 2, "r": 2, "b": 1 }



//Lättaste lösningen :D

// function letterFrequency(str) {
//     let frequencyObject = {};

//     for (let char of str) {
//         frequencyObject[char] = frequencyObject[char] ? frequencyObject[char] + 1 : 1;
//     }

//     return frequencyObject;
// }



// ### filterByCountry

// Skapa en funktion som tar emot listan på användare och en landskod 
// och returnerar en ny lista innehållande endast användare med den 
// landskoden.

function filterByCountry(users, countryCode) {
    return users.filter(user => user.country === countryCode);
}
