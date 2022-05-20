import fs from "fs";
import path from "path";
import http from 'http';
import { fileURLToPath } from "url";


// 1. Read the Server Path
let __fileName = fileURLToPath(import.meta.url);
console.log(`File Name = ${__fileName}`);
// 2. Combine this with the actual Resource Path
let dirPath = path.join(__fileName, "./../../views");

const server = http.createServer((req,resp)=>{
    // read the home.html and send the response 
    fs.readFile(`${dirPath}/home.html`, {encoding:'ascii'}, (error,file)=>{
        if(error){
            resp.writeHead(404, {'Content-Type':'text/html'});
            resp.write('The Resource You are Looking for is not available.... ');
            resp.end();
        }
        resp.writeHead(200, {'Content-Type':'text/html'});
        resp.write(file);
        resp.end();
    });
});


server.listen(731);
console.log('Server Started on port 7013');