function getData() {
  let response = fetch("https://localhost:7013/api/category", {
    method: "GET",
  });
  return response;
}

let result = getData();
result
  .then((resp) => resp.json()) // Receive a Promise with Resolved Data
  .then((data) => console.log(JSON.stringify(data))) // Subscribe to read data actually 
  .catch((error) => console.log(error)); // Error If any

 // https://gorest.co.in/public/v2/users
function postData() {
   let cat = {
    "CategoryId": "Cat-007",
    "CategoryName": "Mobile",
    "BasePrice":67000
}; 
  let response = fetch("https://localhost:7013/api/category", {
    method: "POST",
    body:JSON.stringify(cat) ,
    headers: {
        "Content-Type": "application/json"
    }
  });
  return response;
}


let result1 = postData();
result1
  .then((resp) => resp.json())
  .then((data) => console.log(JSON.stringify(data)))
  .catch((error) => console.log(error));