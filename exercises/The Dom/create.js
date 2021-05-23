const paragraph1 = document.createElement('p');
paragraph1.textContent = 'This is a paragraph created by js';
paragraph1.classList.add('newPara');

const image1 = document.createElement('img');
image1.alt = 'firstImage';
image1.src = 'https://source.unsplash.com/random/200x200';

// const divider1 = document.createElement('div');
// divider1.classList.add('wrapper');

// divider1.appendChild(paragraph1);
// divider1.appendChild(image1);

// document.body.appendChild(divider1);

const outerDiv = document.querySelector('.outerContainer');
const outerDivHeading = document.querySelector('.outerContainer h2');
// outerDiv.insertAdjacentElement('beforeend', paragraph1);
outerDiv.appendChild(paragraph1);

// <ul>
//  <li>one</li>
//  <li>two</li>
//  <li>three</li>
//  <li>four</li>
//  <li>five</li>
// </ul>
const head = document.createRange();
console.log(head);
