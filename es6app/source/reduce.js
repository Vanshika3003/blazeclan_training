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

let data = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
data.forEach((n,i)=>{
    sum+=n;
});
console.log(`Sum = ${sum}`);
// USing reduce() function to calculate sum of all value from array
sum = data.reduce((prevValue, curValue, index, val)=>{
    console.log(`Previous Value ${prevValue}, Current Value = ${curValue}, index = ${index} value = ${val}`);
    // keep adding the curValue into the prevValue and iterate over the next
    // the return statement will update the 'state' (aka value) of the prevValue  
    return prevValue+curValue;
}); 
console.log(`Sum with reduce() method = ${sum}`);

// Lets use the Array.reduce() to find out the frequency of values in array

let records = ['A', 'B', 'C', 'D', 'E', 'B', 'C', 'D', 'E', 'A', 'E', 'D', 'C', 'B', 'A', 'G','F', 'H', 'E', 'G', 'F'];

let frequency = records.reduce((prevRec,curRec)=>{
    console.log(`Prev Rec = ${JSON.stringify(prevRec)} and Cur Rec = ${JSON.stringify(curRec)}`);
    // use the JavaScript 'in' operator for pattern matching from curRec to prevRec
    if(curRec in prevRec){
        // lets handle prevRec as Object with iterated records from 
        // the Array and add the counter for curRec in prevRec by 1
        prevRec[curRec]++; // Increment
        console.log(`Match Found ${JSON.stringify(prevRec)}`); 
    } else {
        // set the frequency as 1
        prevRec[curRec] = 1;
    }
    // return the final result
    return prevRec;
},{});
// Print the result

console.log(`Per record frequency in array is = ${JSON.stringify(frequency)}`);