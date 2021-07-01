const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

// const reduceInventory = inventory.reduce((accumulator, currentObj) => {
//   if (accumulator[currentObj.type]) {
//     accumulator[currentObj.type] += currentObj.price;
//     return accumulator;
//   }
//   accumulator[currentObj.type] = currentObj.price;
//   return accumulator;
// }, {});
// console.log(reduceInventory);

const reduceInventoryItemCount = inventory.reduce((total, item) => {
  if (total[item.type]) {
    total[item.type] += 1;
    return total;
  }
  total[item.type] = 1;
  return total;
}, {});

console.log(reduceInventoryItemCount);

const totalInventory = inventory.reduce(
  (acc, currentVal) => acc + currentVal.price,
  0
);
/*
      Looping Methods
    */

function createBody(body, face) {
  console.log(`
            ${face}
           ${Array(2).fill(body).join('')}
       👆${Array(3).fill(body).join(' ')}👆
           ${body.repeat(2)}
           🦵 🦵
    `);
}
// const ourChamps = faces.map((singleFace) => createBody('🍟', singleFace));

const updatedPeopleData = people.map((single) => {
  // get birthday
  // console.log(single.birthday);
  // how old they are
  const now = new Date();
  const birthday = new Date(single.birthday);
  const getAgeInMilisec = now.getTime() - birthday.getTime();
  const age = Math.floor(getAgeInMilisec / (1000 * 60 * 60 * 24 * 365));
  // console.log(age);
  // return fullname and age
  return {
    fullname: `${single.names.first} ${single.names.last}`,
    age,
  };
});

// const names = ['sameer', 'pankaj', 'ashu', 'karan'];

// const addLastName = (name) => `${name} Arora`;

// const capitalize = (name) => `${name[0].toUpperCase()}${name.slice(1)}`;

// const fullName = names.map(capitalize).map(addLastName);
