// const myButton = document.querySelector('.myButton');
// const checkOut = document.querySelector('.checkout');

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
// function clickHandler() {
//   console.log('clicked');
// }

// myButton.addEventListener('click', clickHandler);
// myButton.removeEventListener('click', clickHandler);

// checkOut.addEventListener('click', clickHandler);
// checkOut.removeEventListener('click', clickHandler);

// function buyHandler() {
//   console.log('buy Item');
// }
function buyHandler(e) {
  //   console.log('clicked on button');
  e.preventDefault();
  //   e.stopPropagation();
  console.log(e.bubbles);
  //   console.log(e.currentTarget);
  //   console.log(e.currentTarget === e.target);
}
const buyButtons = document.querySelectorAll('.buy');

function buyLoop(button) {
  button.addEventListener('click', buyHandler);
}
buyButtons.forEach(buyLoop);

const image1 = document.querySelector('.firstImg');

// function moveMouseHandler(e) {
//   console.log(this);
//   console.log(e.currentTarget);
// }
image1.addEventListener('click', (e) => {
  console.log(this);
  //   console.log(e.currentTarget);
});

// function clickWindowHandler(e) {
//     console.log(e.target);
//   console.log('clicked on windows');
// }

// window.addEventListener('click', clickWindowHandler, { capture: true });
