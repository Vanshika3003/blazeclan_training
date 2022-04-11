DELIMITER //
create procedure getEmployeeByDesignation(
 IN desig varchar(100) 
)
Begin
	Select * from Employee where Designation = desig;
End //
DELIMITER ;

Call getEmployeeByDesignation('Director');