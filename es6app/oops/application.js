class Employee {
    #EmpNo=0;
    #EmpName="";
    #DeptName="";
    #Designation="";
    #Salary = 0;

    set EmpNo(v){this.#EmpNo=v;}
    get EmpNo(){return this.#EmpNo;}
    set EmpName(v){this.#EmpName=v;}
    get EmpName(){return this.#EmpName;}
    set DeptName(v){this.#DeptName=v;}
    get DeptName(){return this.#DeptName;}
    set Designation(v){this.#Designation=v;}
    get Designation(){return this.#Designation;}
    set Salary(v){this.#Salary=v;}
    get Salary(){return this.#Salary;}
}

class EmployeeLogic {
    #employees=[];
    constructor(){
        // Initialize the Employees array like properties from the Employee class
        this.#employees = [];
    }

    #validateInput(emp){
        // Logic to validate the Employee Object
        // EmpNo: Non Negative and Unique
        // EmpName: FirstName {single-space} MiddleName {single-space} LastName
        // DeptName: Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS
        // Designation: MUST be either of the following, Engineer, Manager, Representative, Clerk, Assistant
            // IT (Engineer, Manager)
            // SALES (Manager, Representative, Assistant)
            // HRD (Manager, Clerk)
            // ADMIN (Manager, Clerk, Assistant)
            // ACCOUNTS (Manager, Clerk) 
        
       return true; //  if validation rules are successful     
    }

    getEmployees(){
        return this.#employees;
    }
    addEmployee(emp) {
         // call for validate
        this.#employees.push(emp);
        return this.#employees;
    }
    updateEmployee(id,emp){
          // call for validate
        // 1. Logic to search adn then update Employee
        return this.#employees;
    }

    deleteEmployee(id){
        // 1. Logic to search adn then delete Employee
        return this.#employees;
    }
    searchEmployee(searchObject){
        // possible value for search object may be as follows
        // EmpNo:1, EmpName:'DDDD', DeptName:'ggg', Designation:'dfff'
        // Search from employee has to0 takes place based on searchObject and data will be returned accordingly
        return this.#employees;
    }

    searchComplexEmployee(searchObject){
        // possible value for search object may be as follows
        //  {DeptName:'IT', Designation:'Manager'} and condition
        // This Must return all Employee in IT Dept those are Managers
        
        return this.#employees;
    }
    searchEmployeeByCriria(searchObject){
        // possible value for search object may be as follows
        // EmpName: 'A', all Employees Starts from A
         
        
        return this.#employees;
    }
} 

class UserInterface {
    // Access on Save Button
    save(){
        // Call to addEmployee of  EmployeeLogic in case of new Entry
        // call to updateEmployee of EmployeeLogic in case of Update
        // call to deleteEmployee of EmployeeLogic in case of Delete
    }

    // Access this on the Text Change UI Events to search
    search(){
        // Call to various search methods opf EmployeeLogic class (Define your own UI)
        // make the UI Interactive
    }
}