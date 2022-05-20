// Reading file

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// // Synchronous read         FILE-PATH               ENCODING
// // let data = fs.readFileSync('./../files/a.txt', {encoding: 'utf8'});

// //Not Working: const path1 = path.join(__dirname, './../files/a.txt');

// 1. Read the Server Path
let __fileName = fileURLToPath(import.meta.url);
console.log(`File Name = ${__fileName}`);
// 2. Combine this with the actual Resource Path
let filePath = path.join(__fileName, "./../../files/a.txt");
console.log(`File Path = ${filePath}`);
let data = fs.readFileSync(filePath, { encoding: "utf8" });

console.log("====================================");
console.log(`Data = ${data}`);
console.log("====================================");

// Reading File Asynchronously

fs.readFile(filePath, { encoding: "utf8" }, (error, fileContent) => {
  if (error) {
    console.log(`Some Error Occurred ${error.message}`);
    return;
  }
  console.log("====================================");
  console.log(`Async Data Read Data = ${fileContent}`);
  console.log("====================================");
});

console.log('====================================');
console.log('don dana done');
console.log('====================================');

