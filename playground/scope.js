// // globle scope
/* eslint-disable*/
// // difference b/w let const and var is that var is attached to window object but not var and const
// const first = 'sameer'; // access in dev tool in any script loaded in the page
// let last = 'watts';
// var age = 24;

// // available in window

// function sayHi1() {
//     return 'hi'
// };

// // not available in window
// const sayHi2 = function() {
//     return 'hi'
// };

// function scope
// variables are created inside function are only available inside the function
// const age = 10;
// function go() {
//   const hair = 'black';
//   //   const age = 100; // bad practice can use another variable
//   console.log(age); // 10 available here scope look up
//   console.log(hair); // black available here
// }
// go(); // hair will not define even we run go
// console.log(age);
// console.log(hair);

// block scope

// if (true) {
//   const cool1 = true;
//   let cool2 = true;
//   var cool3 = true;
// }
// console.log(cool3); // true
// console.log(cool1); // Cause an error
// console.log(cool2); // Cause an error

// better approach
// function isCool(name) {
//     let cool = false;
//     if(name === 'Sameer') {
//         cool = true // can add var here and remove line 45
//     }
//     console.log(cool);
//     return cool;
// }

// for (var i = 0; i < 10; i++) { // if i used in another for loop for the same function will cause an error
//   console.log(i);
// }

// lexical scoping
// way the scope lookup where the function defined not where it call
const dog = 'Kivi';

function logDog(){
    console.log(dog);
};

function go() {
    const dog = 'Sniper';
    logDog(); // pass the value for going with good approach
}
go();

// functions behaviour in scoping
function sayHi(name) {
    function yell() {
        console.log(`Hi ${name}`);
    }
    // yell() // works
}
// yell() // Not works
