// function doctorize(first) {
//   return `Dr. ${first}`;
// }

// anonymus function
// function (first) {
//     return `Dr. ${first}`;
//   }

// Function expression
// const doctorize = function (first) {
//   // doesNotExist() //explain error
//   return `Dr. ${first}`;
// };

// diffrence between function expression and normal function creation is hoisting
// Concept of hoisting
// doctorize2('sam'); // hoisting run function before it's defined

// const doctorize1 = function (first) {
//   // doesNotExist() //explain error
//   return `Dr. ${first}`;
// };
// function doctorize2(first) {
//   // doesNotExist() //explain error
//   console.log(`Dr. ${first}`);
//   return `Dr. ${first}`;
// }

// Arrow functions
// const inchToCm = (inches) => inches * 2.54;
// const add = (a, b = 4) => a + b;

// returning an object
// const makeABaby = (first, last) => ({
//   name: `${first}, ${last}`,
//   age: 0,
// });

// IIFE - Immidiatly Invoked Function Expression
// (function (age) {
//   console.log('running IIFE');
//   console.log(`You are cool. your age is ${age}`);
//   return `You are cool. your age is ${age}`;
// })(24);

// Methods
/* eslint-disable */
const person = {
    name: 'Sameer Watts',
    // Method
    sayHi: function() {
        // console.log(this); // result will be person object
        console.log('Hi Sameer');
    },
    // short hand method
    yellHi() {
        console.log(this); // result will be person object
        console.log('Heyyy Sameerrr');
    },
    // Arrow function
    wisperHi: () => {
        console.log(this); // result will be window object
        console.log('Hi Sameerrr');
    }
}

// callback function
function handleClicking() {
    console.log('thanks for clicking');
}
const button = document.querySelector('button');
// button.addEventListener('click', person.sayHi)
// button.addEventListener('click', handleClicking)
button.addEventListener('click', () => {
    console.log('Great clicking!!');
})

// setTimeout(handleClicking, 1000);
// setInterval(handleClicking, 1000)

