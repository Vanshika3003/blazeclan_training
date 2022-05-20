"use strict";

window.onload = function () {
  var Products = [{
    ProductId: '101',
    ProductName: 'Iron',
    CategoryName: 'Electrical',
    Manufacturer: 'TATA',
    Price: 9000
  }, {
    ProductId: '102',
    ProductName: 'Samsung',
    CategoryName: 'Mobile',
    Manufacturer: 'Samsung',
    Price: 8000
  }, {
    ProductId: '103',
    ProductName: 'Book1',
    CategoryName: 'Book',
    Manufacturer: 'Books',
    Price: 7000
  }, {
    ProductId: '104',
    ProductName: 'Heater',
    CategoryName: 'Electrical',
    Manufacturer: 'TATA',
    Price: 6000
  }, {
    ProductId: '105',
    ProductName: 'Laptop',
    CategoryName: 'Electronics',
    Manufacturer: 'Samsung',
    Price: 5000
  }]; //Create two arrays

  var Categories = ["Electrical", "Mobile", "Electronics", "Book"];
  var Manufacturers = ["TATA", "Books", "Samsung"]; //

  var lstCat = document.getElementById('lstCat');
  var option = ''; //generate dynamic UI

  for (var i = 0; i < Categories.length; i++) {
    option += '<option value="' + Categories[i] + '">' + Categories[i] + '</option>';
  }

  lstCat.innerHTML = option;
  var lstMan = document.getElementById('lstMan');
  var option = ''; //generate dynamic UI

  for (var i = 0; i < Manufacturers.length; i++) {
    option += '<option value="' + Manufacturers[i] + '">' + Manufacturers[i] + '</option>';
  }

  lstMan.innerHTML = option; //on button

  var myMap = new Map();
  var productId = 101;
  var btnadd = document.getElementById("btnadd");
  btnadd.addEventListener('click', function () {
    //var pid = document.getElementById('txt1').value;
    var pName = document.getElementById('txt2').value;
    var pPrice = parseInt(document.getElementById('txt3').value);
    var pCat = document.getElementById('lstCat').value;
    var pMan = document.getElementById('lstMan').value;
    var product = {
      ProductId: "P".concat(productId),
      ProductName: pName,
      CategoryName: pCat,
      Manufacturer: pMan,
      Price: pPrice
    }; // give it to products literal then push it to products

    Products.push(product);
    myMap.set("P".concat(productId), product);
    console.log("map", myMap);
    productId++; // var i=201;
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
      tabledata += '<tr>';

      for (var j in p) {
        tabledata += '<td>' + Products[i][p[j]] + '</td>';
      }

      tabledata += '</tr>';
    }

    tbodyid.innerHTML = tabledata;
  }, false);

};
