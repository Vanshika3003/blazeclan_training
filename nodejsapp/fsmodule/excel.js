import XLSX from 'xlsx';
var workbook = XLSX.readFile('./nodejsapp/files/excel-file.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);