const myButton = document.querySelector('.myButton');
const checkOut = document.querySelector('.checkout');

// named function
// myButton.addEventListener('click', function clickHandler() {
//   console.log('clicked');
// });

// anon func
// myButton.addEventListener('click', function () {
//   console.log('clicked');
// });

// arrow func
// myButton.addEventListener('click', () => {
//   console.log('clicked');
// });

// function reference
function clickHandler() {
  console.log('clicked');
}
function buyHandler() {
  console.log('buy Item');
}

myButton.addEventListener('click', clickHandler);
myButton.removeEventListener('click', clickHandler);

checkOut.addEventListener('click', clickHandler);
checkOut.removeEventListener('click', clickHandler);

const buyButtons = document.querySelectorAll('.buy');

function buyLoop(button) {
  button.addEventListener('click', buyHandler);
}
buyButtons.forEach(buyLoop);
