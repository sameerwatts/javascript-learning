const person = {
  name: 'sameer',
  age: 44,
};
// const myMap = new Map([
//   ['firstName', 'sameer'],
//   ['lastName', 'watts'],
// ]);
// set
// myMap.set(person, 'cool');
// get
// console.log(myMap.get(person));

const score = 500;
const prizes = new Map();
prizes.set(100, 'scooter');
prizes.set(300, 'Bike');
prizes.set(500, 'Car');
// console.log(
//   `Congratulations your score is: ${score}, you won ${prizes.get(score)}`
// );
prizes.delete('Bike');

// for (const [myScore, prize] of prizes) {
//   console.log(myScore, prize);

// }

// has
// delete

// console.log(myMap);
