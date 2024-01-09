//Söka efter likheter mellan ord
/*Fråga användaren efter två ord, och kontrollera därefter hur många bokstäver som förekommer på samma plats i båda orden.*/

function likheter() {
    let wordOne = window.prompt('Skriv in ett ord')
    let wordTwo = window.prompt('Skriv ett till ord')
    let lika = 0;

    for (let i = 0; i < wordOne.length; i++) {
        if (wordOne[i] === wordTwo[i]) {
            lika++
        }
    }
    console.log('Antal lika bokstäver är ' + lika)
    window.alert('Antal lika bokstäver är ' + lika)
}

likheter()

