// const firstPara = document.querySelector('p');
// const innerDiv = document.querySelector('.items');

// firstPara.textContent = 'New updated paragraph';
// const paraInsideInnerDiv = innerDiv.querySelector('p.myPara');
// // console.dir(innerDiv);
// console.dir(paraInsideInnerDiv);

// const innerTestDiv2 = innerDiv.querySelector('.innerTestDiv2');
// const testPara5 = innerTestDiv2.querySelectorAll('.testPara5');
// console.log(testPara5);
// console.dir(firstPara);

// const testHeading = document.querySelector('h2');
// const outerDiv = document.querySelector('.outerContainer');
// console.log(testHeading.textContent); // getter
// testHeading.textContent = 'I am updated'; // setter
// console.log(testHeading.textContent);
// testHeading.innerText = 'i am updated using innet text';
// console.log(outerDiv.innerHTML);
// console.log(outerDiv.outerHTML);

// const eatPara = document.querySelector('p');
// eatPara.textContent = `${eatPara.textContent} golguppe`;
// eatPara.insertAdjacentText('beforeend', '🍕');
// eatPara.insertAdjacentText('afterbegin', '🍕');
// eatPara.insertAdjacentText('afterend', '🍕');
// eatPara.insertAdjacentText('beforebegin', '🍕');

// getter and setter, textContent, innerText, innerHTML, outerHTML, insertAdjacentText

// const picture = document.querySelector('img');

// picture.classList.add('firstImg');
// // picture.classList.add('circle');

// function updateClass() {
//   picture.classList.toggle('circle');
// }
// picture.addEventListener('click', updateClass);

// console.log(picture.classList.value);

const pic = document.querySelector('.firstImg');

// function loading() {
//   console.dir(pic.naturalWidth);
// }

// window.addEventListener('load', loading);
// pic.alt = 'cute image';

// pic.width = 200;
// pic.naturalWidth = 200;

// setAttribute func, getAttribute Func

// pic.setAttribute('alt', 'updated Alt');
// console.log(pic.dataset.name);
pic.dataset.name = 'update me';
