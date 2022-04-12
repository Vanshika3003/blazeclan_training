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
  //   } else {
  //     var k = 0;
  //     var dsKeys=[];
  //  var heading;
  //     var p = Object.keys(dataSource[0]);
  //     console.log("my data" + p);
  //     for (var i = 0; i < p.length; i++) {
  //         // heading += '<tr><th>'+p[0]+'</th><th>'+p[1]+'</th><th>'+p[2]+'</th><th>'+p[3]+'</th><th>'+p[4]+'</th></tr>' ;
  //         heading =  p[i] ;
  //         console.log("my data heading" + heading);

  //     }
  //     for (j of heading) {
  //       console.log("my l" + heading[j]);

  //     }
  //     var table =
  //       '<table border="1" >';
        
     
  //       for (var i = 0; i < dataSource.length; i++) {
  //         table += "<tr>";
  //         console.log("here 3" + dataSource[i][j]);
  //         for (var j = 0; j < dataSource[i].length; j++) {
  //           table += "<td>"+dataSource [i][j]+"</td>";
  //                   console.log("vkkk 3" +table);
  //       }
  //       table += "</tr>";
  //     }
  //     table += "</table>";
  //       return table;
      
  //     // var table = "<table border=1>";    
  //     // for(var i=0; i<dataSource.length; i++) {
  //     //     table += "<tr>";
  //     //     for(var j=0; j<dataSource[i].length; j++){
  //     //         table += "<td>"+dataSource [i][j]+"</td>";
  //     //         console.log("vkkk 3" +table);
         
  //     //     }
  //     //     table += "</tr>";
  //     // }
  //     // table += "</table>";
  
  //     // return table;
  //   }
    }
    else{
            var k =0;
            var table = '<table  class="table table-striped table-bordered table-hover table-dark" border="1" ><thead><tr><th>EmployeeId</th><th>EmployeeName</th><th>DeptName</th><th>Salary</th><th>Designation</th></tr></thead><tbody>';
           for(j of dataSource){
            for(var i=0;i<dataSource.length;i++){
                console.log("here 3"+dataSource[i]['ProductRowId']);
                table+= '<tr><td>'+dataSource[i]['EmployeeID']+'</td><td>'+dataSource[i]['EmployeeName']+'</td><td>'+dataSource[i]['deptName']+'</td><td>'+dataSource[i]['Salary']+'</td><td>'+dataSource[i]['Designation']+'</td></tr>';
            }
            table +='</tbody></table>';
            return table;
        }
      }
  };
};
