import fs from "fs";
import parse from "csv-parser";


import async from 'async';

var inputFile='./nodejsapp/files/file.csv';

var csvData=[];
fs.createReadStream(inputFile)
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
        //console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something with csvData
      console.log(csvData);
    });