// js is async
// js is single threaded lang

// 1. Change the text to GO when clicked.
// 2. Make it a circle after 2 seconds
// 3. Make box red after 0.5s, text color white
// 4. make it square after 0.25s
// 5. make it purple
// 6. fade out after 0.5s

function changeMyShapeHandler(e) {
  const boxEl = e.target;
  console.log(boxEl);
  // 1. Change the text to GO when clicked.
  boxEl.textContent = 'Go';
  setTimeout(() => {
    boxEl.classList.add('round');
    setTimeout(() => {
      boxEl.classList.add('red');
      setTimeout(() => {
        boxEl.classList.remove('round');
        setTimeout(() => {
          boxEl.classList.add('purple');
          setTimeout(() => {
            boxEl.classList.add('fadeOut');
          }, 500);
        }, 1000);
      }, 250);
    }, 500);
  }, 2000);
}

const box = document.querySelector('.box');
box.addEventListener('click', changeMyShapeHandler);

// setTimeout(function round() {
//   console.log('round');
//   setTimeout(function red() {
//     console.log('red');
//   }, 500);
// }, 6000);

// setTimeout(function round() {
//   console.log('round');
// }, 6000);

// setTimeout(function red() {
//   console.log('red');
// }, 500);
