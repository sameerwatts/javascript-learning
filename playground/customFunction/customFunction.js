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
let bill = 100; // BAD PRACTICE
const taxRate = 0.13; // BAD PRACTICE

// function defination
function calculateBill() {
  // specific for one value
  // function block
  // function body
  const total = bill * (1 + taxRate);
  console.log(total); // 112.99999999999999
  return total;
}
// function call, run, invoke
const myTotal1 = calculateBill(); // 112.999999
bill = 10;
const myTotal2 = calculateBill(); // 11.29999999
