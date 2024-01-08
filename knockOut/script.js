//Sandras KNOCKOUTNUMBER GAME

function knockOut() {
    let dice = [1, 1];
    let isApproved = false;
    let knockOutNumber = 0;
    let goal = 0;
    let points = 0;
    let attempts = 0;

    while (!isApproved) {
        knockOutNumber = parseInt(window.prompt('Skriv in ett nummer mellan 6 och 9'));

        if (knockOutNumber < 6 || knockOutNumber > 9 || isNaN(knockOutNumber)) {
            alert('Du måste välja ett nummer mellan 6 och 9');
        } else {
            goal = parseInt(window.prompt('Välj ett mål mellan 20 och 40'));

            if (goal < 20 || goal > 40 || isNaN(goal)) {
                alert('Du måste välja ett mål mellan 20 och 40');
            } else {
                isApproved = true;
            }
        }
    }

    while (points < goal) {
        dice[0] = Math.floor(Math.random() * 6) + 1;
        dice[1] = Math.floor(Math.random() * 6) + 1;

        if (dice[0] + dice[1] === knockOutNumber) {
            points -= (dice[0] + dice[1]);
        } else {
            points += (dice[0] + dice[1]);
        }

        console.log(`Du slog ${dice[0]} och ${dice[1]} och har ${points} poäng`);
        attempts++;
    }

    alert(`Du klarade det på ${attempts} försök`);
}

knockOut();

