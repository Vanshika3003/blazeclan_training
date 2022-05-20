function getData() {
    return new Promise((resolve, reject) => {
      // define an AJAX Object for HTTP Request
      let http = new XMLHttpRequest();
  
      // Subscribe to the Response received from the External Service
  
      http.onload = function () {
        resolve(http.response);
      };
  
      http.onerror = function (error) {
       reject(`Error Occurred ${error}`);
      };
  
      // initiate a HTTP Request
      // by default the open() method will execute asynchronously
      // to run it synchronously pass the third parameter as 'false'
  
      http.open("GET", "https://gorest.co.in/public/v2/users");
      // send the request
      http.send();
      console.log("Request send and now existing from the method");
    });
  }
  
  function postData(cat) {
      return new Promise((resolve, reject) => {
        // define an AJAX Object for HTTP Request
        let http = new XMLHttpRequest();
    
        // Subscribe to the Response received from the External Service
    
        http.onload = function () {
          resolve(http.response);
        };
    
        http.onerror = function (error) {
         reject(`Error Occurred ${error}`);
        };
    
        // initiate a HTTP Request
        // by default the open() method will execute asynchronously
        // to run it synchronously pass the third parameter as 'false'
    
        http.open("POST", "https://reqres.in/api/users");
        http.setRequestHeader("Content-Type", "application/json");
        // send the request
        http.send(JSON.stringify(cat));
        console.log("Request send and now existing from the method");
      });
    }
    
  
    function putData(id,cat){
      http.open("PUT", "https://localhost:7013/api/category/"+ id);
    }
  
    
    function deleteData(id,cat){
      http.open("DELETE", "https://localhost:7013/api/category/"+ id);
    }