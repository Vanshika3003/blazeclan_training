"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Actual Target Object
var Target = /*#__PURE__*/_createClass(function Target() {
  _classCallCheck(this, Target);

  _defineProperty(this, "message", "A Message from teh target object");

  _defineProperty(this, "data", 1000);

  _defineProperty(this, "firstName", "Mahesh");

  _defineProperty(this, "lastName", "Sabnis");

  _defineProperty(this, "Email", "mahesh.sabnis@blazeclan.com");

  _defineProperty(this, "Designation", "Consultant");

  _defineProperty(this, "_SecretCode", "***********");
}); // define a handler
// lets trap incoming requests


var handler = {
  // target is the object being proxied
  // prop is the Property  from the target object to be proxied
  get: function get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access is denied");
    } else {
      // Provide access
      var val = target[prop];
      return val;
    }
  },
  // Trap for Write
  // target is the object being proxied
  // prop is the Property  from the target object to be proxied
  // val is value to be written into the Property
  set: function set(target, prop, val) {
    if (prop === "Email") {
      throw new Error("Access is denied, this property cannot be written");
    } else {
      // allow property write
      target[prop] = val;
      return true;
    }
  },
  // Trap the request for reading all property names from the target object
  ownKeys: function ownKeys(target) {
    // print only properties those are not started from '_'
    var keys = Object.keys(target);
    var props = keys.filter(function (p, i) {
      return p[0] !== '_';
    });
    return props;
  },
  ownValues: function ownValues(target, prop) {
    var val = target[prop];
    return val;
  }
}; // lets define an instance of target object

var tgt = new Target(); // define a Proxy

var proxyObject = new Proxy(tgt, handler); // Consumer that wants to read property values

function consumerRead() {
  // lets use the proxyObject to access properties
  console.log("Data  = ".concat(proxyObject.data));
  console.log("Message  = ".concat(proxyObject.message));
  console.log("First Name  = ".concat(proxyObject.firstName));
  console.log("Last Name  = ".concat(proxyObject.lastName));
  console.log("Email  = ".concat(proxyObject.Email));
  console.log("Occupation  = ".concat(proxyObject.Designation)); // Deny the Read doe SecretCode

  console.log("Secret Code = ".concat(proxyObject._SecretCode));
}

consumerRead(); // Consumer that wants to write the property value

function consumerWrite() {
  proxyObject.firstName += "Mr.";
  console.log(proxyObject.firstName); // Following Operation MUST be denied

  proxyObject.Email = "m.s@ms.com";
}

consumerWrite();

function readProps() {
  var keys = Object.keys(proxyObject);
  console.log('====================================');
  console.log(keys);
  console.log('====================================');
  var vals = Object.values(proxyObject);
  console.log('====================================');
  console.log(vals);
  console.log('====================================');
}

readProps();
