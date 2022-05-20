
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


// 1. Read the Server Path
let __fileName = fileURLToPath(import.meta.url);
console.log(`File Name = ${__fileName}`);
// 2. Combine this with the actual Resource Path
let filePath = path.join(__fileName, "./../../files/b.txt");

// Create a new file
fs.open(filePath, 'w',(error,file)=>{
    if(error){
        console.log(`Operation Files ${error.message}`);
        return;
    }
    console.log(`File Creation is Successful ${file}`);
});



// write data in the file
fs.writeFile(filePath, 'Tom Cruitz is the Superstar of Hollywood', (error)=>{
    if(error){
        console.log(`Operation Failed ${error.message}`);
        return;
    }
    console.log(`File is written Successfully`);
});

// append data in the file
fs.appendFile(filePath, 'He is great in MI Movies', (error)=>{
    if(error){
        console.log(`Operation Failed ${error.message}`);
        return;
    }
    console.log(`File is Appended Successfully`);
});
