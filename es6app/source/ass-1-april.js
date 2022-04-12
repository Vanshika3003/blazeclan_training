window.onload =function () {
var Products = [
   
]
//Create two arrays
var Categories = ["Electrical", "Mobile", "Electronics", "Book"];
var Manufacturers = ["TATA", "Books", "Samsung"];

//
var lstCat = document.getElementById('lstCat');
var option = '';
//generate dynamic UI
for (var i = 0; i < Categories.length; i++) {
    option += '<option value="' + Categories[i] + '">' + Categories[i] + '</option>';
}
lstCat.innerHTML = option;

var lstMan = document.getElementById('lstMan');
var option = '';
//generate dynamic UI
for (var i = 0; i < Manufacturers.length; i++) {
    option += '<option value="' + Manufacturers[i] + '">' + Manufacturers[i] + '</option>';
}
lstMan.innerHTML = option;

//on button
var myMap = new Map();
var CategoryMap=new Map();
var ManufacturerMap=new Map();
var productId=101;

var btnadd = document.getElementById("btnadd");
btnadd.addEventListener('click', function () {
    //var pid = document.getElementById('txt1').value;
    var pName = document.getElementById('txt2').value;
    var pPrice = parseInt(document.getElementById('txt3').value);
   var pCat = document.getElementById('lstCat').value;
    var pMan = document.getElementById('lstMan').value;

    var product = { ProductId:`P${productId}`, ProductName: pName, CategoryName: pCat, Manufacturer: pMan, Price: pPrice };

    // give it to products literal then push it to products
    Products.push(product);
    myMap.set(`P${productId}`,product);
    genCategoryMap(product);
    genManufacturerMap(product);
console.log("map",myMap);
console.log("CategoryMap",CategoryMap);
console.log("ManufacturerMap",ManufacturerMap);

productId++;
    // var i=201;
    // myMap.set(i++,product);

    console.log(myMap);

    console.log("========================================================");
    var table = document.getElementById("table");
    var theadid = document.getElementById("theadid");
    var tbodyid = document.getElementById("tbodyid");

    var heading = [];
    console.log("my data----" + Object.keys(product));

    var p = Object.keys(product);
    console.log("my data" + p);
    for (var i = 0; i < p.length; i++) {
        // heading += '<tr><th>'+p[0]+'</th><th>'+p[1]+'</th><th>'+p[2]+'</th><th>'+p[3]+'</th><th>'+p[4]+'</th></tr>' ;
        heading += '<th>' + p[i] + '</th>';
    }
    theadid.innerHTML = heading;
    var tabledata = [];
    for (var i = 0; i < Products.length; i++) {
        tabledata += '<tr>'
        for (var j in p) {
            tabledata += '<td>' + Products[i][p[j]] + '</td>';
        }
        tabledata += '</tr>';
    }
    tbodyid.innerHTML = tabledata;
}, false)
function genCategoryMap(product) {
    console.log("product",product);
    if(CategoryMap.has(product.CategoryName))
    {
        CategoryMap.set(product.CategoryName,[
            ...CategoryMap.get(product.CategoryName),
            product,
        ]) 
        console.log("ifff",CategoryMap);

    }
    else{
        CategoryMap.set(product.CategoryName,[product])
    }

}
function genManufacturerMap(product) {
    console.log("product",product);
    if(ManufacturerMap.has(product.Manufacturer))
    {
        ManufacturerMap.set(product.Manufacturer,[
            ...ManufacturerMap.get(product.Manufacturer),
            product,
        ]) 
        console.log("ifff",ManufacturerMap);

    }
    else{
        ManufacturerMap.set(product.Manufacturer,[product])
    }

}
}