"use strict";

var names = ["James Bond", "Ethun Hunt", "Jack Reacher", "Indiana Jones", "Jason Bourn", "Dr. No", "Arnest Stavallo Bloffeld", "Moneypenny", "Kitty", "Tifani Case", "Sinthiya Bond", "Onthetop", "Stella"];
var res = names.map(function (n, idx) {
  if (n.length > 11) {
    n = n.toUpperCase(); // Modify n

    return n;
  }
});
console.log("Sise of names is = ".concat(names.length, " Original Names ").concat(names));
console.log("Size of res = ".concat(res.length, " Names with Modifications ").concat(res));
res.forEach(function (n, idx) {
  console.log("Value at idx ".concat(idx, " is = ").concat(n, " "));
});
