import async from 'async';
import chai from 'chai';
// import request
import request from 'request';
// import instance from the service
// and running the service
import instance from '../apiorm.js';

// lets define an instance of expect objet from 'chai'
let expect = chai.expect;

const testdata = {
    deptno: 1,
    deptname: "IT",
    location: "Hyderabad",
    capacity: 23
};

let Employees = [
    {
        "deptno": 1,
        "deptname": "IT",
        "location": "Hyderabad",
        "capacity": 23
    },
    {
        "deptno": 2,
        "deptname": "IT",
        "location": "Pune",
        "capacity": 73
    },
    {
        "deptno": 3,
        "deptname": "IT",
        "location": "Banglore",
        "capacity": 738
    },
    {
        "deptno": 4,
        "deptname": "HR",
        "location": "Delhi",
        "capacity": 45
    },
    {
        "deptno": 5,
        "deptname": "Accountant",
        "location": "Chandigarh",
        "capacity": 123
    },
    {
        "deptno": 6,
        "deptname": "Operations",
        "location": "Chandigarh",
        "capacity": 123
    },
    {
        "deptno": 10,
        "deptname": "Mavish",
        "location": "Thane",
        "capacity": 65
    },
    {
        "deptno": 12,
        "deptname": "IT",
        "location": "Delhi",
        "capacity": 45
    },
    {
        "deptno": 14,
        "deptname": "Madhav",
        "location": "Nagpur",
        "capacity": 75
    },
    {
        "deptno": 60,
        "deptname": "finance",
        "location": "Mysore",
        "capacity": 923
    },
    {
        "deptno": 89,
        "deptname": "finance",
        "location": "",
        "capacity": 923
    },
    {
        "deptno": 109,
        "deptname": "IT",
        "location": "Hyderabad",
        "capacity": 23
    },
    {
        "deptno": 110,
        "deptname": "IT",
        "location": "Hyderabad",
        "capacity": 23
    },
    {
        "deptno": 189,
        "deptname": "finance",
        "location": "",
        "capacity": 923
    },
    {
        "deptno": 401,
        "deptname": "HR",
        "location": "Delhi",
        "capacity": 45
    }
];

// the test suite
describe('The Test Suit for the Node.,js REST API Tests ', () => {

    // the test case for get request
    // done() the callback that will monitor an async execution
    it('the api must return status code as 200', (done) => {
        // arrange the call using teh request object
        // act : is the request object
        // error: An Error during the communication
        // response: The response received from the service (response header)
        // body: The response body
        request("http://localhost:7013/api/departments", (error, response, body) => {
            // assert the response as Status code as 200
            expect(response.statusCode).to.equal(200);
            // complete the an async operation+
            done();
        })
    });
    // the test for the employee object return from the REST API
    it('the api must return department object', (done) => {

        request("http://localhost:7013/api/departments/1", (error, response, body) => {
            let data = JSON.stringify((JSON.parse(body)).data);
            expect(data).to.equal(JSON.stringify(testdata));
            done();
        })
    });
    it('the collection length must be increased by 1 after the post request', (done) => {

        let record = {
            deptno: 402,
            deptname: "HR",
            location: "Delhi",
            capacity: 45
        }
        request.post(`http://localhost:7013/api/departments`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(record)
        }, (error, response, body) => {
            let data = ((JSON.parse(body)).data);
            console.log("data is", { data });
            let receivedLength = (JSON.parse(data)).length;
            expect(receivedLength).to.equal(Employees.length + 1);
            done();
        });
    });
});