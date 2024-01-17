// Code here!
/* 1 */
const hTreElement = document.querySelector('.art-1 h3');
hTreElement.textContent = 'potato';


/* 2 */
const homeElement = document.querySelector('nav a');
homeElement.textContent = 'Start';


/* 3 */
const contactElement = document.querySelector('nav a:nth-child(3)');
contactElement.textContent = 'Mail Us';

/* 4 */
const hoodieElement = document.querySelector('.art-2 h3');
hoodieElement.textContent = 'Sinus Hoodie - Fire';

/* 5 */
const buttonElement = document.querySelector('button');
buttonElement.textContent = 'Buy Now';
buttonElement.style.background = 'hotpink';


/* 6 */
//Byt bakgrundsfärg på någon av produkterna.
const productElement = document.querySelector('.art-1');
productElement.style.background = 'lightblue';

/* 7 */
const addressElement = document.querySelector('footer p');
addressElement.innerHTML = 'Råtorps Allè 103 <br> 653 48 <br> Karlstad';


/* 8 */
const pElements = document.querySelectorAll('p');
pElements.forEach(element => {
    element.style.color = 'Hotpink';
});

/* 9 */
const buttonElements = document.querySelectorAll('button');
buttonElements.forEach(element => {
    element.textContent = 'Add to cart';
});

/* 10 */
const homeElement2 = document.querySelector('nav a');
homeElement2.classList.add('active');

/* 11 */
const logoElement = document.querySelector('header img');
//logoElement.classList.remove('logo');

/* 12 */
const navElement = document.querySelector('nav');
const newElement = document.createElement('a');
newElement.textContent = 'Fuck';
navElement.appendChild(newElement);

//Jespers
// const navRef = document.querySelector('nav');
// const imgRef = document.querySelector('nav img');
// const linkRef = document.createElement('a');
// linkRef.textContent = 'Checkout'
// linkRef.href = '#'

/* 13 */

const articleRef = document.createElement('article');
const figureRef = document.createElement('figure');

const imgRef = document.createElement('img');
imgRef.src = 'img/hoodie-forrest.png';
imgRef.alt = 'hoodie forrest';
figureRef.appendChild(imgRef);

const headerRef = document.createElement('h2');
headerRef.textContent = 'Sinus Hoodie';

const subHeaderRef = document.createElement('h3');
subHeaderRef.textContent = 'Forrest';

const pRef = document.createElement('p');
pRef.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';

const buttonRef = document.createElement('button');
buttonRef.textContent = 'Add to cart';

articleRef.appendChild(figureRef);
articleRef.appendChild(headerRef);
articleRef.appendChild(subHeaderRef);
articleRef.appendChild(pRef);
articleRef.appendChild(buttonRef);

document.querySelector('main').appendChild(articleRef);

/* 14 */

const logoRef = document.querySelector('.logo');
logoRef.addEventListener('click', () => {
    console.log('Found you!');
});

/* 15 */

const articleRefs = document.querySelectorAll('main article');

articleRefs.forEach(article => {
    article.addEventListener('click', () => {
        const textRef = article.querySelector('h3');
        console.log('Hi i am Article' + textRef.textContent)
    });
});
