class Employee {
    #EmpNo = 0;
    #EmpName = "";
    #DeptName = "";
    #Designation = "";
    #Salary = 0;

    set EmpNo(v) { this.#EmpNo = v; }
    get EmpNo() { return this.#EmpNo; }
    set EmpName(v) { this.#EmpName = v; }
    get EmpName() { return this.#EmpName; }
    set DeptName(v) { this.#DeptName = v; }
    get DeptName() { return this.#DeptName; }
    set Designation(v) { this.#Designation = v; }
    get Designation() { return this.#Designation; }
    set Salary(v) { this.#Salary = v; }
    get Salary() { return this.#Salary; }
}

class EmployeeLogic {
    #employees = [];
    constructor() {
        // Initialize the Employees array like properties from the Employee class
        this.#employees = [];
        console.log("I am here");
    }

    #validateInput(emp) {
        let validationErrorMsg = '';
        // Logic to validate the Employee Object
        // EmpNo: Non Negative and Unique
        if (emp.EmpNo < 0) {
            validationErrorMsg = 'EmpNo must be positive';
            alert(validationErrorMsg);
            return false;
        }
        // EmpName: FirstName {single-space} MiddleName {single-space} LastName
        if (!emp.EmpName.match(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/)) {
            validationErrorMsg = 'There should be a single space';
            alert(validationErrorMsg);
            return false;
        }
        // DeptName: Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS
        if (emp.DeptName != 'IT' && emp.DeptName != 'HRD' && emp.DeptName != 'SALES' && emp.DeptName != 'ACCOUNTS') {
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
        if (emp.DeptName == 'IT') {
            if (emp.Designation != 'Engineer' && emp.Designation != 'Manager') {
                validationErrorMsg = 'Designation must be Engineer & Manager'
                alert(validationErrorMsg);
                return false;
            }
        } else if (emp.DeptName == 'SALES') {
            if (emp.Designation != 'Manager' && emp.Designation != 'Representative' && emp.Designation != 'Assistant') {
                validationErrorMsg = 'Designation must be Representative, Assistant & Manager'
                alert(validationErrorMsg);
                return false;
            }
        } else if (emp.DeptName == 'HRD') {
            if (emp.Designation != 'Manager' && emp.Designation != 'Clerk') {
                validationErrorMsg = 'Designation must be Clerk & Manager'
                alert(validationErrorMsg);
                return false;
            }
        } else if (emp.DeptName == 'ADMIN') {
            if (emp.Designation != 'Manager' && emp.Designation != 'Clerk' && emp.Designation != 'Assistant') {
                validationErrorMsg = 'Designation must be Clerk,Assistant & Manager'
                alert(validationErrorMsg);
                return false;
            }
        } else if (emp.DeptName == 'ACCOUNTS') {
            if (emp.Designation != 'Manager' && emp.Designation != 'Clerk') {
                validationErrorMsg = 'Designation must be Clerk & Manager'
                alert(validationErrorMsg);
                return false;
            }
        }

        return true; //  if validation rules are successful     
    }

    getEmployees() {
        return this.#employees;
    }
    addEmployee(emp) {
        // call for validate
        if (!this.#validateInput(emp)) {
            alert("validation error!")
            return;
        }
        this.#employees.push(emp);
        console.log((this.#employees));
        return this.#employees;
    }
    updateEmployee(id, emp) {
        // call for validate
        // 1. Logic to search adn then update Employee
        console.log("inside update employee");
        let new_emp = emp;
        let e = [];
        for (let i = 0; i < this.#employees.length; i++) {
            e = this.#employees[i];
            if (e.EmpNo === id) {
                this.#employees[i] = new_emp;
            }
        }
        return this.#employees;
    }

    deleteEmployee(id) {
        // 1. Logic to search adn then delete Employee
        console.log("delete empl called " + id);
        for (var index = 0; index < this.#employees.length; index++) {
            console.log(
                "inised delete " + this.#employees[index].EmpNo + " item " + id
            );
            if (this.#employees[index].EmpNo == id) {
                console.log("hereeeeee");
                this.#employees.splice(index, 1);
                return this.#employees;
            }
        }
        return this.#employees;
    }
    searchEmployee(searchObject) {
        // possible value for search object may be as follows
        // EmpNo:1, EmpName:'DDDD', DeptName:'ggg', Designation:'dfff'
        // Search from employee has to0 takes place based on searchObject and data will be returned accordingly
        this.#employees.filter((val) => val.EmpNo === searchObject.EmpNo)
        return this.#employees;
    }

    searchComplexEmployee(searchObject) {
        // possible value for search object may be as follows
        //  {DeptName:'IT', Designation:'Manager'} and condition
        // This Must return all Employee in IT Dept those are Managers
        this.#employees.filter((desig) => desig.Designation === 'Manager' && desig.DeptName === 'IT')
        return this.#employees;
    }
    searchEmployeeByCriria(searchObject) {
        // possible value for search object may be as follows
        // EmpName: 'A', all Employees Starts from A


        return this.#employees;
    }
    //acces to 
    getEmployeeById(id) {
        for (var i = 0; i < this.#employees.length; i++) {
            console.log("id " + id + " " + this.#employees[i].EmpNo);
            console.log("here");
            if (this.#employees[i].EmpNo == id) {
                return this.#employees[i];
            }
        }
    }
}

class UserInterface {
    #e = null;
    constructor() {
        console.log("called ");
        this.#e = new EmployeeLogic();
    }
    // Access on Save Button
    save(emp, flag) {
        // Call to addEmployee of  EmployeeLogic in case of new Entry
        if (flag === true) {
            this.#e.addEmployee(emp);
            return;
        } else if (flag == false) {
            console.log(`emp.empNo = ${emp.EmpNo}`);
            this.#e.updateEmployee(emp.EmpNo, emp);
            return;
        } else {
            console.log("is delete called..?" + emp);
            this.#e.deleteEmployee(emp);
            // return ;
        }
        // call to updateEmployee of EmployeeLogic in case of Update
        // call to deleteEmployee of EmployeeLogic in case of Delete
    }

    // Access this on the Text Change UI Events to search
    search() {
        // Call to various search methods opf EmployeeLogic class (Define your own UI)
        // make the UI Interactive
    }

    //access to change
    getEmployeeById(id) {
        return this.#e.getEmployeeById(id)
    }
    getAllEmployee() {
        return this.#e.getEmployees();
    }
    updateTable() {
        let employees = this.#e.getEmployees();

        let table = document.getElementById("empTable");

        let rowCount = table.rows.length;

        for (let i = 1; i < rowCount; i++) {
            table.deleteRow(1);
        }

        for (let i = 0; i < employees.length; i++) {
            let row = table.insertRow(-1);

            let cell1 = row.insertCell(0);

            let cell2 = row.insertCell(1);

            let cell3 = row.insertCell(2);

            let cell4 = row.insertCell(3);

            let cell5 = row.insertCell(4);

            cell1.innerHTML = employees[i].EmpNo;

            cell2.innerHTML = employees[i].EmpName;

            cell3.innerHTML = employees[i].DeptName;

            cell4.innerHTML = employees[i].Designation;

            cell5.innerHTML = employees[i].Salary;
        }
    }
}









