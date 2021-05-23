// traversing removing elements
const headingLevelTwo = document.querySelector('.secondOuterContainer h2');

// console.log(divider.firstElementChild);
// console.log(divider.lastElementChild);
// console.log(divider.previousElementSibling);
// console.log(divider.nextElementSibling);
// console.log(divider.parentElement);
// const image = headingLevelTwo.parentElement.previousElementSibling.children[0];
// const closestSelectedDiv = headingLevelTwo.closest('.secondWrapperDiv');

// el.childNodes;
// el.firstChild;
// el.lastChild;
// el.previousSibling;
// el.nextSibling;
// el.parentNode;

const newPara = document.createElement('p');
newPara.textContent = 'created paragraph';
document.body.appendChild(newPara);

newPara.remove();

document.body.appendChild(newPara);
