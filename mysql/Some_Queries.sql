-- Using Some Queries
select * from Employee where DeptNo=30;

select EmpNo, EmpName, Designation, Salary from Employee where DeptNo=30;

-- Creating a COmputed Column
select EmpNo, EmpName, Designation, Salary, Salary * 0.06 as Tax from Employee ;
-- Scalar Functions
-- While using Scalar Function, make sure that the Select 
-- Statement does not have Key Dependant Column
-- Key Dependant Column, is the column that is directly dependant on Primary Key

-- Please avoid the following
select EmpName, Count(*) from Employee;
-- Instead use the following
Select Count(*) From Employee; -- Just read the Count
-- OR using Where Condition to Reduce number of records from the Table
Select Count(*) From Employee where DeptNo=30;
-- OR Use the Group By (Internally this will use the The Group Key with Distcinct values for Goup Column)
Select Count(*) From Employee Group By DeptNo;
-- Use the Groups for Reading Data or performing the Oepration of Distinct rows in Table 
-- The DeptNo can be used here because it is Independant Key from the Primary Key
select DeptNo, Max(Salary) from Employee Group By DeptNo;
-- Groups with Inner Join
select DeptName, Max(Salary) as Salary from Department, Employee 
Where Department.DeptNo = Employee.DeptNo
Group By Employee.DeptNo; -- Group Key Independant to the Primry Key from the Child Table

Select Max(Salary) from Employee;

Select * from Employee;

-- Second Max for All Employees and Second Max for Each Department

-- Second Max Salary for Employee 
Select  Max(Salary) as Max_Salary from Employee
where Salary < (Select Max(Salary) from Employee);  

-- Second Max Salary for Employee for Each Dept 
Select DeptNo,  Max(Salary) as Max_Salary from Employee
where Salary < (Select Max(Salary) from Employee) Group By DeptNo; 

 
Select Sum(Salary) from Employee; 

 
Select DeptNo, Sum(Salary) from Employee Group By DeptNo; 

-- Using Order By
Select * From Employee Order By Salary;

Select * From Employee Order By Salary Desc; 



