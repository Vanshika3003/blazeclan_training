import express from 'express';
//import cors from 'cors';

const PORT = process.env.PORT || 7013;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({ extended: false }));
// configure CORS
// instance.use(cors({
//     origin: "*",
//     methods: "*",
//     allowedHeaders: "*"
// }));

// import dataaccess

import DataAccess from './dataaccess/dataaccess.js';
import DataAccessEmployee from './dataaccess/employee.js';

let ds = new DataAccess();
let employee = new DataAccessEmployee();
// lets create REST API

instance.get('/api/departments', ds.getData);
instance.get('/api/departments/:id', ds.getDataById);
instance.post('/api/departments', ds.postData);
instance.put('/api/departments/:id', ds.putData);
instance.delete('/api/departments/:id', ds.deleteData);
instance.get('/api/employee', employee.getData);
instance.get('/api/employee/:id', employee.getDataById);
instance.post('/api/employee', employee.postData);
instance.put('/api/employee/:id', employee.putData);
instance.delete('/api/employee/:id', employee.deleteData);
instance.get('/api/employeeByName/:empname/:deptname', employee.getEmployeesByAnd);
instance.get('/api/employeeByOR', employee.getEmployeesByOR);

instance.post('/api/deptEmp', employee.postDeptEmp);




// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});
export default instance;