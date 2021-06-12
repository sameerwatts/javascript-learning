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

// const feedback = [
//   { comment: 'Love the burgs', rating: 4 },
//   { comment: 'Horrible Service', rating: 2 },
//   { comment: 'Smoothies are great, liked the burger too', rating: 5 },
//   { comment: 'Ambiance needs work', rating: 3 },
//   { comment: 'I DONT LIKE BURGERS', rating: 1 },
// ];

/*
  Static Methods
*/

const number = Array.of(1, 4, 6); // [1, 4, 6];

// const createRange = (start, end) =>
//   Array.from({ length: end - start + 1 }, (item, i) => i + start);

function createRange(start, end) {
  return Array.from({ length: end - start + 1 }, (item, i) => i + start);
}

const values = Object.values(meats); // [10, 5, 7];
const keys = Object.keys(meats);
const entries = Object.entries(meats);
entries.forEach((singleEntry) => {
  const [singleEntryKey, singleEntryValue] = singleEntry;

  // console.log(singleEntryKey, singleEntryValue);
});

// keys.forEach((singleEntry) => singleEntry);
// console.log(values);
// console.log(keys);
// console.log(entries);

// Make a function that creates a range from x to y with Array.from();

// Check if the last array you created is really an array with Array.isArray();

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const food = 'hot dogs,hamburgers,sausages,corn';
// console.log(food.split(','));

// take the last item off toppings with pop()
const lastItem = toppings.pop();
// add it back with push()
const x = toppings.push(lastItem);
// take the first item off toppings with shift()
const firstItem = toppings.shift();
// add it back in with unshift()
toppings.unshift(firstItem);
// Do the last four,but immutable (with spreads and new variables)
const newToppingsWithoutLastItem = toppings.slice(0, toppings.length - 1);
// Make a copy of the toppings array with slice()
const toppingsCpy = [
  ...newToppingsWithoutLastItem,
  toppings[toppings.length - 1],
];
// Make a copy of the toppings array with a spread
const toppingsCpy99 = [...toppings];
// take out items 3 to 5 of your new toppings array with splice()
const toppingsCpy99Splice = toppingsCpy99.splice(3, 2);
// find the index of Avocado with indexOf() / lastIndexOf()
// console.log(toppings.lastIndexOf('Bacon'));
// console.log(toppings.indexOf('Bacon'));
// Check if hot sauce is in the toppings with includes()

// console.log(toppings.includes('hot sauce'));
// add it if it's not
if (!toppings.includes('hot sauce')) {
  toppings.push('hot sauce');
}
// flip those toppings around with reverse()
// console.log(toppings.reverse());

/*
  Callback Methods
*/
const feedbacks = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];
// find the first rating that talks about a burger with find()

function findBurg(singleFeedback) {
  return singleFeedback.comment.includes('burg');
}

function findByWord(word) {
  return function (singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
}

const feedbackBasedOnWord = feedbacks.find(findByWord('Service'));

const feedbackWithBurgsComment = feedbacks.find(findBurg);

// console.log(feedbackWithBurgsComment);
// console.log(feedbackBasedOnWord);
// find all ratings that are above 2 with filter()
const filterAboveTwo = feedbacks.filter(
  (singleFeedback) => singleFeedback.rating > 1
);
// find all ratings that talk about a burger with filter()
const filterFeedbacksBasedOnWord = feedbacks.filter(findByWord('burg'));
// Remove the one star rating however you like!

// check if there is at least 5 of one type of meat with some();

Object.values(meats).some((qty) => qty > 5);
// make sure we have at least 3 of every meat with every()
Object.values(meats).every((qty) => qty > 3);
// sort the toppings alphabetically with sort()
const sortedToppings = toppings.sort();
// sort the order totals from most expensive to least with .sort()
// Sort the prices with sort()
const numArr = [10, 5, 1, 200, 1000];
const sortedNumbers = numArr.sort(
  (firstEl, secondEl) =>
    // console.log(numArr);
    // console.log(`firstEl ${firstEl}`);
    // console.log(`secondEl ${secondEl}`);
    // console.log('==================');
    firstEl - secondEl
);

// console.log(sortedNumbers);
/*
  Looping Methods (next)
*/
