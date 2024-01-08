let goal = 1;
let numberOfThrows = 0;

while (goal < 7) {
    let dise = Math.floor(Math.random() * 6) + 1;
    console.log('du kasteade en ' + dise);
    numberOfThrows++;
    if (dise === goal) {
        goal++;
        console.log('BINGO!!!!!!!!!');
    }
}

console.log('Grattis mannen du vann!!!!' + numberOfThrows + ' antal kast ');