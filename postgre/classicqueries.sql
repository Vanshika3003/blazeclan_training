-- Using Classic Queries with Logical Operators, Range,  Pattern Matching
-- Groups, Diistinct etc.

-- 1. Using AND Condition
Select EmpNo, EmpName, Designation, Salary
From Employee 
Where Salary >= 100000 AND Salary <= 500000;

-- 2. Using OR Condition
Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where DeptNo=10 OR DeptNo=50;

--- 3. Using NOT Operator, Print all Employees
--- except from DeptNo=10
--- The 'in' operator 
Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where DeptNo Not in (10);

--- 4. Print Employees from DeptNo 20, 30 and 40
Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where DeptNo  in (20,30,40);

--- 5. The Between operator
--- Read data under specific tange of values
Select EmpNo, EmpName, Designation, Salary
From Employee 
Where Salary  Between 100000 AND 500000;

--- 6. Using Patterns 
--- Internally they uses String Based Expressions to cpare the value 
--- of specifc column in all rows to extract row from the  table
-- Print All EMployees having EmpName starts with 'V'

Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where EmpName Like 'V%';

-- Printing Employees those have 'im' anywhere in EmpName
Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where EmpName Like '%im%';

-- 7. Print all Employees having salary as _00 on second and third
-- Position
Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where EmpName Like '_ah%';

--8. Position (Parsing the Salary as text to read its column values)
Select EmpNo, EmpName, Designation, Salary, DeptNo
From Employee 
Where Salary::text Like '_00%';
--9.  5 Digits salary values starts with 2 and esnds with 3
-- Where Salary:>:text Like '2___3'

-- 10. Print Sum of salary for all Employees
select sum(Salary) from Employee;

-- 11. Print Sum of Salary By Each DeptNo
select DeptNo,Sum(Salary) 
from Employee 
Group by DeptNo
Order By DeptNo;
-- 12. MAx Salary for DeptNo=10
select max(Salary) from Employee Where DeptNo=10;
-- 12. MAx Salary for Per Each DeptNo
select DeptNo, Max(Salary)
From Employee
Group by DeptNo Order By DeptNo;

select * from Employee where DeptNo=10;
-- 13. Printing Second Max Salary
select  Max(Salary)
From Employee 
where DeptNo = 10 AND Salary < (Select Max(Salary) from Employee Where DeptNo = 10);

-- 14. Select only specific records from the table from the Beinning
select * from Employee
Limit 4;

-- 15. Skip Some of the top records and prinyt rest of them 
-- Skip first 3 Records

select * from Employee Offset 3;


 
