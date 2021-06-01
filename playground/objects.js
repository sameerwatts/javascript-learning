// const person = {
//   first: 'sameer',
//   age: 24,
//   are_you_cool: true,
//   'really cool': true,
//   //   propertyToAccess: 'nothing',
// };
// const propertyToAccess = prompt('which prop you wanna access');
// console.log(typeof propertyToAccess);

// console.log(
//   person.propertyToAccess
//     ? person.propertyToAccess.gender
//     : 'Prop does not exist'
// );

// const inputEl = document.querySelector('input');
// console.log(inputEl ? inputEl.value : 'no val');
// delete person.first;
// person.first = undefined;
// person.age = null;
const person = {
  first: 'sameer',
  age: 24,
  are_you_cool: true,
  'really cool': true,
  greet: (greet) => {
    console.log(this);
    return `${greet} ${this.first}`;
  },
};

console.log(this);
