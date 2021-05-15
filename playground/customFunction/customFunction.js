// // function defination
// function calculateBill() {
//   // function block
//   // function body
//   console.log('running calculate bill');
//   const total = 100 * 1.13;
//   console.log(total); // 112.99999999999999
//   return total;
// }
// // function call, run, invoke
// // calculateBill(); // result
// const myTotal = calculateBill(); // capture
// console.log(`Total is $${myTotal}`); // result
// console.log(`Total is $${calculateBill()}`); // result
// // scoping
// // console.log(total); error

// function parameters and argument
// let bill = 100; // BAD PRACTICE
// const taxRate = 0.13; // BAD PRACTICE

// // function defination
// function calculateBill() {
//   // specific for one value
//   // function block
//   // function body
//   const total = bill * (1 + taxRate);
//   console.log(total); // 112.99999999999999
//   return total;
// }
// // function call, run, invoke
// const myTotal1 = calculateBill(); // 112.999999
// bill = 10;
// const myTotal2 = calculateBill(); // 11.29999999

// function defination
function calculateBill(bill, taxRate = 0.13) {
  console.log(bill, taxRate); // temp available only inside function body
  // specific for one value
  // function block
  // function body
  const total = bill * (1 + taxRate);
  console.log(total); // 112.99999999999999
  return total;
}
// function call, run, invoke
// i can use variable and pass the variable in the function call
const myTotal1 = calculateBill(100, 0.13); // 112.999999
const myTotal2 = calculateBill(10, 0.13); // 11.29999999
const myTotal3 = calculateBill(10 + 30 + 4, 0.13); // possible and will give result

// const first = 'Sameer';
function sayHiTo(first) {
  return `hello ${first}`; // without passing parameters error
}
const greetings = sayHiTo('Sameer'); // hello undefined if only sayHiTo()
console.log(greetings);

function doctorize(name) {
  return `Dr. ${name}`;
}
function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

const yellDoc = yell(doctorize('Sam')); // HEY DR. SAM

function calculateBillWithTip(bill, taxRate = 0.13, tipRate = 0.15) {
  console.log(bill, taxRate); // temp available only inside function body
  // specific for one value
  // function block
  // function body
  const total = bill + bill * taxRate + bill * tipRate;
  console.log(total);
  return total;
}
calculateBillWithTip(100); // 128
calculateBillWithTip(100, undefined, 0.2); // 128
