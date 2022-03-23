// the Constructor function accepts a dataSource
// this will be a collection
var UIGenerator = function (dataSource) {
  // this function wil be used to generate a
  // HTML <select> element
  this.select = function () {
    // check if the data is passed to generate the UI
    if (dataSource === undefined || dataSource.length === 0) {
      return "No Data So No UI will be generated";
    } else {
      var select = "<select>";
      // iterate over the dataSource and Generate a UI
      for (var i = 0; i < dataSource.length; i++) {
        select +=
          '<option value="' +
          dataSource[i] +
          '">' +
          dataSource[i] +
          "</options>";
      }
      select += "</select>";
      return select;
    }
  };
};
var UIGenerator2 = function (dataSource) {
  // this function wil be used to generate a
  // HTML <select> element
  console.log("employeede", dataSource);
  this.select = function () {
    // check if the data is passed to generate the UI
    if (dataSource === undefined || dataSource.length === 0) {
      return "No Data So No UI will be generated";
    } else {
      var select = "<select>";
      // iterate over the dataSource and Generate a UI
      for (var i = 0; i < dataSource.length; i++) {
        select +=
          '<option value="' +
          dataSource[i].designation +
          '">' +
          dataSource[i].designation +
          "</options>";
      }
      select += "</select>";
      return select;
    }
  };
};
var UIGenerator3 = function (dataSource) {
  // this function wil be used to generate a
  // HTML <select> element
  console.log("employeede", dataSource);
  this.select = function () {
    // check if the data is passed to generate the UI
    if (dataSource === undefined || dataSource.length === 0) {
      return "No Data So No UI will be generated";
    } else {
      var select = "<select>";
      // iterate over the dataSource and Generate a UI
      for (var i = 0; i < dataSource.length; i++) {
        select +=
          '<option value="' +
          dataSource[i].deptName +
          '">' +
          dataSource[i].deptName +
          "</options>";
      }
      select += "</select>";
      return select;
    }
  };
};
var UIGenerator1 = function (dataSource) {
  // this function wil be used to generate a
  // HTML <select> element
  console.log("ds", dataSource);
  this.select = function () {
    // check if the data is passed to generate the UI
    if (dataSource === undefined || dataSource.length === 0) {
      return "No Data So No UI will be generated";
    } else {
      var select = "<table>";
      // iterate over the dataSource and Generate a UI
      for (var i = 0; i < dataSource.length; i++) {
        select +=
          '<tr  value="' +
          dataSource[i] +
          '">' +
          dataSource[i] +
          "</tr> &nbsp;";
      }
      select += "</table>";
      console.log("select value", select);
      return select;
    }
  };
};
