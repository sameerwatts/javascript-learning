const namesArr = ['sameer', 'karan', 'pankaj'];
// const numbers = [1, 2, 3, 4, 5, 6];
// const numbersReverse = [...numbers].reverse();
// // numbersReverse = numbersReverse.reverse();
// console.log(numbers);
// console.log(numbersReverse);

// const numbersSlice = numbers.slice(2);
// console.log(numbersSlice);
// console.log(numbers);

// const numberSplice = numbers.splice(2, 3);
// console.log(numberSplice);
// console.log(numbers);

// namesArr.push('pankaj');
// namesArr.pop();
// namesArr.unshift('rachit');
// namesArr.shift();

// const cars = ['Honda', 'Hundai', 'Toyota', 'Maruti', 'Hundai'];
// const comments = [
//   {
//     id: 121,
//     comment: 'Dil da ni mada',
//   },
//   {
//     id: 345,
//     commnet: 'Janni jaani',
//   },
//   {
//     id: 257,
//     comment: `it's a boy badshah`,
//   },
//   {
//     id: 576,
//     comment: 'forty seven',
//   },
// ];

// // const newCars = [...cars.slice(0, 2), 'Kia', ...cars.slice(2)];
// // // ["Honda", "Hundai","Kia","Toyota", "Maruti"];

// // const newCarsRemoveToyota = [...newCars.slice(0, 3), ...newCars.slice(4)];

// function deleteItemsFromListUsingId(arr, arrId) {
//   const index = arr.findIndex((arrItem) => arrItem.id === arrId);
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }
const Cars = ['Nano', 'Volvo', 'BMW', 'Nano', 'VW', 'Nano'];

// function getAllIndexes(arr, val) {
//   const indexes = [];
//   let i = -1;
//   while ((i = arr.indexOf(val, i + 1)) != -1) {
//     indexes.push(i);
//   }
//   return indexes;
// }

function removeNano(arr, itemToRemove) {
  const arrCpy = [...arr];
  arrCpy.forEach((item, index) => {
    if (item.toLowerCase() === itemToRemove.toLowerCase()) {
      arrCpy.splice(index, 1);
    }
  });
  return arrCpy;
}

// function deleteItemsFromList(arr, carToRemove) {
//   const indexesList = getAllIndexes(arr, carToRemove);
//   let removedItemArr = [];
//   indexesList.forEach((indexItem, index, arry) => {
//     removedItemArr = [
//       ...arr.slice(0, indexItem),
//       ...arr.slice(indexItem + 1, arry[index + 1]),
//     ];
//     console.log(removedItemArr);
//   });
//   return removedItemArr;
//   //   const index = arr.findIndex((arrItem) => arrItem.id === arrId);
//   //   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

// const newCars = deleteItemsFromList(Cars, 'Nano');
// console.log(newCars);
