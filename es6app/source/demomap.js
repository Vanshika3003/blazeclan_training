var names = ["James Bond", "Ethun Hunt", "Jack Reacher", "Indiana Jones", "Jason Bourn", "Dr. No", "Arnest Stavallo Bloffeld", "Moneypenny", "Kitty", "Tifani Case", "Sinthiya Bond", "Onthetop", "Stella"]; 

var employee=[
    
        { EmployeeID: 1, EmployeeName: "Vanshika", deptName: "IT", Designation: "Engineer", Salary: 20 },
        { EmployeeID: 2, EmployeeName: "Deeksha", deptName: "Accounts", Designation: "Clerk", Salary: 220 },
        { EmployeeID: 3, EmployeeName: "Rahul", deptName: "Accounts", Designation: "Operator", Salary: 1200 },
        { EmployeeID: 4, EmployeeName: "Shruti", deptName: "Admin", Designation: "Manager", Salary: 4200 },
        { EmployeeID: 5, EmployeeName: "Kabir", deptName: "HRD", Designation: "Manager", Salary: 1200 },
        { EmployeeID: 6, EmployeeName: "Manav", deptName: "HRD", Designation: "Head Manager", Salary: 9200 },

]
var itEmployees,ac,hrd,a;
let sameDeptName=employee.map((n)=>{
    if(n.deptName=='IT'){
        itEmployees++;
        return itEmployees;
    }
    if(n.deptName=='Accounts'){
        ac++;
        return ac;

    }
    if(n.deptName=='HRD'){
        hrd++;
        return hrd;
    }
    if(n.deptName=='Admin'){
        a++;
        return a;
    }
})

let res = names.map((n,idx)=>{
    if(n.length > 1){
        n = n.toUpperCase(); // Modify n
        return n; 
    }
});

// console.log(`Sise of names is = ${names.length} Original Names ${names}`);
// console.log(`Size of res = ${res.length} Names with Modifications ${res}`);

res.forEach((n,idx)=>{
    console.log(`Value at idx ${idx} is = ${n} `);
});
sameDeptName.forEach((n)=>{
    console.log("n",n)
})