/*Create New Role*/
Create Role sabnisadmin With Login PASSWORD 'P@ssw0rd_';
/*Alter the Role for Providing an authorization to create Database*/
Alter role sabnisadmin CREATEDB;