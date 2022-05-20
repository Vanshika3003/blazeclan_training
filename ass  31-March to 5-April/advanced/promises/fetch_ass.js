function getData() {
    let response = fetch(" https://reqres.in/api/users", {
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
     let cat =  {"name":"vk","id":"120"}
    let response = fetch(" https://reqres.in/api/users", {
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