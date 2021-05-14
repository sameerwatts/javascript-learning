// js types: string, number, boolean, null, undefined, symbol, object;
/* eslint-disable*/

//type of strings
const name = 'Sameer';
const last = "Watts";
const color = `green`;

// creating sentances
const sentance1 = 'she\'s so cool'; 
const sentance2 = "she\'s so \"cool\""; 
const sentance3 = `she's so "cool"`;

// creating multiple line sentances
const song1 = 'Ohh\
\
yeah\
\
i love\
\
this song';
const song2 = `Ohh

yeah

i love

this song`;

// Interpolation(adding variable in string) and concatination
const hello1 = 'hello my name is '+ name +'. Nice to meet you!'; // first approach
let hello2 = 'hello my name is ';                                // second approach
hello2 = hello2 + name;
hello2 = hello2 + '. Nice to meet you!!';
const hello3 = `hello my name is ${name}. Nice to meet you!!!` // third approach
const age = `hello i am ${1+22} years old.`

const html = `
<div>
    <h2>${name}</h2>
    <p>${hello3}</p>
    <p>${age}</p>
<div>
`;
console.log(html);

document.body.innerHTML = html;