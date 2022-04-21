import DataAccess from './restaccess.js';

let obj = new DataAccess();

// define server parameters

const serverOptions = {
    host: 'localhost',
    port: 7011,
    path: '/api/departments',
    method: 'GET'
};
// receive the promise and handle it
obj.getData(serverOptions).then((response)=>{
    console.log(`Received Response = ${response}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});