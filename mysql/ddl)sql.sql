-- Create Darabase
Create Database Enterprize;
-- Use the Database tio Create Database Objects
-- Table (Columns, Constratints, Relationships), Stored Procedures, Triggers, Functions, etc.

Use Enterprize;
-- 1. Create a Table
create Table Department (
  DeptNo int Primary Key,
  DeptName varchar(100) Not Null,
  Location varchar(100) Not Null
);

-- 2. Alter Table by adding a new Column in it
Alter Table Department Add Column Capcity int not null;  
-- 3. Alter Table by Renaming the Column
Alter Table Department
Change Capcity Capacity int not null;

Select * from Department;


insert into Department values(10, 'IT', 'Pune', 2500);
insert into Department values(20, 'HR', 'Pune', 250);
insert into Department values(30, 'SL', 'Pune', 100);
insert into Department values(40, 'AD', 'Pune', 55);
insert into Department values(50, 'TP', 'Pune', 45);
insert into Department values(60, 'SU', 'Pune', 35);


Create Table Employee(
  EmpNo int Primary Key,
  EmpName varchar(200) Not Null,
  Designation varchar(100) Not null,
  Salary int Not Null,
  DeptNo int Not Null,
  constraint FK_DeptNo -- Constraints
			  -- Child COlumn Name references ParentTable (Primary Key of the Parent Table)	
  foreign key (DeptNo) references Department(DeptNo)
);


insert into Employee Values(101, 'Mahesh', 'Director', 510000,10);
insert into Employee Values(102, 'Tejas', 'Manager', 12000,10);
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

Select * From Employee;

-- Create a Table with Identity Key (aka a Key that will have Auto_Increment)

Create Table Employee_Audit (
  Audit_Id int auto_increment Primary Key,
  EmpNo int not null,
  TransactionDate datetime default null,  -- Setting the Fefault
  Operations varchar(100) default null
);

Drop Table Employee_Audit;
-- Lets create a Trigger that will Monitor any DL Oparatoins on Employrr Table
Create Trigger Before_Employee_Created
before Update on Employee -- Before updating the Employee table
For Each Row -- Monitoe each row in Employee table for updates
	Insert into Employee_Audit
		Set Operations = 'Update Statement',
        EmpNo = OLD.EmpNo,
        TransactionDate = Now();
-- Lets update the Reccord in Employe Table
Update Employee Set Salary = Salary + (Salary * 0.1) 
Where EmpNo = 101;

Select * From Employee_Audit;


Create Trigger After_NewEmployee_Created
before Insert on Employee -- Before Inserting a new Row the Employee table
For Each Row -- Monitoe each row in Employee table for updates
	Insert into Employee_Audit
		Set Operations = 'Insert Statement',
        EmpNo = New.EmpNo,
        TransactionDate = Now();

insert into Employee Values(123, 'Neeta', 'Director', 670000,30);

