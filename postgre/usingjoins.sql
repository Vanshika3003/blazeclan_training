-- Using Joins
-- CrossJoin:  Matches every row of First Table with every row of second table
-- e.g. t1 is first table and t2 is second table then
-- cros joins will be t1*t2 to generate larget rowset

Select EmpNo, EmpName, Designation, Salary, DeptName, Location, Capacity
From Employee Cross Join Department;

-- INNER JOIN
-- Find the match of Rows from First Table to Second Table
-- To Print the data, comparing each record based on a 
-- Matching Column
-- First Table: Department and Second Table Employee
select DeptName, Location, EmpNo,EmpName
From Department Inner Join Employee
on Department.DeptNo = Employee.DeptNo;
-- First Table: Employee and Second Table Department
select DeptName, Location, EmpNo,EmpName
From Employee Inner Join Department
on Department.DeptNo = Employee.DeptNo;

-- Left Outer Join 
-- Read each row from Left Table and match with
-- Rows from Right Table, if no match found, then
-- Print Null for Right Table
select DeptName, Location, EmpNo,EmpName
From Department Left Outer Join Employee
on Department.DeptNo = Employee.DeptNo;

-- Right Outer Join (Exactly opposite to Left Outer Join)
select DeptName, Location, EmpNo,EmpName
From Employee Right Outer Join Department
on Department.DeptNo = Employee.DeptNo;


-- Full Outer Join
select DeptName, Location, EmpNo,EmpName
From Employee Full Outer Join Department
on Department.DeptNo = Employee.DeptNo;