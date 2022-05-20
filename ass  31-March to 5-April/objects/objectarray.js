let o1 = {a:10};
let o2 = {b:10};
let o3 = {c:10};
let o4 = {d:10};
let o5 = {e:10};

let objarr = [o1,o2,o3,o4,o5];

console.log(`objarr = ${JSON.stringify(objarr)}`);
o4 = null; // kill o4
// The value of o4 will still be in array
console.log(`After killing o4 objarr = ${JSON.stringify(objarr)}`); // dirty value for o4 still exist
// lets re-birth to 04
o4 = {d:10};
// lets push o4 in array
objarr.push(o4);
console.log(`After pushing o4 objarr = ${JSON.stringify(objarr)}`); // dirty value of earlier o4 and re-birth o4 will be present  into array