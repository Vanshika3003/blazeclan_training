-- Read all rows from Table

select * from Department;
insert into Department values(30, 'SL', 'Pune', 25);
insert into Department values(40, 'AD', 'Pune', 25);
insert into Department values(50, 'TP', 'Pune', 25);
insert into Department values(60, 'SU', 'Pune', 35);
select * from Employee;
insert into Employee Values(103, 'Suprotim', 'Director', 110000,10);
insert into Employee Values(104, 'Subodh', 'Director', 120000,10);
insert into Employee Values(105, 'Abhijit', 'Manager', 110000,10);
insert into Employee Values(106, 'Manish', 'CEO', 200000,20);
insert into Employee Values(107, 'Deepak', 'Manager', 90000,30);
insert into Employee Values(108, 'Pravin', 'Leader', 120000,40);
insert into Employee Values(109, 'Sumit', 'Leader', 340000,50);
insert into Employee Values(110, 'Sachin', 'Manager', 180000,10);
insert into Employee Values(111, 'Ravi', 'Director', 240000,20);
insert into Employee Values(112, 'Kiran', 'Leader', 260000,30);
insert into Employee Values(113, 'Dinesh', 'Leader', 670000,40);
insert into Employee Values(114, 'Vikas', 'Manager', 230000,50);
insert into Employee Values(115, 'Ajit', 'Leader', 340000,10);
insert into Employee Values(116, 'Amit', 'Director', 450000,20);
insert into Employee Values(117, 'Tejas', 'Director', 360000,30);
insert into Employee Values(118, 'Vivek', 'Manager', 130000,40);
insert into Employee Values(119, 'Anil', 'Manager', 560000,50);
insert into Employee Values(120, 'Abhay', 'Director', 550000,10);
insert into Employee Values(121, 'Jaywant', 'Director', 550000,20);
insert into Employee Values(122, 'Nandu', 'Director', 660000,30);

-- Update
Update Employee
Set Salary =  Salary + (Salary * 0.02);

select * from Employee;

Delete from Employee Where EmpNo > 120;

------------------------------------------------------------------------------------
-- Using Select Queries
-- Select Employees from DeptNo 30
select * from Employee where DeptNo=30;
-- Please specifiy Column Names in Select Query and 
-- Avoid specifying Column in Select Section if it 
-- already used in Where Clause
select EmpNo, EmpName, Designation, Salary from Employee where DeptNo=30;

-- Organize and read data otrder by EmpName (Default is ascending)
select EmpNo, EmpName, Designation, Salary from Employee where DeptNo = 10 Order by EmpName;

select EmpNo, EmpName, Designation, Salary from 
Employee where DeptNo = 10 Order by EmpName desc;








