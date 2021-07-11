const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

const person = {
  first: 'sameer',
  last: 'watts',
  age: 22,
};

// for (const props in person) {
//   console.log(props);
// }

// for (const prop of Object.keys(person)) {
//   console.log(prop);
// }

const baseHuman = {
  legs: 2,
  hands: 2,
  head: 1,
};

function Human(name) {
  this.name = name;
}
Human.prototype = baseHuman;

const newPerson = new Human('sameer');

console.log(newPerson.constructor);

for (const key in newPerson) {
  console.log(key);
}
