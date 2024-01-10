function miniräknare(numberOne, text, numberTwo) {
    if (typeof numberOne === 'number' && typeof numberTwo === 'number' && typeof text === 'string') {
        if (text === '+') {
            return numberOne + numberTwo;
        } else if (text === '-') {
            return numberOne - numberTwo;
        } else if (text === '*') {
            return numberOne * numberTwo;
        } else if (text === '/') {
            return numberOne / numberTwo;
        } else {
            return 'Du måste skriva in en text som är +, -, * eller /';
        }
    } else {
        return 'Du måste skriva in siffror';
    }
}
window.alert(miniräknare(Number(prompt('Skriv in ett tal')), prompt('Skriv in +, -, * eller /'), Number(prompt('Skriv in ett tal'))))
