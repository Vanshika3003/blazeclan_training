// the following method returns promise. 
// The Promise object manages (or encapsulates) an async operation
// The Promise object uses the 'resolve' and 'reject' callback
// resolve: function that represents the successful completion of Promise
// reject: function the represents the promise failure
    // -- This could be Communication error, service failure or any other issue occur
    // while executing the request
// The client must subscribe to the promise object using 
// then(): for success
// catch(): for error()    
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

    http.open("GET", "https://localhost:7013/api/category");
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
  
      http.open("POST", "https://localhost:7013/api/category");
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