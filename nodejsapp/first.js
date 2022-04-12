console.log('Hello World');

function operations(str, c){
    if(c === 'L' || c === 'l') return str.toLowerCase();
    if(c === 'U' || c === 'u') return str.toUpperCase();
    return str;
}

console.log( operations('Node.js', 'l'));

console.log( operations('Node.js', 'u'));

let Employees = [
    {EmpNo:1,EmpName:'A', DeptName:'D1'},
    {EmpNo:2,EmpName:'B', DeptName:'D2'},
    {EmpNo:3,EmpName:'C', DeptName:'D1'},
    {EmpNo:4,EmpName:'D', DeptName:'D2'}
];


let res = Employees.filter((e)=>{ return e.DeptName === 'D1'});
console.log(JSON.stringify(res));

class Utilities {
    sort(arr){
        return arr.sort((a,b)=> {return a - b;});
    }
    reverse(arr){
        return arr.sort((a,b)=> {return b - a;});
    }
}

let arr = [2,3,4,1,5,7,6.9,8];
let obj = new Utilities();
console.log(`Sort = ${JSON.stringify(obj.sort(arr))}`);
console.log(`Reverse = ${JSON.stringify(obj.reverse(arr))}`);