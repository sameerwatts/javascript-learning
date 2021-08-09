// const karan = {
//   name: 'karan',
//   age: 22,
//   sayHello: () => {
//     console.log(this);
//     return `say hello to ${this.name}`;
//   },
// };

// const pankaj = {
//   name: 'pankaj',
// };

// console.log(karan.sayHello()); // say hello to karan

// const greet = karan.sayHello.bind(karan);
// console.log(greet());
// const greet = karan.sayHello.bind({ name: 'sameer' });

// console.log(greet());

// const para = document.querySelector('p');

const karanMeal = {
  name: 'Karan',
  food: 'Farmhouse, Double cheese loaded',
  drink: 'Savan',
  total: 1000,
  billCalculation(tax) {
    return `your total bill is: ${this.total + this.total * tax}`;
  },
  description() {
    return `Hey ${this.name} welcome to our pizzahut, you have ordered ${
      this.food
    } pizza your order is ready with ${this.drink}
        You have to pay ${this.billCalculation()}`;
  },
};
// const pankajMeal = {
//   name: 'Pankaj',
//   food: 'Farmhouse, Double cheese loaded',
//   drink: 'Savan',
//   total: 1000,
//   tax: 0.33,
//   billCalculation() {
//     console.log(this);
//     return `your total bill is: ${this.total + this.total * this.tax}`;
//   },
// };

const calculation = karanMeal.billCalculation.apply(karanMeal, [0.33]);
// const desc = karanMeal.description.call(karanMeal);

console.log(calculation);
// console.log(desc);
