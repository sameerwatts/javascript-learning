// // Ability to access the parent level scope to a child scope even after a parent function have been terminated
// function outer() {
//   const outerVar = 'Hey I am the outer var';
//   function inner() {
//     const innerVar = 'Hey i am the inner var';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   inner();
// }

function outer() {
  const outerVar = 'Hey I am the outer var';
  function inner() {
    const innerVar = 'Hey i am the inner var';
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}

const innerFn = outer(); // stick a function into a variable and at a later point in time i access this function
// even this outer function is done it should be cleand up

// javascript can reach out of the function even outer function is done already it can access the outer variable in innrer function
// inner function should return still maintain variable in memory
// innerFn();

// another use of closures
function createGreeting(greeting = '') {
  const myGreeting = greeting.toUpperCase();
  return function (name) {
    return `${myGreeting}, ${name}`;
  };
}

const hello = createGreeting('hello');
const hey = createGreeting('hey');
// console.log(hello('Sameer'));
// console.log(hey('Panakj'));
// console.log(hello('Noni'));

// function createGreetFn(greeting, name) {
//   const myGreet = greeting.toUpperCase();
//   return `${myGreet} ${name}`;
// }

// const sayHello = createGreetFn('hello', 'Sameer');
// const sayHi = createGreetFn('hi', 'Noni');
// console.log(sayHello);
// console.log(sayHi);
function createGame(gameName) {
  let score = 0;
  return function () {
    score += 1;
    return `${gameName} score is: ${score}`;
  };
}

const hockeyScore = createGame('hokey');
const footballScore = createGame('football');

// const add = (function () {
//   let counter = 0;
//   return function () {
//     console.log(counter);
//     counter += 1;
//     return counter;
//   };
// })();
// function myFunction() {
//   add();
// }
function Counter() {
  let counter = 0;
  function IncreaseCounter() {
    counter += 1;
    return counter;
  }
  return IncreaseCounter;
}

const increment1 = Counter();
const increment2 = Counter();

function myFunction1() {
  console.log(increment1());
}

function myFunction2() {
  console.log(increment2());
}

// click 3 times button1 then click 2 times button2
