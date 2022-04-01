let obj1 = {x:1};
console.log(`obj1.x = ${obj1.x}`);
// Assign obj1 tp obj2
let obj2 = obj1; // These points to same memory area 
console.log(`After assign obj1.x = ${obj1.x} and obj2.x = ${obj2.x}`);
//Lets modify obj2.x
obj2.x = 100; 
console.log(`After Modification of obj2.x to 100,  obj1.x = ${obj1.x} and obj2.x = ${obj2.x}`);

// Lets kill obj1, obj2 is still alive and hence will still hold values
obj1 = null;
console.log(`After Killing obj1 obj2 will be ${obj2.x}`);
// console.log(`After killing of obj1,  obj1.x = ${obj1.x} and `); // error

// Lets rebirth the obj1
obj1 = {y:80};
console.log(`Re-birth of obj1 = ${obj1.y}`);





// If you want to create an object based on schema of other object then use "Object.assign()"
// Parameter 1 : a target object that will be created based on source object
// Parameter 2 :  a Source object based on which the target object will be created   
let obj3 = Object.assign({}, obj1); // obj1 and obj3 will point to different locations
console.log(`After assign obj1.x = ${obj1.x} and obj3.x = ${obj3.x}`);
// Lets modify the obj3.x
obj3.x = 300;
console.log(`After Modification of obj3.x to 300,  obj1.x = ${obj1.x} and obj3.x = ${obj3.x}`);
