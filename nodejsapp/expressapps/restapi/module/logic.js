let employees = [
    { EmpNo: 1, EmpName: "A", DeptName: "D1" },
    { EmpNo: 2, EmpName: "B", DeptName: "D2" },
    { EmpNo: 3, EmpName: "C", DeptName: "D1" },
    { EmpNo: 4, EmpName: "D", DeptName: "D2" },
    { EmpNo: 5, EmpName: "E", DeptName: "D1" },
    { EmpNo: 6, EmpName: "F", DeptName: "D2" },
    { EmpNo: 7, EmpName: "G", DeptName: "D1" },
    { EmpNo: 8, EmpName: "H", DeptName: "D2" },
  ];

class Logic {
   
  constructor() {
      console.log('Constructor Called..');
  }

  getEmployees(req, resp) {
    return resp
      .status(200)
      .send({ message: "Data Read Successfully", data: employees });
  }
  addEmployee(req, resp) {
    let emp = req.body;
    this.employees.push(emp);
    return resp
      .status(200)
      .send({ message: "Data Read Successfully", data:employees });
  }
}
// Exporting the class as ES 6 Module, in Node.js app its Node.js module
export default Logic;
