function makeBhelpuri(ingredient = []) {
  return new Promise(function (resolve, reject) {
    const timeToMake = 400 + ingredient.length * 200;
    if (ingredient.includes('Aaloo')) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Do not use Aaloo 🥔');
    }
    setTimeout(() => {
      resolve(`Here is your bhelpuri 🥫 with ${ingredient.join(', ')}`);
    }, timeToMake);
  });
}

const handleError = (error) => {
  console.log(error);
};

// hanumangarhBhelpuriPromise
//   .then(function (bhelpuri) {
//     console.log(bhelpuri);
//   })
//   .catch(handleError);

const hanumangarhBhelpuriPromise = makeBhelpuri(['spice', 'onion', 'Aaloo']);
const sukiBhelpuriPromise = makeBhelpuri();
const ganganagarBhelpuriPromise = makeBhelpuri(['mithi chatni']);

// const megaBhelpuriPromise = Promise.race([
//   hanumangarhBhelpuriPromise,
//   ganganagarBhelpuriPromise,
//   sukiBhelpuriPromise,
// ]);

const megaBhelpuriPromise = Promise.allSettled([
  ganganagarBhelpuriPromise,
  sukiBhelpuriPromise,
  hanumangarhBhelpuriPromise,
]);

megaBhelpuriPromise
  .then((bhelpuri) => {
    console.log(bhelpuri);
  })
  .catch(handleError);

// megaBhelpuriPromise.then(function (bhelpuries) {
//   console.log(bhelpuries);
// });

// makeBhelpuri(['spice', 'onion'])
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//     return makeBhelpuri(['spice', 'dhaniya']);
//   })
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//     return makeBhelpuri(['spice', 'dhaniya', 'peanuts', 'Aaloo', 'lemon']);
//   })
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//     return makeBhelpuri();
//   })
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//   })
//   .catch(handleError);

// const hanumangarhBhelpuriPromise = makeBhelpuri(['spice', 'onion']);
// const ganganagarBhelpuriPromise = makeBhelpuri([
//   'spice',
//   'dhaniya',
//   'mithi chatni',
// ]);

// hanumangarhBhelpuriPromise.then(function (bhelpuri) {
//   console.log(bhelpuri);
// });
// ganganagarBhelpuriPromise.then(function (bhelpuri) {
//   console.log(bhelpuri);
// });
