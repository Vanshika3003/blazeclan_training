let myMap = new Map();
// Lets add Key Value pairs

myMap.set(1, {EmpNo:101,EmpName:'ABC'});
myMap.set(2, {EmpNo:102,EmpName:'DEF'});
myMap.set(3, {EmpNo:103,EmpName:'GHI'});
myMap.set(4, {EmpNo:104,EmpName:'JKL'});
myMap.set(5, {EmpNo:105,EmpName:'MNO'});
myMap.set(6, {EmpNo:106,EmpName:'PQR'});
myMap.set(6, {EmpNo:107,EmpName:'STU'}); // Duplicate Key

// 1. Lets print size of Map
console.log(`Size of Map = ${myMap.size}`);
// Lest print data
for(const record of myMap.entries()){
    console.log(`Key = ${record[0]} and value = ${JSON.stringify(record[1])}`);
}

// lets delete a record

myMap.delete(6);
for(const record of myMap.entries()){
    console.log(`Key = ${record[0]} and value = ${JSON.stringify(record[1])}`);
}
