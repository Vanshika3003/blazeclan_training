-- PostgreSQL Triggers
-- They are code-Blocks those are execued when any DML Operations is 
-- Performed on the table
-- In the PostgreSQL triggers are implemented using functions
-- 1.  create funtion, this function MUST return 'Trigger'
-- 2. Creat a Trigger thst will execute the function which contains logic
	-- A TRIGGER Provides 'state' of the data from table
	-- The 'OLD' the old column value
	-- The 'New' The new column value

-- Lets create a Table that will act as a Audit Table for storing 
-- Entries in table when the Insert statement will be executed on the table

Create Table EmployeeAudit(
  id serial Primary key,
  EmpNo integer Not Null,
  TransactionDate Date Default NULL,
  action varchar(100 )	Default NULL
);

-- Lets create a functtion that will make an entry into the Employee table
-- The 'Now()' function to provide the Current Date Time
Create or Replace Function fn_EmpAudit(
  p_action varchar(100);
)
Returns TRIGGER
Language plpgsql
As $$
Begin
	insert into EmployeeAudit (EmpNo,TransactionDate, action)
	Value (OLD.EmpNo, Now(),  p_action);
	-- return a current state of row
	return NEW; -- return the new frecord
End;
$$

