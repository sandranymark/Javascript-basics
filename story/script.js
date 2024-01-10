

let characters = [{
    name: 'Bamse',
    items: [],
    health: 100,
    strength: 10,
    agility: 10,
    intelligence: 8,
    weapon: {
        name: 'dunderhonung',
        damage: 1000
    },
    enemies: [],
    friends: [] // Added friends property
},
{
    name: 'Lille Skutt',
    items: [],
    health: 100,
    strength: 5,
    agility: 10,
    intelligence: 5,
    weapon: {
        name: 'Morot',
        damage: -5
    },
    enemies: [],
    friends: [] // Added friends property
},
{
    name: 'skalman',
    items: [],
    health: 80,
    strength: 2,
    agility: -3,
    intelligence: 10,
    weapon: {
        name: 'Mat och sovklockan',
        damage: 1
    },
    enemies: [],
    friends: [] // Added friends property
},
{
    name: 'Reinar Räv',
    items: [],
    health: 100,
    strength: 6,
    agility: 8,
    intelligence: 9,
    weapon: {
        name: 'Vassa tänder',
        damage: 4
    },
    enemies: [],
    friends: [] // Added friends property
}
]

let player = characters[0];

player.enemies.push(characters[3]);
player.friends.push(characters[1], characters[2]);

console.log(player);
console.log('Kära dagbok....' + player.name + ' Är mitt namn och jag är den mäktigaste björnen i hela världen!');
console.log(player.friends[0].name + ' är min bästa vän, han är en riktig klippa!');

console.log(player.enemies[0].name + ' är min värsta fiende. En dag ska jag se till att han blir lite snällare.');
console.log(player.enemies[0].name + ' Den jäveln har snott min dunderhonung, jag ska se till att han får smaka på bamses brutala styrka!');

function fight() {
    let choice = window.prompt('Vill du slåss mot ' + player.enemies[0].name + '? (ja/nej)').toUpperCase();

    if (choice === 'JA') {
        attack();
    } else {
        window.alert('Du är en fegis!');
    }
}
fight();