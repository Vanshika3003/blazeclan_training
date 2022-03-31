var names = ["James Bond", "Ethun Hunt", "Jack Reacher", "Indiana Jones", "Jason Bourn", "Dr. No", "Arnest Stavallo Bloffeld", "Moneypenny", "Kitty", "Tifani Case", "Sinthiya Bond", "Onthetop", "Stella"]; 
// Using  ES 6 Iterator using for..of loop
for(let n of names){
    console.log(`Name = ${n}`);
}   

// Array ES 6 methods
// Iteration Methods that do not change the original array, forEach(function-callback)
function printValues(n,idx){
    console.log(`Value ate index  ${idx} is = ${n}`);
}
// passing an explicitly defined function   
names.forEach(printValues);
console.log('Passing Implicit Callback function');
names.forEach(function(n,idx){
    console.log(`Value ate index  ${idx} is = ${n}`);
});
// Using an Arrow Operator
// Wer can use arrow Operator as input parameter to a function, if the function is accepting callback function as input parameter 
console.log('Using Arrow Operator');
names.forEach((n,idx)=>{
    console.log(`Value ate index  ${idx} is = ${n}`);
});

// Use the filter() method to return records from array based on condition match
console.log('Using Filter');
let res = names.filter((n,idx)=>{
    // return all names having first character as 'J'
    return n.startsWith('J')
});
console.log(`String Start with J is = ${res}`);

// Using find() only in ES 6 High Level JavaScript
// return a first match of the record from Array
let obj = names.find(n=>n.startsWith('O'));
console.log(`Names with first character as O = ${obj}`);