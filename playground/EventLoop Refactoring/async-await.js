// js is async
// js is single threaded lang

// 1. Change the text to GO when clicked.
// 2. Make it a circle after 2 seconds
// 3. Make box red after 0.5s, text color white
// 4. make it square after 0.25s
// 5. make it purple
// 6. fade out after 0.5s

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function changeMyShapeWithPromiseHandler(e) {
  const boxEl = e.target;
  // 1. Change the text to GO when clicked.
  boxEl.textContent = 'Go';
  // 2. Make it a circle after 2 seconds
  await wait(2000);
  boxEl.classList.add('round');
  // 3. Make box red after 0.5s, text color white
  await wait(500);
  boxEl.classList.add('red');
  // 4. make it square after 0.25s
  await wait(250);
  boxEl.classList.remove('round');
  await wait(1000);
  boxEl.classList.remove('red');
  boxEl.classList.add('purple');
  // 6. fade out after 0.5s
  await wait(500);
  boxEl.classList.remove('purple');
  boxEl.classList.add('fadeOut');
}

const box = document.querySelector('.box');
box.addEventListener('click', changeMyShapeWithPromiseHandler);

// const arrow = async () => {};
// box.addEventListener('click', async () => {});
// box.addEventListener('click', async function () {});
// const testObj = {
//   async hello() {},
//   async hi() {},
// };
