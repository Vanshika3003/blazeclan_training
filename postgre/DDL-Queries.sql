-- Create Table
Create table Department(
 DeptNo smallint Not Null,
 DeptName varchar(100) Not Null,
 Location varchar(100) Not Null,
 Primary Key (DeptNo) 	
);
-- Alter a table by adding a new column in it
Alter table Department Add Column Capacity integer Not Null;
-- Alter a Data Type of the DeptNo from smallint to integer
Alter Table Department Alter Column DeptNo Type integer;
-- Alter Department table and make DeptName as Unique Key
Alter table Department Add Constraint DeptNameUniqueConstraint 
Unique(DeptName);

-- Create a Table W/O Parimary Key and Add Primary Key
-- by Altering table to add Primary Key COnstraints

Create Table User(
  UserName char(10) Not Null,
  Password varchar(20) Not Null	 
);










