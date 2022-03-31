// using the 'let' keyword for the Block scope

// The identifier declared using 'let' will be accessible only in declaring block
console.log('Using var');
for(var j=0;j<10;j++){
    console.log('var j in loop j = ' + j);
}

console.log('Out of for..loop  j = ' + j);

console.log('Using let');
for(let i=0;i<10;i++){
    console.log('let i in loop i = ' + i);
}
console.log('Out of for..loop  i = ' + i);