"use strict";

// using the 'let' keyword for the Block scope
console.log('Using var');

for (var j = 0; j < 10; j++) {
  console.log('var j in loop j = ' + j);
}

console.log('Out of for..loop  j = ' + j);
console.log('Using let');

for (var _i = 0; _i < 10; _i++) {
  console.log('let i in loop i = ' + _i);
}

console.log('Out of for..loop  i = ' + i);
