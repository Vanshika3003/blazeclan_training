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