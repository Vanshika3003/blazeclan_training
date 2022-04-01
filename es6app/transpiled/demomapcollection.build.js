"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var myMap = new Map(); // Lets add Key Value pairs

myMap.set(1, {
  EmpNo: 101,
  EmpName: 'ABC'
});
myMap.set(2, {
  EmpNo: 102,
  EmpName: 'DEF'
});
myMap.set(3, {
  EmpNo: 103,
  EmpName: 'GHI'
});
myMap.set(4, {
  EmpNo: 104,
  EmpName: 'JKL'
});
myMap.set(5, {
  EmpNo: 105,
  EmpName: 'MNO'
});
myMap.set(6, {
  EmpNo: 106,
  EmpName: 'PQR'
});
myMap.set(6, {
  EmpNo: 107,
  EmpName: 'STU'
}); // Duplicate Key
// 1. Lets print size of Map

console.log("Size of Map = ".concat(myMap.size)); // Lest print data

var _iterator = _createForOfIteratorHelper(myMap.entries()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var record = _step.value;
    console.log("Key = ".concat(record[0], " and value = ").concat(JSON.stringify(record[1])));
  } // lets delete a record

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

myMap["delete"](6);

var _iterator2 = _createForOfIteratorHelper(myMap.entries()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _record = _step2.value;
    console.log("Key = ".concat(_record[0], " and value = ").concat(JSON.stringify(_record[1])));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
