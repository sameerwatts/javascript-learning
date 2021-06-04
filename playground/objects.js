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
// const person = {
//   first: 'sameer',
//   age: 24,
//   are_you_cool: true,
//   'really cool': true,
//   greet: (greet) => {
//     console.log(this);
//     return `${greet} ${this.first}`;
//   },
// };

// console.log(this);

// value copy
// let name1 = 'sameer';
// let name2 = 'Noni';
// console.log(name1 === name2); // false
// name2 = name1;
// console.log(name1 === name2); // true sameer === sameer
// name1 = 'sameer watts';
// console.log(name1 === name2); // false

// object and array reference copy
// const person3 = { ...person2 };
// const person3 = _.cloneDeep()
// const person3 = { ...person2 }; // shallow copy
// person2.job.partTime = 'dancing';

// console.log(person1.name === person2.name);

const name1 = 'sameer';
// let name2 = 'Noni';
// const name3 = name2;
// name2 = 'pankaj';

const person1 = {
  name: 'sameer',
  age: 33,
};

// const personDetail = {
//   job: 'Web dev',
//   name: 'Pankaj',
// };

// const bigDaddy = {
//   ...person1,
//   ...personDetail,
//   food: 'coke',
// };

function myFunc1(data) {
  data.name = 'changed name';
  console.log(data);
}

const personCpy = { ...person1 };
myFunc1(personCpy);
