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

// first approach
// async function getBhel() {
//   try {
//     const bhelpuri1 = await makeBhelpuri(['mithi chatni']);
//     console.log(bhelpuri1);
//     const bhelpuri2 = await makeBhelpuri(['Aaloo', 'mithi chatni']);
//     console.log(bhelpuri2);
//     const bhelpuri3 = await makeBhelpuri(['spices']);
//     console.log(bhelpuri3);
//   } catch (err) {
//     console.log('Remove Aaloo');
//     console.log(err);
//   }
// }
// async function getBhel() {
//   const bhelpuri1 = await makeBhelpuri(['mithi chatni']);
//   console.log(bhelpuri1);
//   const bhelpuri2 = await makeBhelpuri(['Aaloo', 'mithi chatni']);
//   console.log(bhelpuri2);
//   const bhelpuri3 = await makeBhelpuri(['spices']);
//   console.log(bhelpuri3);
// }
// getBhel().catch(handleError);

async function getBhel() {
  const bhelpuri1Promise = makeBhelpuri(['mithi chatni']);
  const bhelpuri2Promise = makeBhelpuri(['Aaloo', 'mithi chatni']);
  const bhelpuri3Promise = makeBhelpuri(['spices']);
  const allBhelPromise = Promise.all([
    bhelpuri1Promise,
    bhelpuri2Promise,
    bhelpuri3Promise,
  ]);
  const allBhel = await allBhelPromise;
  console.log(allBhel);
}

function makeSafeBhel(fn, errorHandlingFn) {
  return function () {
    fn().catch(errorHandlingFn);
  };
}
const mySpicySafeBhel = makeSafeBhel(getBhel, handleError);

// safe
mySpicySafeBhel();

// // unsafe
// getBhel();

// const bhelPromise = getBhel();
// console.log(bhelPromise);
// const hanumangarhBhelpuriPromise = makeBhelpuri(['spice', 'onion', 'Aaloo']);
// const sukiBhelpuriPromise = makeBhelpuri();
// const ganganagarBhelpuriPromise = makeBhelpuri(['mithi chatni']);
