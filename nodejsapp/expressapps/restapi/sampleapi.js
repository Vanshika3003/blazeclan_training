// Creating REST API using Express.js

import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 7011;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({ extended: false }));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
}));


let Employees = [
    { EmpNo: 1, EmpName: "A", DeptName: "D1" },
    { EmpNo: 2, EmpName: "B", DeptName: "D2" },
    { EmpNo: 3, EmpName: "C", DeptName: "D1" },
    { EmpNo: 4, EmpName: "D", DeptName: "D2" },
    { EmpNo: 5, EmpName: "E", DeptName: "D1" },
    { EmpNo: 6, EmpName: "F", DeptName: "D2" },
    { EmpNo: 7, EmpName: "G", DeptName: "D1" },
    { EmpNo: 8, EmpName: "H", DeptName: "D2" },
];

// Lets create REST EndPoints
instance.get("/api/employees", (req, resp) => {
    // send HTTP Status Code and the Response Object
    resp.status(200).send({
        message: 'Data Reading is Successful',
        data: Employees
    });
});

// The Get method with URL Parameter
instance.get("/api/employees/:id", (req, resp) => {
    // read URL Parameter
    let id = parseInt(req.params.id);
    console.log(id);
    if (id === 0) {
        resp.status(500).send({
            message: 'Invalid Parameter Value'
        });
    } else {
        let emp = Employees.find((e, i) => {
            return e.EmpNo === id;
        });
        console.log(JSON.stringify(emp));
        resp.status(200).send({
            message: 'Data Reading is Successful',
            data: emp
        });
    }
});

// write data using POST/PUT requests
instance.post("/api/employees", (req, resp) => {
    // read the data from the HTTP Request body
    let emp = req.body;
    console.log(`Received data = ${JSON.stringify(emp)}`);
    Employees.push(emp);
    resp.status(200).send({
        message: 'Data Reading is Successful',
        data: JSON.stringify(Employees)
    });
});


instance.put("/api/employees/:id", (req, resp) => {

    // YOUR HEADACHE

    //read id

    let id = parseInt(req.params.id);
    let new_emp = req.body;
    let emp = [];
    console.log("id is " + id);
    if (id === 0) {
        resp.status(500).send({
            message: 'Invalid Parameter Value'
        });
    } else {
        for (let i = 0; i < Employees.length; i++) {
            emp = Employees[i]
            if (emp.EmpNo === id) {
                Employees[i] = new_emp;
            }
        }
        console.log(JSON.stringify(Employees));
        resp.status(200).send({
            message: 'Data Reading is Successful',
            data: Employees
        });

    }

});
instance.delete("/api/employees/:id", (req, resp) => {

    // YOUR HEADACHE

    //read id

    let id = parseInt(req.params.id);
    if (id === 0) {
        resp.status(500).send({
            message: 'Invalid Parameter Value'
        });
    } else {
        Employees = Employees.filter(e => {
            if (e.EmpNo !== id) {
                return true;
            }
            return false;
        });

        console.log(JSON.stringify(Employees));
        resp.status(200).send({
            message: 'Data Reading is Successful',
            data: Employees

        });

    }

});



instance.get("/api/employees/search/:key/:key2", (req, resp) => {

    console.log("here3");

    //get search criteria
    let key = req.params.key;
    let key2 = req.params.key2;
    console.log("Key " + key + "Key2 " + key2);
    if (key === undefined) {

        resp.status(500).send({
            message: 'Invalid Parameter Value'
        });

    } else {
        let emp = Employees.filter(val => {
            return val.EmpName === key || val.DeptName === key2;
        });

        console.log("emp are " + JSON.stringify(emp));
        resp.status(200).send({
            message: 'Data Reading is Successful',
            data: emp
        });

    }

});
//TRYING SEARCHING WITH 2 PARAMS AND CONDITION

instance.get("/api/employees/searchbyand/:key/:key2", (req, resp) => {

    console.log("here3");

    //get search criteria
    let key = req.params.key;
    let key2 = req.params.key2;
    console.log("Key " + key + "Key2 " + key2);
    if (key === undefined) {
        resp.status(500).send({
            message: 'Invalid Parameter Value'
        });

    } else {
        let emp = Employees.filter(val => {
            return val.EmpName === key && val.DeptName === key2;
        });

        console.log("emp are " + JSON.stringify(emp));
        resp.status(200).send({
            message: 'Data Reading is Successful',
            data: emp
        });

    }

});
// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});