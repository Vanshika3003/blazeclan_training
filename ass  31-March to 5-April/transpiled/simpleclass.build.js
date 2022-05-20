"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _value = /*#__PURE__*/new WeakMap();

var _message = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var MyClass = /*#__PURE__*/function () {
  // lets define private data members
  // prefixed with hash
  function MyClass(v) {
    _classCallCheck(this, MyClass);

    _classPrivateMethodInitSpec(this, _validate);

    _classPrivateFieldInitSpec(this, _value, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: ""
    });

    // all public declarations are made using the constructor
    // using 'this' prefix
    this.x = 10;
    this.y = 20; // initialize the private member

    _classPrivateFieldSet(this, _value, v);

    _classPrivateFieldSet(this, _message, "");
  } // Private method


  _createClass(MyClass, [{
    key: "Message",
    get: // getter
    function get() {
      return _classPrivateFieldGet(this, _message).toUpperCase();
    } // public methods
    ,
    set: // lets define get/set properties
    // setter
    function set(v) {
      _classPrivateFieldSet(this, _message, v);
    }
  }, {
    key: "power",
    value: function power() {
      if (!_classPrivateMethodGet(this, _validate, _validate2).call(this, _classPrivateFieldGet(this, _value))) return 0;
      return Math.pow(this.x, 5) + _classPrivateFieldGet(this, _value);
    }
  }, {
    key: "add",
    value: function add() {
      if (!_classPrivateMethodGet(this, _validate, _validate2).call(this, _classPrivateFieldGet(this, _value))) return 0;
      return this.x * this.x + 2 * this.x * this.y + this.y * this.y + _classPrivateFieldGet(this, _value);
    }
  }]);

  return MyClass;
}();

function _validate2() {
  if (_classPrivateFieldGet(this, _value) <= 0) return false;
}
