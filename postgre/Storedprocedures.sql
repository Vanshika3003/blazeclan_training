-- Creating Stored Procedures (SP)
-- They are Database Resident Object. SPs  are pre-compiled
-- Executing SPs is less time consuming than sending DML and Select Stataments
-- from client an executing them.
-- SPs can performing following
	-- 1. Can perform Select Operations to Return Rows of a Table
	-- 2. Can accept Input Parameter(s)
	-- 3. It may use Programming Constructs e.g. If, If...else Statments and Loops
	-- 4. There can be Out Parameter to return result from SP
	-- 5. If using Multiple Tables for Performing DML Operations 
		-- (Insert, Update, Delete), then  use Transactions
	-- 6. Parameter name MUST start with 'p_'	
-- Syantx
	-- Create Procedure [spName]
	-- (Input Parameters)
	-- Language plpgsql
	-- As $$ 
	-- Begin
	-- ........ LOGIC......
	-- End;
	-- $$
-- To Execute SP use the following command
	-- CALL [spName](Parameters ... in any)
--- Store procedure to insert a record into the Department Table

Create Procedure sp_InsertDepartment(
	p_DeptNo integer,
	p_DeptName varchar(100),
	p_Location varchar(100),
	p_Capacity integer
)
LANGUAGE plpgsql
As $$
Begin
	-- Check for Data Validation and if the data is invalid
	-- Raise Exception
	If p_DeptNo <=0 OR p_Capacity <=0 Then
		Raise 'Please Make sure that DeptNo and Capacity are Positive Integers';
	End If;
	Insert into Department(DeptNo,DeptName,Location,Capacity)
	Values 
	(p_DeptNo, p_DeptName,p_Location, p_Capacity);
End;
$$

-- Execute the Procedure
Call sp_InsertDepartment(-70, 'MT', 'Mumbai', 55);

Select * from Department;

-- Implement a Stored Procedure that will Handle Transaction on Same Table
-- Either Commit or Rollback based on the Condition instead of raising exception

Create Procedure sp_InsertDepartmentTx(
	p_DeptNo integer,
	p_DeptName varchar(100),
	p_Location varchar(100),
	p_Capacity integer
)
LANGUAGE plpgsql
As $$
Begin
	-- Execute the block of DML Statement
	Insert into Department(DeptNo,DeptName,Location,Capacity)
	Values 
	(p_DeptNo, p_DeptName,p_Location, p_Capacity);
	if p_Capacity <= 0 Then
		RollBack; -- Rollback the Operation
	else
		Commit; -- Commit the Transaction
	End If;	
End;
$$

Call sp_InsertDepartmentTx(80, 'WH', 'Mumbai', -55);

-- Transactions With Multiple Tables
Create Procedure sp_EmpDeptInsert()
Language plpgsql
As $$
Begin
	Insert into Department(DeptNo,DeptName,Location,Capacity)
	Values (90, 'RC', 'Pune', 100);
	insert into Employee Values(121, 'Aniket', 'Director', 110000,10);
	Commit;
End;
$$
Drop PROCEDURE sp_EmpDeptInsert();

Call sp_EmpDeptInsert();

select * from Department;
Select * from Employee;

	
	