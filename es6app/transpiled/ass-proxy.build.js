"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Target = /*#__PURE__*/_createClass(function Target() {
  _classCallCheck(this, Target);

  _defineProperty(this, "productId", '67899');

  _defineProperty(this, "productName", 'Mobile');

  _defineProperty(this, "categoryName", 'Electr');

  _defineProperty(this, "description", 'White Iphone');

  _defineProperty(this, "manufacturer", 'Apple');

  _defineProperty(this, "price", 200);
}); // define a handler
// lets trap incoming requests


var handler = {
  // target is the object being proxied
  // prop is the Property  from the target object to be proxied
  get: function get(Target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access is denied");
    } else {
      // Provide access
      var val = Target[prop];
      return val;
    }
  },
  // Trap for Write
  // target is the object being proxied
  // prop is the Property  from the target object to be proxied
  // val is value to be written into the Property
  set: function set(Target, prop, val) {
    if (prop === "price") {
      throw new Error("Access is denied, this property cannot be written");
    } else {
      // allow property write
      Target[prop] = val;
      return true;
    }
  },
  // Trap the request for reading all property names from the target object
  ownKeys: function ownKeys(Target) {
    // print only properties those are not started from '_'
    var keys = Object.keys(Target);
    var props = keys.filter(function (p, i) {
      return p[0] !== '_';
    });
    return props;
  },
  ownValues: function ownValues(Target, prop) {
    var val = Target[prop];
    return val;
  }
}; //console.log("handler",handler.ownKeys());
// lets define an instance of target object

var tgt = new Target(); // define a Proxy

var proxyObject = new Proxy(tgt, handler);
var client2 = new Proxy(tgt, handler); // Consumer that wants to read property values

function consumerRead() {
  // lets use the proxyObject to access properties
  console.log("PID  = ".concat(proxyObject.productId));
  console.log("PNAME  = ".concat(proxyObject.productName));
  console.log("CNAME  = ".concat(proxyObject.categoryName));
  console.log("DES  = ".concat(proxyObject.description));
  console.log("MF  = ".concat(proxyObject.manufacturer));
  console.log("PRICE  = ".concat(proxyObject.price)); // Deny the Read doe SecretCode
}

consumerRead(); // Consumer that wants to write the property value

function consumerWrite() {
  // - ProductId, Must start from CLT1--[JS Random-Number]
  // - CategoryName will always be Either Electrical or Electronics
  if (proxyObject.categoryName != 'Electrical' || proxyObject.categoryName != 'Electronics') {
    alert("CategoryName must be Electronics or Electrical");
  }

  if (!proxyObject.productId.startsWith('CLT1--')) {
    console.log("heyy");
    proxyObject.productId = 'CLT1--' + proxyObject.productId;
    console.log("pid", proxyObject.productId);
  }
}

consumerWrite();

function readProps() {
  var keys = Object.keys(proxyObject);
  console.log(keys);
  var vals = Object.values(proxyObject);
  console.log(vals);
}

readProps();
