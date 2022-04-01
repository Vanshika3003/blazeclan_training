let setValues = new Set();
// Lets add data

setValues.add(10);
setValues.add(20);
setValues.add(30);
setValues.add(40);
setValues.add(50);
setValues.add(60);
setValues.add(10); // duplicate

// Lets print the size of Set
console.log(`Records in set are = ${setValues.size}`); 
// Print all data from set
console.log(setValues.entries());
// Print Key Values based on entries
for(let record of  setValues.entries()){
    console.log(`Key = ${record[0]} and value = ${record[1]}`);
}

// Check whether a record exists into the Set
console.log(`Does the record exists = ${setValues.has(20)}`);
console.log(`Does the record exists = ${setValues.has(200)}`);

// Print Keys and Values

for(let key of setValues.keys()) {
    console.log(`Key = ${key}`);
}
console.log();
for(let value of setValues.values()) {
    console.log(`Value = ${value}`);
}