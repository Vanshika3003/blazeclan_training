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
        let validationErrorMsg = '';
        // Logic to validate the Employee Object
        // EmpNo: Non Negative and Unique
        if(emp.EmpNo<0){
            validationErrorMsg = 'EmpNo must be positive';
            alert(validationErrorMsg);
           return false;
        }
        // EmpName: FirstName {single-space} MiddleName {single-space} LastName
        if(!emp.EmpName.match(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/)){
            validationErrorMsg = 'There should be a single space';
            alert(validationErrorMsg);
            return false;
        }
        // DeptName: Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS
        if(emp.DeptName!='IT' && emp.DeptName!='HRD' && emp.DeptName!='SALES' && emp.DeptName!='ACCOUNTS'){
            validationErrorMsg = 'Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS';
            alert(validationErrorMsg);
            return false;
        }
        // Designation: MUST be either of the following, Engineer, Manager, Representative, Clerk, Assistant
            // IT (Engineer, Manager)
            // SALES (Manager, Representative, Assistant)
            // HRD (Manager, Clerk)
            // ADMIN (Manager, Clerk, Assistant)
            // ACCOUNTS (Manager, Clerk) 
        if(emp.DeptName=='IT'){
            if(emp.Designation!='Engineer' && emp.Designation!='Manager'){
                validationErrorMsg = 'Designation must be Engineer & Manager'
                alert(validationErrorMsg);
                return false;
            }
        }else if(emp.DeptName=='SALES'){
            if(emp.Designation!='Manager' && emp.Designation!='Representative' && emp.Designation!='Assistant'){
                validationErrorMsg = 'Designation must be Representative, Assistant & Manager'
                alert(validationErrorMsg);
                return false;
            }
        }else if(emp.DeptName=='HRD'){
            if(emp.Designation!='Manager' && emp.Designation!='Clerk'){
                validationErrorMsg = 'Designation must be Clerk & Manager'
                alert(validationErrorMsg);
                return false;
            }
        }else if(emp.DeptName=='ADMIN'){
            if(emp.Designation!='Manager' && emp.Designation!='Clerk' && emp.Designation!='Assistant'){
                validationErrorMsg = 'Designation must be Clerk,Assistant & Manager'
                alert(validationErrorMsg);
                return false;
            }
        }else if(emp.DeptName=='ACCOUNTS'){
            if(emp.Designation!='Manager' && emp.Designation!='Clerk'){
                validationErrorMsg = 'Designation must be Clerk & Manager'
                alert(validationErrorMsg);
                return false;
            }
        }      
        
       return true; //  if validation rules are successful     
    }

    getEmployees(){       
        return this.#employees;
    }
    addEmployee(emp) {
         // call for validate
         if(!this.#validateInput(emp)){
             alert("validation error!")
         }else{
        this.#employees.push(emp);}
        return this.#employees;
    }
    updateEmployee(id,emp){
          // call for validate
        // 1. Logic to search adn then update Employee
        let searchEmployee = this.#employees.find((val,e)=> {val.EmpNo!==id});
        this.#employees = [...searchEmployee];
        this.#employees.push(emp);
        return this.#employees;
    }

    deleteEmployee(id){
        // 1. Logic to search adn then delete Employee
        this.#employees.forEach((emp,i)=>{
            if(emp[i].EmpNo===id) 
                emp.slice(i,1);
        });    
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
    //acces to 
    getEmployeeById(id) {
        for (var i = 0; i < this.#employees.length; i++) {
          console.log("here");
          if (this.#employees[i].EmpNo == id) {
            return this.#employees[i];
          }else{
              return null;
          }
        }
      }
} 

class UserInterface {
     e = new EmployeeLogic();
    // Access on Save Button
    save(emp,flag){
        // Call to addEmployee of  EmployeeLogic in case of new Entry
        if(flag===true){
            this.e.addEmployee(emp);
            return this.e.getEmployees();
        }else{
            this.e.updateEmployee(emp.EmpNo,emp);
            return this.e.getEmployees();
        }
        // call to updateEmployee of EmployeeLogic in case of Update
        // call to deleteEmployee of EmployeeLogic in case of Delete
    }

    // Access this on the Text Change UI Events to search
    search(){
        // Call to various search methods opf EmployeeLogic class (Define your own UI)
        // make the UI Interactive
    }

    //access to change
    getEmployeeById(id){
      return  this.e.getEmployeeById(id)
    }
}



