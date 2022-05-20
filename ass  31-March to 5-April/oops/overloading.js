// create as function that will be used to dynamically
// applied to a source object to generate functions overloaded functions

// sourceObject: The object where Overloading is required
//  name: The function that will be generated dynamically
// fn : the dynamically generated function body
function overload(sourceObject, name, fn) {
  // 1. lets enable  to support overloading
  if (!sourceObject._overload) {
    sourceObject._overload = {}; // an object which will be used for defining overloaded functions
  }

  // 2. Make sure that these overloaded functions (with whatever function number 2,3,4,5... )
  // will have same name

  if (!sourceObject._overload[name]) {
    sourceObject._overload[name] = {};
  }

  // 3. lets enable the function have a body with parameters
  // [fn.length]: A Function body with parameters
  if (!sourceObject._overload[name][fn.length]) {
    sourceObject._overload[name][fn.length] = fn;
  }

  // 4. lets aks the JS parser to invoke and execute the
  // dynamically defined function body with  parameters
  // so that the function will be applied to the sourceObject
  // and executed with invocation
  // sourceObject[name]: The function name
  sourceObject[name] = function () {
    // the dynamic function with arguments
    if (this._overload[name][arguments.length]) {
      // return this dynamic body and execute it
      return this._overload[name][arguments.length].apply(this, arguments);
    }
  };
}

// lets use this function object
function Students() {
  let students = [
    { StudentId: 1, StudentName: "Ajay", Year: "First", Status: "Passed" },
    { StudentId: 2, StudentName: "Bjay", Year: "Second", Status: "Failed" },
    { StudentId: 3, StudentName: "Cjay", Year: "First", Status: "Promoted" },
    { StudentId: 4, StudentName: "Djay", Year: "Second", Status: "Passed" },
    { StudentId: 5, StudentName: "Ejay", Year: "First", Status: "Failed" },
    { StudentId: 6, StudentName: "Fjay", Year: "Second", Status: "Promoted" },
    { StudentId: 7, StudentName: "Gjay", Year: "First", Status: "Passed" },
    { StudentId: 8, StudentName: "Ijay", Year: "Second", Status: "Failed" },
    { StudentId: 9, StudentName: "Jjay", Year: "First", Status: "Promoted" },
    { StudentId: 10, StudentName: "Kjay", Year: "Second", Status: "Passed" },
    { StudentId: 11, StudentName: "Ljay", Year: "First", Status: "Failed" },
  ];

  // lets define overloaded functions
  // find();
  overload(this, "find", function () {
    return students; // return all
  });

  // return student with some status
  // find(status)
  overload(this, "find", function (status) {
    return students.filter((s, i) => {
      return s.Status === status;
    });
  });
}

let students = new Students();

let result = students.find();
console.log(`All Students ${JSON.stringify(result)}`);
console.log();
let passStudents = students.find('Passed');
console.log(`Passed Students ${JSON.stringify(passStudents)}`);
