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
// Lets define API based on Http Request methods
let server = http.createServer((request, response) => {
  let id = parseInt(request.headers.id);
  // 2a. the GET Request
  if (request.method === "GET") {
    if (id === 0) {
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
  }

  // 3. The POST method
  if(request.method === "POST"){
     let receivedData;
    // 3a. lets receive the data first using 'data' event 
    // by calling 'on()' method of the request object
    request.on('data', (chunk)=>{
      // parse the received data into the JSON format
      receivedData = JSON.parse(chunk);
    });
    // 3b. Process the received data and end the  request
    request.on('end',()=>{
      Employees.push(receivedData);
      // send the response of all data with new record
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(Employees));
      response.end();
    }); 
  }
  if(request.method === "PUT"){
    // Search record based on header, if found update it in array and return the modified array
    // if not found return Not Found Error Message  
  }
  if(request.method === "DELETE"){
     // Search record based on header, if found delete it from array and return the modified array
    // if not found return Not Found Error Message  
  }
});

// 4. Start Listening on the port
server.listen(7013);
console.log("Server Started on port 7013");
