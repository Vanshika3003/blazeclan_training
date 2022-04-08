-- PostgreSQL Function
-- Syntax
	-- Create or Replace Function <NAME>(paramaters.....)
	-- Language plpgsql
	-- As
	-- $$
	-- Begin
		-- ..................Logic ................
	-- End;
	-- $$
-- Parameters
	-- Input and Output Parameteres Represented as 'inout'
	-- input parameters need not to use in modifier e.g. in
		-- the parameter Must start with 'p_'
-- Invoke function like 
	-- Select * from <FUNCTION-NAME>
	
Create or Replace Function xchange(inout a integer, inout b integer)
Language plpgsql
As
$$
Begin
	select a,b into b,a;
End;
$$

-- Call the Function
select * from xchange(100, 200);

-- Function that returns value

create or replace function GetSumOfSalaryByDeptNo(p_DeptNo integer) Returns BigInt
Language plpgsql
As
$$
-- Declare function variable(s) or local variables
Declare
	sum_salary bigint;   
Begin
	select sum(Salary) into sum_salary from Employee
	Where DeptNo = p_DeptNo;
	return sum_salary;
End;
$$
select sum(Salary) from Employee
	Where DeptNo =10;
select * from GetSumOfSalaryByDeptNo(10); 

-- Lets create a function that will be Table
Create or Replace Function Get_EmployeeRecords(p_DeptNo integer) 
returns table(
	 Emp_EmpNo integer, 
	 Emp_EmpName varchar(200), 
	 Emp_Designation varchar(200), 
	 Emp_Salary integer)
Language plpgsql
As $$
Begin
  -- The PostgtreSQL uses 'query' as a type that stores the resultant
  -- and Records aka cursor will be pointed by the query to read the 
  -- data from the ouput
  
  return query
  	Select EmpNo, EmpName, Designation, Salary
	From Employee
	Where DeptNo = p_DeptNo;
End;
$$;

Select * from get_employeerecords(20); 

-- A Function that performs an Insert Operation
-- and return number of record in a table
Create or replace Function insertRecord(
   p_DeptNo integer,
   p_DeptName varchar(100),
   p_Location varchar(100),
   p_Capacity integer	
) returns smallint
Language plpgsql
As $$
Declare
	records smallint;
Begin
	Insert  into Department(DeptNo, DeptName, Location, Capacity)
	Values (p_DeptNo, p_DeptName, p_Location, p_Capacity);
	Select Count(*) into records from Department;
	return records;
End;
$$
	 
Select * from insertRecord(100, 'SR', 'Pune', 50);	 

select * from Department;

	
	
	
	
	
	
	
	
	
	
	