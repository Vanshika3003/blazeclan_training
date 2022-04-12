"use strict";

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _EmpNo = /*#__PURE__*/new WeakMap();

var _EmpName = /*#__PURE__*/new WeakMap();

var _DeptName = /*#__PURE__*/new WeakMap();

var _Designation = /*#__PURE__*/new WeakMap();

var _Salary = /*#__PURE__*/new WeakMap();

var Employee = /*#__PURE__*/function () {
  function Employee() {
    _classCallCheck(this, Employee);

    _classPrivateFieldInitSpec(this, _EmpNo, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _EmpName, {
      writable: true,
      value: ""
    });

    _classPrivateFieldInitSpec(this, _DeptName, {
      writable: true,
      value: ""
    });

    _classPrivateFieldInitSpec(this, _Designation, {
      writable: true,
      value: ""
    });

    _classPrivateFieldInitSpec(this, _Salary, {
      writable: true,
      value: 0
    });
  }

  _createClass(Employee, [{
    key: "EmpNo",
    get: function get() {
      return _classPrivateFieldGet(this, _EmpNo);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _EmpNo, v);
    }
  }, {
    key: "EmpName",
    get: function get() {
      return _classPrivateFieldGet(this, _EmpName);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _EmpName, v);
    }
  }, {
    key: "DeptName",
    get: function get() {
      return _classPrivateFieldGet(this, _DeptName);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _DeptName, v);
    }
  }, {
    key: "Designation",
    get: function get() {
      return _classPrivateFieldGet(this, _Designation);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _Designation, v);
    }
  }, {
    key: "Salary",
    get: function get() {
      return _classPrivateFieldGet(this, _Salary);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _Salary, v);
    }
  }]);

  return Employee;
}();

var _employees = /*#__PURE__*/new WeakMap();

var _validateInput = /*#__PURE__*/new WeakSet();

var EmployeeLogic = /*#__PURE__*/function () {
  function EmployeeLogic() {
    _classCallCheck(this, EmployeeLogic);

    _classPrivateMethodInitSpec(this, _validateInput);

    _classPrivateFieldInitSpec(this, _employees, {
      writable: true,
      value: []
    });

    // Initialize the Employees array like properties from the Employee class
    _classPrivateFieldSet(this, _employees, [{
      EmployeeId: this.EmpNo,
      EmployeeName: this.EmpName
    }]);
  }

  _createClass(EmployeeLogic, [{
    key: "getEmployees",
    value: function getEmployees() {
      console.log("heyyyye");
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "addEmployee",
    value: function addEmployee(emp) {
      // call for validate
      _classPrivateFieldGet(this, _employees).push(emp);

      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "updateEmployee",
    value: function updateEmployee(id, emp) {
      // call for validate
      // 1. Logic to search adn then update Employee
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "deleteEmployee",
    value: function deleteEmployee(id) {
      // 1. Logic to search adn then delete Employee
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "searchEmployee",
    value: function searchEmployee(searchObject) {
      // possible value for search object may be as follows
      // EmpNo:1, EmpName:'DDDD', DeptName:'ggg', Designation:'dfff'
      // Search from employee has to0 takes place based on searchObject and data will be returned accordingly
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "searchComplexEmployee",
    value: function searchComplexEmployee(searchObject) {
      // possible value for search object may be as follows
      //  {DeptName:'IT', Designation:'Manager'} and condition
      // This Must return all Employee in IT Dept those are Managers
      return _classPrivateFieldGet(this, _employees);
    }
  }, {
    key: "searchEmployeeByCriria",
    value: function searchEmployeeByCriria(searchObject) {
      // possible value for search object may be as follows
      // EmpName: 'A', all Employees Starts from A
      return _classPrivateFieldGet(this, _employees);
    }
  }]);

  return EmployeeLogic;
}();

function _validateInput2(emp) {
  // Logic to validate the Employee Object
  // EmpNo: Non Negative and Unique
  // EmpName: FirstName {single-space} MiddleName {single-space} LastName
  // DeptName: Must be either of the following, IT, HRD, SALES, ADMIN, ACCOUNTS
  // Designation: MUST be either of the following, Engineer, Manager, Representative, Clerk, Assistant
  // IT (Engineer, Manager)
  // SALES (Manager, Representative, Assistant)
  // HRD (Manager, Clerk)
  // ADMIN (Manager, Clerk, Assistant)
  // ACCOUNTS (Manager, Clerk) 
  return true; //  if validation rules are successful     
}

var UserInterface = /*#__PURE__*/function () {
  function UserInterface() {
    _classCallCheck(this, UserInterface);
  }

  _createClass(UserInterface, [{
    key: "save",
    value: // Access on Save Button
    function save(emp) {// Call to addEmployee of  EmployeeLogic in case of new Entry
      // call to updateEmployee of EmployeeLogic in case of Update
      // call to deleteEmployee of EmployeeLogic in case of Delete
    } // Access this on the Text Change UI Events to search

  }, {
    key: "search",
    value: function search() {// Call to various search methods opf EmployeeLogic class (Define your own UI)
      // make the UI Interactive
    }
  }]);

  return UserInterface;
}();
