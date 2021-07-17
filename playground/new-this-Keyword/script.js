const myDate = new Date('August, 21, 2020');
// console.log(myDate.getFullYear());
// console.dir(myDate instanceof Date);
// console.log(myDate.constructor);

const person = ['name', 'profession'];
const newPerson = { name: 'profession' };
// console.log(person instanceof Array);
// console.log(newPerson instanceof Object);

const span = document.createElement('span');

// console.log(!(span instanceof Element));
// console.log(!(span instanceof Node));
// console.dir(!(span instanceof HTMLSpanElement));

function Pizza(owner, toppings) {
  this.ingredients = toppings;
  this.customer = owner;
}

const pizza1 = new Pizza('sam', ['onion']);
const pizza2 = new Pizza('kamal', ['Mushrooms']);
console.log(pizza1);
console.log(pizza2);
// console.log(pizza.constructor);
// console.log(pizza instanceof Pizza);

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

function outer() {
  console.log(this);
  const explainThisInFunction = () => {
    console.log(this);
  };
  explainThisInFunction();
}
button1.addEventListener('click', outer);
button2.addEventListener('click', outer);
