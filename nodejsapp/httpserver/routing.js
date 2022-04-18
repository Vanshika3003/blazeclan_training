import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

// 1. Read the Server Path

let __fileName = fileURLToPath(import.meta.url);
console.log(`File Name = ${__fileName}`);
// 2. Combine this with the actual Resource Path
let dirPath = path.join(__fileName, "./../../views");

const server = http.createServer((req, resp) => {
  // check the URL and accordingly read file from the server and respond it
  if (req.url === "/home") {
    // read the home.html and send the response
    fs.readFile(
      `${dirPath}/home.html`,
      { encoding: "ascii" },
      (error, file) => {
        if (error) {
          resp.writeHead(404, { "Content-Type": "text/html" });
          resp.write("The Resource You are Looking for is not available.... ");
          resp.end();
        }
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(file);
        resp.end();
      }
    );
  } else {
    if (req.url === "/about") {
        // read the home.html and send the response
        fs.readFile(
          `${dirPath}/about.html`,
          { encoding: "ascii" },
          (error, file) => {
            if (error) {
              resp.writeHead(404, { "Content-Type": "text/html" });
              resp.write("The Resource You are Looking for is not available.... ");
              resp.end();
            }
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.write(file);
            resp.end();
          }
        );
      } else {
        if (req.url === "/contact") {
            // read the home.html and send the response
            fs.readFile(
              `${dirPath}/contact.html`,
              { encoding: "ascii" },
              (error, file) => {
                if (error) {
                  resp.writeHead(404, { "Content-Type": "text/html" });
                  resp.write("The Resource You are Looking for is not available.... ");
                  resp.end();
                }
                resp.writeHead(200, { "Content-Type": "text/html" });
                resp.write(file);
                resp.end();
              }
            );
          } else {
            resp.writeHead(404, { "Content-Type": "text/html" });
            resp.write("The Resource You are Looking for is not available.... ");
            resp.end();
          }
      }
  }  
});

server.listen(734);
console.log("Server Started on port 7013");
