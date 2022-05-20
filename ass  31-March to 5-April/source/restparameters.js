// the rest parameters aka 'spread' operators is the great mechanism to build an immutable 
// object in ES 6 that keeps on adding new records along with new values in existing object

let obj = {a:10,b:20}
console.log(`Original ${JSON.stringify(obj)}`);
// lets spread it by adding new properties
obj = {...obj, c:30,d:40};
console.log(`With Spread ${JSON.stringify(obj)}`);

let arr = [10,20]
console.log(arr);

arr = [...arr, 30,40,50,60];
console.log(arr);


function addValues(...values){
    let sum = 0;
    if(values.length > 0) {
        values.forEach((v,i)=>{
            sum+=v;
        });
    } 
    return sum;
}

console.log(`Add 3 ${addValues(2,3,4)}`);
console.log(`Add 4 ${addValues(2,3,4,5)}`);