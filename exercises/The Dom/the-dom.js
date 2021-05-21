const firstPara = document.querySelector('p');
const innerDiv = document.querySelector('.items');

firstPara.textContent = 'New updated paragraph';
const paraInsideInnerDiv = innerDiv.querySelector('p.myPara');
// console.dir(innerDiv);
console.dir(paraInsideInnerDiv);

const innerTestDiv2 = innerDiv.querySelector('.innerTestDiv2');
const testPara5 = innerTestDiv2.querySelectorAll('.testPara5');
// console.log(testPara5);
