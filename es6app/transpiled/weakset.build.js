"use strict";

var ws = new WeakSet();
var o1 = {
  a: 10
};
var o2 = {
  b: 10
};
var o3 = {
  c: 10
};
var o4 = {
  d: 10
};
var o5 = {
  e: 10
};
ws.add(o1);
ws.add(o2);
ws.add(o3);
ws.add(o4);
ws.add(o5);
ws.add(o5); // Duplicate

console.log("Does o2 exists ".concat(ws.has(o2))); // Lest kill o2

o2 = null; // Its Reference is also removed from the Set

console.log("After killing o2 Does o2 exists ".concat(ws.has(o2))); // rebirth o2

o2 = {
  b: 60
};
console.log("After Re-Birth o2 Does o2 exists ".concat(ws.has(o2)));
ws.add(o2); // adding o2 in WeakSet

console.log("Afteradding o2 Does o2 exists ".concat(ws.has(o2)));
