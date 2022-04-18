# Node.js Programming

1. Modules
    - A Standard JS Object Model that is installed along with the Node.js Installation on the Machine
    - Web Server Module
        - http and https
    - File System Module
        - USed to access File System
            - fs, path
    - Security
        - crypto
    - ..... many more modules                  
2. Custom Modules
    - Developer defined modules for Custom Functionality 
3. Third Party Modules
    - Supported by Node.js runtime
    - Used for Production Level Application Development 
        - Express
        - Sequelize
        - node-sql
        - mssql
        - JsonWebToken
        - express-session
        - cors
        - ..... and many more
4. Node.js 10+ Version supports ES 6
    - Traditional (No ES6) loading of standard/custom/third-party modules in Node.js application      
        - var module_instance = require('MODULE-NAME');
        - e.g.  
            - var http = require('http');
                - http module will be loaded and cached for the current application
                - Once the module is cached it will be available across all JS Files (Custom-Modules) in the Current Node.js application   
        - Loading Custom Module
            - var mymodule = require('PATH-OF-CUSTOM-MODULE');
                - e.g.
                    -  var mymodule = require('./file');
                        - The file.js will be searched, loaded and Cached for the current application        
                        - If file1.js is not found the 'Module_Not_Found' exception will be thrown bu Node.js Runtime
        - If using Third Part Module then  do the following
            - Install the Module
                - npm install --save MODULE-NAME
                    - e.g. npm install --save express
            - Load the Module
                - var express = require('express');
    - ES 6 Approach of Loading Modules
        - Module package.json with following Key
            - "type":"module"
                - Node.js runtime will implicitly perform Module Lookup, Loading and Caching
            - Load the Module in .js file as follows
                - import http from 'http';
                    - The http will be an instance of standard 'http' module
# First Node.js Code
- Running the .js file on Node.js server as follows
    - node FILE_NAME

``` javascript
console.log('Hello World');

function operations(str, c){
    if(c === 'L' || c === 'l') return str.toLowerCase();
    if(c === 'U' || c === 'u') return str.toUpperCase();
    return str;
}

console.log( operations('Node.js', 'l'));

console.log( operations('Node.js', 'u'));

let Employees = [
    {EmpNo:1,EmpName:'A', DeptName:'D1'},
    {EmpNo:2,EmpName:'B', DeptName:'D2'},
    {EmpNo:3,EmpName:'C', DeptName:'D1'},
    {EmpNo:4,EmpName:'D', DeptName:'D2'}
];


let res = Employees.filter((e)=>{ return e.DeptName === 'D1'});
console.log(JSON.stringify(res));

class Utilities {
    sort(arr){
        return arr.sort((a,b)=> {return a - b;});
    }
    reverse(arr){
        return arr.sort((a,b)=> {return b - a;});
    }
}

let arr = [2,3,4,1,5,7,6.9,8];
let obj = new Utilities();
console.log(`Sort = ${JSON.stringify(obj.sort(arr))}`);
console.log(`Reverse = ${JSON.stringify(obj.reverse(arr))}`);
```
- Install the followig package for intellisense
    - npm install --save-dev @types/node
- If using ES 6 Module Loader the Node.js Runtime will generate following error
    - (node:26272) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
- To resolve the error Modify the package.json  as explained in error message 


- Creating a Web Server using Node.js
    - The 'http' module
        - Used to create a HTTP Pipeline Environment for HTTP Communication from Client to Node.js apps
        - createServer(RequestListener) method
            - RequestListener: Accept Http Request and Generate Http response
                - Request Object
                        - Request Body
                        - Method (Header)
                            - get, post, put, delete
                        - Url (Header)
                            - Server URL used for request processing
                - Response Object
                    - Write Response Against the request
                        - writeHead(), response header
                        - write(), response body
                        - end(), End the Response            
                            
        - listen(PORT) method
            - Start listing on the PORT

``` javascript
 // 1. Import and cache the object
 import http from 'http';

 // 2. Create a Server
 let server = http.createServer((request,response)=>{
    // 2a. Write a Response header
    response.writeHead(200, {'Content-Type':'text/html'});
    // 2b. Write the Response Message
    response.write('Hello World!!');
    // 2c. End the Response
    response.end();
 }) ;

 // 3. Start Listening on the port
 server.listen(7013);
 console.log('Server Started on port 7013');
```

- Creating a Data Server

``` javascript
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


```

- http Module for Simple REST APIs with Node.js
    - RequestListener
        - IncomingMessage Request Object
        - The 'Method' Property
            - GET, POST, PUT, DELETE
        - The 'on()' method, for request processing status
            - The 'one()' method has processing status events
                - 'data', event to receive data stream and start processing it 
                - 'end', event that represents the stream receive end
                - 'error', event raised when error occur
                - 'pause', 'resume', event for pause and resuming stream processing    

- The 'fs' module
    - The FileSystem Module
    - Access to the OS Object Model to interact with File IO
        - Read File (Sync and Async)
            - readFile(), Async
            - readFileSync(), Sync
        - Write File (Sync and Async)
            - Create new File if not exist and write data in it
            - Append File
            - writeFile(), Async
            - writeFileSync(), Sync
            - open() and openSync(), used to create a new File
            - appendFile() and appendFileSync(), to append data to existing file
            - unlink() and unlinkSync(), delete file
        - The 'stat()' method
            - This is used while reading contents of directory     
            - The Stat could be file or subdirectory
        - Directories (Sync and Async)
        - Streams
            - Contineous Data Flow
            - File Upload and Download Operations
        - Pipes    
            - Joining Streams
- Node.js Globals
    - __dirName (Note: ReferenceError: __dirname is not defined in ES module scope)
        - Perform file I/O from the path where the Node.js app is working
    - __fileName
    - env
        - The Environment Object          
    - To read file path in ES 6, we need to use the Global import Meta URL
        - import.meta.url
            - Create a Absolute PATH for Relative Directory base path
                - c:\ will be changed to c:/
        - The 'url' module
            - fileUrlToPath
                -  Map the Directory Absolute path to the Directory Relative Path which is common on
                    - Windows, Linux, Mac, etc.                   