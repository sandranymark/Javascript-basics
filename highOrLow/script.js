//Högt eller lågt
/* Fråga användaren efter ett tal mellan 1 och 100. Programmet ska ha ett hemligt tal sparat. 
Det ska fortsätta fråga användaren till dess att användaren gissar det hemliga talet. 
Om man gissade för högt eller för lågt så ska det skrivas ut, så att användaren har en rimlig chans att klara det.
*/

function highOrLow() {
    let hemligtNummer = Math.floor(Math.random() * 100 + 1);
    let gissning = 0;
    let gissningar = 0;

    while (gissning !== hemligtNummer) {
        gissning = parseInt(window.prompt('Gissa ett nummer mellan 1 och 100'))
        gissningar++

        if (gissning > hemligtNummer) {
            window.alert('Du gissade för högt!!!')
            gissningar++
        } else if (gissning < hemligtNummer) {
            window.alert('Du gissade för lågt!!!')
            gissningar++
        }
    }
    window.alert('Du gissade rätt, wohooooooooooooo!!!')

    console.log('Du behövde ' + gissningar + ' gissningar för att gissa rätt')
    window.alert('Du behövde ' + gissningar + ' gissningar för att gissa rätt')
}

highOrLow()