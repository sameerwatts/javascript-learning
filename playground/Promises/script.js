function makeBhelpuri(ingredient = []) {
  return new Promise(function (resolve, reject) {
    const timeToMake = 400 + ingredient.length * 200;
    setTimeout(() => {
      resolve(`Here is your bhelpuri 🥫 with ${ingredient.join(', ')}`);
    }, timeToMake);
  });
}

const hanumangarhBhelpuriPromise = makeBhelpuri(['spice', 'onion']);
const sukiBhelpuriPromise = makeBhelpuri();
const ganganagarBhelpuriPromise = makeBhelpuri([
  'spice',
  'dhaniya',
  'mithi chatni',
  'Aaloo',
  'spice',
  'dhaniya',
  'mithi chatni',
  'Aaloo',
  'spice',
  'dhaniya',
  'mithi chatni',
  'Aaloo',
]);

const megaBhelpuriPromise = Promise.race([
  hanumangarhBhelpuriPromise,
  ganganagarBhelpuriPromise,
  sukiBhelpuriPromise,
]);

megaBhelpuriPromise.then(function (bhelpuries) {
  console.log(bhelpuries);
});

// makeBhelpuri(['spice', 'onion'])
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//     return makeBhelpuri([
//       'spice',
//       'dhaniya',
//       'mithi chatni',
//       'spice',
//       'dhaniya',
//       'mithi chatni',
//       'spice',
//       'dhaniya',
//       'mithi chatni',
//       'spice',
//       'dhaniya',
//       'mithi chatni',
//       'spice',
//       'dhaniya',
//       'mithi chatni',
//     ]);
//   })
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//     return makeBhelpuri(['spice', 'dhaniya', 'peanuts', 'lemon']);
//   })
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//     return makeBhelpuri();
//   })
//   .then((bhelpuri) => {
//     console.log(bhelpuri);
//   });

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
