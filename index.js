// const lodash = require('lodash');
// const array = require('./array')

// // let array = [1, 2, 3, 3, 3, 4, 4, 5, 6];

// const novoArray1 = lodash.uniq(array);

// console.log(novoArray1); 

//para nao usar lodash.uniq podemos desestruturar

let {uniq} = require('lodash');
const array = require('./array');

let novoArray = uniq(array);

console.log(array); 
console.log(novoArray);