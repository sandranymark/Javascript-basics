// GOING TO BOSTON - GAME

/*
Spelet har 3st tärningar.

Kasta tärningarna och spara tärningen med högsta värdet.

Kasta de kvarvarande 2 och spara tärningen med högsta värdet.

Kasta sista tärningen och summera samtliga tre tärningar.

Spelaren med högst summerat värde vinner. Max poäng är 18.

Konstant som är 18
3 tärningar
2 spelare (eller fler?)

Loop för varje spelare: 
    Kasta 3 tärningar, ta värdet av det högsta
    Kasta 2 tärningar, ta värdet av det högsta
    Kasta 1 tärningar, ta värdet

    summera värderna till spelarens poäng

 */


// Going to Boston

function GoingToBoston() {
    let nmbrOfDices = 3;
    let playerScore = [0, 0];

    for (let player = 0; player < playerScore.length; player++) {
        let highestRolledDice = 0;

        for (let i = nmbrOfDices; i > 0; i--) {
            let rolledDice = Math.floor(Math.random() * 6 + 1);


            console.log('Tärningen fick: ' + rolledDice);


            if (highestRolledDice < rolledDice) {
                highestRolledDice = rolledDice;
            }
        }

        playerScore[player] += highestRolledDice;
        console.log('Spelaren fick ' + highestRolledDice + ' poäng!');
    }

    console.log('Spelare 1: ' + playerScore[0] + ', Spelare 2: ' + playerScore[1]);
}

GoingToBoston();