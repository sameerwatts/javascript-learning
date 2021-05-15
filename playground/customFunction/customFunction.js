// function defination
function calculateBill() {
  // function block
  // function body
  console.log('running calculate bill');
  const total = 100 * 1.13;
  console.log(total); // 112.99999999999999
  return total;
}

// function call, run, invoke
// calculateBill(); // result

const myTotal = calculateBill(); // capture
console.log(`Total is $${myTotal}`); // result
console.log(`Total is $${calculateBill()}`); // result
// scoping
// console.log(total); error
