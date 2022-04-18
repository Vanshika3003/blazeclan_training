import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let Files = [];

function ThroughDirectory(Directory) {
  fs.readdirSync(Directory).forEach(File => {
    const Absolute = path.join(Directory, File);
    // console.log("abs",Absolute);
    if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
    else {
      fs.readFile(Absolute, { encoding: "utf8" }, (error, fileContent) => {
        if (error) {
          console.log(`Some Error Occurred ${error.message}`);
          return;
        }
        console.log(`Async Data Read Data = ${fileContent}`);
      });
      Files.push(Absolute);
    }

  });
  // console.log("filess",Files);
}


ThroughDirectory("../../Desktop/blazeclan_training/ass-13-april/");