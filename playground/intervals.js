// function hey() {
//   console.log('hey');
// }

const buzzer = () => {
  console.log('Ennnnngggggg');
};

// const intervalRef = setInterval(buzzer, 500);

// setTimeout(() => {
//   clearInterval(intervalRef);
//   console.log('cleared');
// }, 5000);

function setInstantInterval(funcToRun, ms) {
  // initial function call
  funcToRun();
  return setInterval(funcToRun, ms);
}

const myInterval = setInstantInterval(buzzer, 400);

function stopTimeout() {
  console.log('You destroyed me');
  clearInterval(myInterval);
}

window.addEventListener('click', stopTimeout);
