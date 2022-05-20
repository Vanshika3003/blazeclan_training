"use strict";

var employee = [{
  EmployeeID: 1,
  EmployeeName: "Vanshika",
  deptName: "IT",
  Designation: "Engineer",
  Salary: 20
}, {
  EmployeeID: 2,
  EmployeeName: "Deeksha",
  deptName: "Accounts",
  Designation: "Clerk",
  Salary: 220
}, {
  EmployeeID: 3,
  EmployeeName: "Rahul",
  deptName: "Accounts",
  Designation: "Operator",
  Salary: 1200
}, {
  EmployeeID: 4,
  EmployeeName: "Shruti",
  deptName: "Admin",
  Designation: "Manager",
  Salary: 4200
}, {
  EmployeeID: 5,
  EmployeeName: "Kabir",
  deptName: "HRD",
  Designation: "Manager",
  Salary: 1200
}, {
  EmployeeID: 6,
  EmployeeName: "Manav",
  deptName: "HRD",
  Designation: "Head Manager",
  Salary: 9200
}];
console.log("employees", employee);
var departments = ['IT', 'Accounts', 'Admin', 'HRD'];
var f = employee.reduce(function (prevRec, curRec) {
  if (curRec.deptName in prevRec) {
    console.log("pre", prevRec); // lets handle prevRec as Object with iterated records from 
    // the Array and add the counter for curRec in prevRec by 1

    prevRec[curRec.deptName]++; // Increment
  } else {
    prevRec[curRec.deptName] = 1;
  } // return the final result


  return prevRec;
}, {});
console.log(JSON.stringify(f));
var frequency = employee.reduce(function (prevRec, curRec) {
  if (curRec.Designation in prevRec) {
    console.log("pre", prevRec); // lets handle prevRec as Object with iterated records from 
    // the Array and add the counter for curRec in prevRec by 1

    prevRec[curRec.Designation]++; // Increment
  } else {
    prevRec[curRec.Designation] = 1;
  } // return the final result


  return prevRec;
}, {}); // Print the result

console.log(JSON.stringify(frequency));
