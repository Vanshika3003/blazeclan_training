"use strict";

// The Reduce function
// Self-Iterative function that starts from First-Record and Navigate to Last-Record
// to Precess the data
// Parameters
// Parameter 1 as Callback function with Following Parameters
// previousValue: The 0th index from array and this value will be updated based on 
// logic of array processing provided to reduce() function
// currentValue: The Current Value under Processing
// currentIndex: The Current Position of the record being read and processed
// array: The Array being Processed aka a 'self' object, the array object itself on
// which the reduce() method is called
// Parameter 2 is an object which is the initial value of the result expected from reduce() function
// By default the initialValue is the array on which the reduce() is invoked and then it will be updated to the 
// result  
// Array.reduce((previousValue, currentValue, currentIndex, array)=>{}, {}); 
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
data.forEach(function (n, i) {
  sum += n;
});
console.log("Sum = ".concat(sum)); // USing reduce() function to calculate sum of all value from array

sum = data.reduce(function (prevValue, curValue, index, val) {
  console.log("Previous Value ".concat(prevValue, ", Current Value = ").concat(curValue, ", index = ").concat(index, " value = ").concat(val)); // keep adding the curValue into the prevValue and iterate over the next
  // the return statement will update the 'state' (aka value) of the prevValue  

  return prevValue + curValue;
});
console.log("Sum with reduce() method = ".concat(sum)); // Lets use the Array.reduce() to find out the frequency of values in array

var records = ['A', 'B', 'C', 'D', 'E', 'B', 'C', 'D', 'E', 'A', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'H', 'E', 'G', 'F'];
var frequency = records.reduce(function (prevRec, curRec) {
  console.log("Prev Rec = ".concat(JSON.stringify(prevRec), " and Cur Rec = ").concat(JSON.stringify(curRec))); // use the JavaScript 'in' operator for pattern matching from curRec to prevRec

  if (curRec in prevRec) {
    // lets handle prevRec as Object with iterated records from 
    // the Array and add the counter for curRec in prevRec by 1
    prevRec[curRec]++; // Increment

    console.log("Match Found ".concat(JSON.stringify(prevRec)));
  } else {
    // set the frequency as 1
    prevRec[curRec] = 1;
  } // return the final result


  return prevRec;
}, {}); // Print the result

console.log("Per record frequency in array is = ".concat(JSON.stringify(frequency)));
var Employees = [{
  eno: 1,
  ename: 'A',
  dname: 'D1'
}, {
  eno: 2,
  ename: 'B',
  dname: 'D2'
}, {
  eno: 3,
  ename: 'C',
  dname: 'D3'
}, {
  eno: 4,
  ename: 'E',
  dname: 'D1'
}, {
  eno: 5,
  ename: 'F',
  dname: 'D2'
}, {
  eno: 6,
  ename: 'G',
  dname: 'D3'
}, {
  eno: 7,
  ename: 'H',
  dname: 'D1'
}, {
  eno: 8,
  ename: 'I',
  dname: 'D2'
}, {
  eno: 9,
  ename: 'J',
  dname: 'D3'
}, {
  eno: 10,
  ename: 'K',
  dname: 'D1'
}, {
  dname: 'D4'
}]; // records: Array on which group will be created
// property: The name of the property based on which group will be created  

function crateEmployeeGroupByDname(records, property) {
  // groupResult: Initial State {}
  // record: The current record to be read
  var result = records.reduce(function (groupResult, record) {
    console.log("Current State ".concat(JSON.stringify(groupResult), " and current record ").concat(JSON.stringify(record))); // read the key on which the group will be created on the current record

    var key = record[property]; // currentRecord[dname] this will be value of the property for the record
    // key will be D1, D2, D3

    console.log("Key of the record = ".concat(key)); // match each record with the previous record key in the groupResult state
    // because groupResult has the resultant records

    if (!groupResult[key]) {
      groupResult[key] = []; // if the match does not found based on key makes the resultant as empty
    } // if found then add the matched record in the resultant state


    groupResult[key].push(record);
    console.log("After match found for push state is = ".concat(JSON.stringify(groupResult))); // return the final group state

    return groupResult;
  }, {});
  return result;
}

;
var group = crateEmployeeGroupByDname(Employees, 'dname');
console.log("Group by Property is = ".concat(JSON.stringify(group)));
