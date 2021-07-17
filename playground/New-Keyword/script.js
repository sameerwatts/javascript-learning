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

function Pizza() {
  console.log('Making a pizza');
}

const pizza = new Pizza();
console.log(pizza.constructor);
console.log(pizza instanceof Pizza);
