"use strict";

let game = null;

class Player {
    constructor(char, nickname, color) {
        this.nickname = nickname;
        this.color = color;
        this.char = char;
    }
}

class Game {
    seconds = 5;
    showTimer = false;
    currentPlayer = null;
    gameField = ['', '', '', '', '', '', '', '', '']

    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    move(index) {
        this.gameField[index] = this.currentPlayer.char;
        console.log(index, "Making a move on the field")
        console.log(this.gameField, "Current gamefield");

        if (this.isWinner(this.currentPlayer)) {
            this.gameOver(this.currentPlayer);
            return;
        }

        // Spelet är utan vinnare, det är oavgjort.
        if (this.gameCompleted()) {
            this.gameOver();
            return;
        }

        game.switchPlayer();

    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
        document.dispatchEvent(new CustomEvent('changePlayer', { detail: { player: this.currentPlayer } }))
    }

    gameOver(winner = null) {

        var result = { winner: winner }

        document.dispatchEvent(new CustomEvent('gameOver', { detail: result }))
    }

    isWinner(player) {

        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombos.some(combo => combo.every(position => this.gameField[position] === player.char));
    }

    gameCompleted() {
        return this.gameField.every(position => position !== '')
    };
}

//Funktion som förbereder spelet inför start
function prepGame() {

    let startGameBtn = document.getElementById("newGame");
    startGameBtn.addEventListener("click", initiateGame);
}


function initiateGame() {

    let form = document.getElementById("theForm");
    let gameArea = document.getElementById("gameArea");
    let jumbotronText = document.querySelector(".jumbotron h1");

    form.classList.add("d-none");
    gameArea.classList.remove("d-none");

    var playerOne = new Player('X', document.getElementById("nick1").value, document.getElementById("color1").value);
    var playerTwo = new Player('O', document.getElementById("nick2").value, document.getElementById("color2").value);

    game = new Game(playerOne, playerTwo);

    // Slumpa vem som börjar
    game.currentPlayer = Math.random() < 0.5 ? game.playerOne : game.playerTwo;

    jumbotronText.textContent = `Aktuell spelare är ${game.currentPlayer.nickname}`;

    let cells = document.querySelectorAll("#gameArea td");

    let cellClicked = function (event) {
        event.target.innerHTML = game.currentPlayer.char;
        let index = event.target.getAttribute('data-id');;
        game.move(index);
    }
    // Sätt upp spelplanen
    // Använder for-loop för något bättre prestanda, använd foreach för bättre läsbarhet.
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].addEventListener("click", cellClicked);
    }

    document.addEventListener('changePlayer', (event) => {
        jumbotronText.textContent = `Aktuell spelare är ${event.detail.player.nickname}`;
    });

    document.addEventListener('gameOver', (event) => {

        // Avregistrera alla klicklyssnare
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener("click", cellClicked);
        }

        let winner = event.detail.winner;

        if (winner !== null) {
            jumbotronText.textContent = `Vinnaren är ${winner.nickname}`;
        } else {
            jumbotronText.textContent = `Oavgjort`;
        }
    });
}