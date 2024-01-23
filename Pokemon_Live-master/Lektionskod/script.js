'use strict';



window.addEventListener('load', () => {
    console.log('window loaded');
    console.log(pokemons.length);
    console.log(pokemons[0]);


    pokemons.forEach(pokemon => { renderCard(pokemon) });

});

function renderCard(pokemon) {
    console.log(pokemon.name);

    const containerRef = document.querySelector('#cardContainer');
    const cardRef = document.createElement('div');
    cardRef.classList.add('card');
    containerRef.appendChild(cardRef);

    let divRef = document.createElement('div');
    divRef.classList.add('image-container');
    cardRef.appendChild(divRef);

    const imgRef = document.createElement('img');
    imgRef.classList.add('card-image');
    imgRef.style.backgroundColor = pokemon.type[0].color;
    imgRef.src = pokemon.image;
    imgRef.alt = 'Bild på ' + pokemon.name;
    divRef.appendChild(imgRef);


    const spanRef = document.createElement('span');
    spanRef.classList.add('index-span');
    spanRef.textContent = '#' + pokemon.id;
    divRef.appendChild(spanRef);

    divRef = document.createElement('div');
    divRef.classList.add('card-info');
    cardRef.appendChild(divRef);

    let headingRef = document.createElement('h2');
    headingRef.textContent = pokemon.name;
    divRef.appendChild(headingRef);
    let textRef = document.createElement('p');
    if (pokemon.type.length === 1) {
        textRef.textContent = pokemon.type[0].name;
    } else {
        textRef.textContent = pokemon.type[0].name + ' / ' + pokemon.type[1].name;
    }
    divRef.appendChild(textRef);

    divRef = document.createElement('div');
    divRef.classList.add('card-stats');
    cardRef.appendChild(divRef);

    headingRef = document.createElement('h3');
    headingRef.textContent = 'Base Stats:';
    divRef.appendChild(headingRef);

    const tableRef = document.createElement('table');
    tableRef.classList.add('table');
    divRef.appendChild(tableRef);

    let rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);


    rowRef.appendChild(renderCell('HP', pokemon.stats.hp));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Speed', pokemon.stats.speed));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Attack', pokemon.stats.attack));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Special Attack', pokemon.stats.specialAttack));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Defense', pokemon.stats.defense));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Special Defense', pokemon.stats.specialDefense));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Total', pokemon.stats.total));
    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

}

function renderCell(statName, stat) {
    let cellRef = document.createElement('td');
    cellRef.classList.add('table-cell');
    cellRef.textContent = statName + ': ' + stat;
    return cellRef;
}






//I mappen lektionskod finner ni färdig kod för att kunna visa elementet med classen card-container.
// Försök nu att lägga lyssnare på de tre olika knapparna, och vis klick på en specifik knapp skall den container
//som är knutet till den knappen visas på skärmen, samtidigt som de andra två skall gömmas.

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    const pokemon = pokemons.find(pokemon => pokemon.name.toLowerCase() === searchInput.toLowerCase() || pokemon.id.toString() === searchInput);
    if (pokemon) {
        showOnlyContainer('cardContainer');
        renderCard(pokemon);
    } else {
        alert('Pokemon not found');
    }
});





const pokedexBtn = document.getElementById('pokedexBtn');
const searchPokemonBtn = document.getElementById('searchPokemonBtn');
const generatePokemonBtn = document.getElementById('generateBtn');

const containers = ['cardContainer', 'searchFormContainer', 'randomGenContainer'];

function showOnlyContainer(containerId) {
    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.style.display = id === containerId ? 'block' : 'none';
        }
        const pokemon = pokemon.find(pokemon => pokemon.name.toLowerCase() === searchInput.toLowerCase() || pokemon.id.toString() === searchInput);
        if (pokemon) {
            renderCard(pokemon);
        } else {
            // No Pokemon with the specified name was found
            // You can display an error message
            alert('Pokemon not found');
        }

    });
}

pokedexBtn.addEventListener('click', () => showOnlyContainer('cardContainer'));
searchPokemonBtn.addEventListener('click', () => showOnlyContainer('searchFormContainer'));
generatePokemonBtn.addEventListener('click', () => showOnlyContainer('randomGenContainer'));




// Search for the Pokemon in the pokemons array







//I form-container skulle ni kunna skapa ett formulär där användaren får söka på antingen namnet,
//eller id:t, på en pokemon. Vid en sökning skall 1 st kort med just den eftersökta pokemonen visas på skärmen.
//I random-generator skulle ni kunna slumpa fram X antal pokemons u pokemons-arrayen, och visa dem som kort på sidan.
//Ändra gärna på stylingen om ni vill ha ett snyggare GUI.