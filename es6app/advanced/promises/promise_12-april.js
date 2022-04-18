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
    //   var username = "vanshika";
    //   var password = "vk123";
    //   var base64Credentials = btoa(username+":"+password);
      
      http.open("GET", "http://localhost:100", true, 'vanshika', 'vk123');
     // http.setRequestHeader('X-PINGOTHER', 'pingpong');
   //  http.setRequestHeader("Authorization", "Basic " + base64Credentials);

   //   http.setRequestHeader("Authorization", "Basic " + btoa("username:password"));
      http.withCredentials = true;
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