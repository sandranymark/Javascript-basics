
// sten, sax och påse. Först till 3 vinster vinner!


/* Sten, sax och påse */
function stenSaxPase() {


    let computer = ['sten', 'sax', 'påse'];
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let played = window.prompt('Sten, Sax, Påse');

        if (played === 'sten' || played === 'sax' || played === 'påse') {
            console.log('Du spelade ' + played);

            let num = Math.floor(Math.random() * 3)
            console.log('Datorn spelade ' + computer[num])

            if (played === computer[num]) {
                console.log('oavgjort!');
            } else if (
                (played === 'sten' && computer[num] === 'sax') ||
                (played === 'sax' && computer[num] === 'påse') ||
                (played === 'påse' && computer[num] === 'sten')
            ) {
                console.log('Grattis! Du vann omgången!')
                playerScore++
            } else {
                console.log('Datorn vann den här omgången, loser!')
                computerScore++
            }

        } else {
            window.alert('Du måste välja sten, sax eller påse')
        }

    }

    if (playerScore > computerScore) {
        window.alert('Grattis du vann! YOU ARE A WINER!')
        console.log('Grattis du vann! YOU ARE A WINER!')
    } else {
        window.alert('Datorn vann, dåligt av dig!')
        console.log('Datorn vann, dåligt av dig!')
    }

}
stenSaxPase()