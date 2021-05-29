const age = 55;

// if (age >= 60) {
//   console.log('you are in 60s');
// } else if (age >= 50) {
//   console.log('you are in 50s');
// } else if (age >= 40) {
//   console.log('you are in 40s');
// } else {
//   console.log('enjoy you are young');
// }

// switch (true) {
//   case age >= 60:
//     console.log('you are in 60s');
//     break;
//   case age >= 50:
//     console.log('you are in 50s');
//     break;
//   case age >= 40:
//     console.log('you are in 40s');
//     break;
//   default:
//     console.log('enjoy');
//     break;
// }

// function slugify(sentance, lowercase) {
//   let slug = sentance.replace(/\s/g, '-');
//   if (lowercase) {
//     slug = slug.toLowerCase();
//   }
//   return slug;
// }

// const isAGoodName = 'sameer'.includes('sam');

// if (isAGoodName) {
//   console.log('good name');
// } else {
//   console.log('Not a good name');
// }

// truthy and falsy
// coercion

// 0, 1, -4, undefined, null, NaN, "", "Pankaj", "0", " ", [], {}

if (Object.keys({}).length) {
  console.log('you have enterd a name');
} else {
  console.log('you have not enterd a name');
}
// Truthy is winner
// 1
// -4
// 'name'
// '0'
// ' '
// []
// {}

// Falsy is looser
// 0
// undefined
// null
// NaN
// ''
