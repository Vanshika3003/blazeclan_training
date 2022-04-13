USe Enterprize;

-- Stored Procs are database object those are Pre-Compiled and loaded into
-- Db Engine and Executed, faster than Queries, they may have input and output 
-- parameters

-- Keywords 'IN' and 'INOUT' for Input and In-Output parameters respectively
-- If..Else..End If Block 
-- The 'OUT' parameter, is used by the caller ro retrived the result from Stored Proc
-- without any return statement
-- The 'DELIMITER' and  '//' OR '$$' Symbols are used to define an Executable Block
-- in MySQL Processing Engine
-- The 'Call' Command is used to invoke the Stored Proc

-- Creating a Stored Proc

DELIMITER //
create procedure getEmployee()
Begin
	Select * from Employee;
End //
DELIMITER ;

-- Call the Stored Proc
Call getEmployee();

-- Stored Procedure with Input Parameters

DELIMITER //
create procedure getEmployeeByDesignation(
 IN desig varchar(100) 
)
Begin
	Select * from Employee where Designation = desig;
End //
DELIMITER ;

Call getEmployeeByDesignation('Director');

Call getEmployeeByDesignation('CEO');

Drop Procedure getEmployeeByDesignation;

-- Lets create a Procedure that will insert record in table

DELIMITER //
create procedure InsertDepartment(
  IN DeptNo int,
  IN DeptName varchar(200),
  IN Location varchar(100),
  IN Capacity int
)
begin
	insert into Department (DeptNo, DeptName, Location, Capacity)
	Values
		(DeptNo, DeptName, Location, Capacity);
End //   
DELIMITER ;

Call InsertDepartment(70, 'HW', 'Mumbai', 900);

Select * from Department;

-- Procedure with Input and Output Parameter

DELIMITER //
create procedure sp_GetSumSalaryBtDeptNo(
  IN p_DeptNo int,
  INOUT p_sumSal bigInt
)
Begin
	-- The 'into' is used to set the value of the INOUT parameter 
    -- while executing the Stored Procedure
	select sum(Salary) into p_sumSal from Employee Where DeptNo = p_DeptNo;
End //
DELIMITER ;

-- Calling the Procedure with Input and Output Parameters
-- inline parameter declaration @SumSalary
-- It will match with the parameter to SP in Order
-- e.g p_sumSal bigInt in second parameter which is INOUT, @SumSalary will map to  p_sumSal  

Call sp_GetSumSalaryBtDeptNo(10, @SumSalary);
select @SumSalary;

-- Stored Proc witrh only Out Parameter 

DELIMITER //
create procedure sp_GetSumSalaryBtDeptNoOutParameter(
  IN p_DeptNo int,
  OUT p_sumSal bigInt
)
Begin
     IF p_DeptNo > 0 THEN
		-- the 'as' operator will be creating an alis for
		-- result to out parameter 
		select sum(Salary) as p_sumSal from Employee Where DeptNo = p_DeptNo;
	 ELSE
		Set p_sumSal = 0;
     End If;   
    -- select p_sumSal; -- this will help in returning data from SP
End //
DELIMITER ;
 
-- call the Procedure with Out paramneter
Call  sp_GetSumSalaryBtDeptNoOutParameter(10,  @sal);
select @sal;

drop procedure sp_GetSumSalaryBtDeptNoOutParameter;

-- A SP with Table Level Transaction for Commit and Rollback


DELIMITER //
create procedure sp_TableTransaction()
Begin
	-- Define a Transaction Listener, which will 
    -- Monitor a 'State' of the Transactoin (Successful / Failed)
    -- If Successful then Commit Transaction else
    -- SQLEXCEPTION will be throwsn and transactikon will be rolled back
    
     -- defining a JHandler to Exit the SP on SQL Exception and
     -- rollback transaction
	Declare Exit Handler For SQLEXCEPTION Rollback;
    -- Defining a Transaction Bundle(?)
    -- Transaction Bundle: This will Infor to MySQL Engine to Execure each Statement
    -- as a Part of the Transaction 
    START transaction; -- Below Statements are part od Transactions
		Insert into Department (DeptNo, DeptName, Location, Capacity) Values (90, 'TPT', 'Pune', 67 );
		Insert into Employee (EmpNo, EmpName, Designation, Salary, DeptNo)values(201, 'Akash', 'Lead', 120000, 20);
    -- If all Statements are Executed by MySQL Engine then Commit else Rollback
    Commit; -- The  Transaction Bundle is Over
End //
DELIMITER ;

Call sp_TableTransaction();
Drop Procedure sp_TableTransaction;







