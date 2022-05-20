"use strict";

// the Template string allows to define string builder to Concatenate
// multiple string into a single immutable string object
// `${EXPRESSION1} ${EXPRESSION2}...`
// a Single String object will created by concatenating the multiple EXPRESSIONS
// These expression are parsed as a single string object and can parse MULTI-LINE String
// and the HTML Elements
var fname = "Mahesh";
var mname = "Rameshrao";
var lname = "Sabnis";
var fullname = "".concat(fname, " \n                ").concat(mname, " \n                ").concat(lname);
console.log("Full Name = ".concat(fullname));

var UIGenerator = function UIGenerator(dataSource) {
  // this function wil be used to generate a
  // HTML <select> element
  this.select = function () {
    // check if the data is passed to generate the UI
    if (dataSource === undefined || dataSource.length === 0) {
      return 'No Data So No UI will be generated';
    } else {
      var select = '<select>'; // iterate over the dataSource and Generate a UI

      for (var i = 0; i < dataSource.length; i++) {
        select += "<option value=\"".concat(dataSource[i], "\">").concat(dataSource[i], "</option>");
      }

      select += '</select>';
      return select;
    }
  };
};
