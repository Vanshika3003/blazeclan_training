// Create a CLose FUnction or a function object that will return the Literal with public members in it

function Logic() {
  var employees = [];
  employees.push({ EmpNo: 101, EmpName: "A" });
  employees.push({ EmpNo: 102, EmpName: "B" });
  return {
    getEmployees: function () {
      return employees;
    },
    addEmployee: function (emp) {
      employees.push(emp);
      return employees;
    },
    deleteEmployee: function (emp) {
      employees.pop(emp);
      return employees;
    },
    updateEmployee: function (emp) {
      employees[1].EmpNo = emp[0].EmpNo;
      return employees;
    },
  };
}
