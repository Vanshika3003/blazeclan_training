// 1. Import and cache the object
import http from "http";

// 1a. lets define some data
let Employees = [
  { EmpNo: 1, EmpName: "A", DeptName: "D1" },
  { EmpNo: 2, EmpName: "B", DeptName: "D2" },
  { EmpNo: 3, EmpName: "C", DeptName: "D1" },
  { EmpNo: 4, EmpName: "D", DeptName: "D2" },
  { EmpNo: 5, EmpName: "E", DeptName: "D1" },
  { EmpNo: 6, EmpName: "F", DeptName: "D2" },
  { EmpNo: 7, EmpName: "G", DeptName: "D1" },
  { EmpNo: 8, EmpName: "H", DeptName: "D2" },
];
      
// 2. Create a Server, that will return data based on
// header information received in request object
// e.g. http://localhost:7013/id
let server = http.createServer((request, response) => {
  // 2a. Lets read request header, the 'id' is custom key
  let id = parseInt(request.headers.id);
  if (id === undefined || id === 0) {
    // 2b. return all records
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(Employees));
    response.end();
  } else {
    // 2c. response specific Employee Record based on id
    let emp = Employees.find((e) => {
      return e.EmpNo === id;
    });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(emp));
    response.end();
  }
});

// 3. Start Listening on the port
server.listen(7013);
console.log("Server Started on port 7013");
