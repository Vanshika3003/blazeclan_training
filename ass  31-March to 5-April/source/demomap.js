var names = ["James Bond", "Ethun Hunt", "Jack Reacher", "Indiana Jones", "Jason Bourn", "Dr. No", "Arnest Stavallo Bloffeld", "Moneypenny", "Kitty", "Tifani Case", "Sinthiya Bond", "Onthetop", "Stella"];


let res = names.map((n, idx) => {
    if (n.length > 1) {
        n = n.toUpperCase(); // Modify n
        return n;
    }
});

// console.log(`Sise of names is = ${names.length} Original Names ${names}`);
// console.log(`Size of res = ${res.length} Names with Modifications ${res}`);

res.forEach((n, idx) => {
    console.log(`Value at idx ${idx} is = ${n} `);
});
sameDeptName.forEach((n) => {
    console.log("n", n)
})