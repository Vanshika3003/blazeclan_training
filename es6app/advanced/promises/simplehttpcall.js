// using XmlHttpRequest object
// XmlHttpRequest: Object for HTTP calls
// Methods + Events to manage the HTTP Communication
// open(): to establish connection with remote Service
// send(): To send HTTP request. By Default no parameters 
// but in case of POST/PUT request we must send the body
// setRequestHeader(): Method used in case of POST and PUT request 
// to pass data on HTTP Request Header e.g. Content-Type
// onload: the Callback event that will receive the response from external service
// onerror: the callback event for handling communication error with external service

function getData(){
    console.log('In Method');
    // declare an array for response
    let categories = [];
    // define an AJAX Object for HTTP Request
    let http = new XMLHttpRequest();    

    // Subscribe to the Response received from the External Service

    http.onload = function(){
        categories = http.response;
        console.log(`Received response is = ${JSON.stringify(categories)}`);
    };

    http.onerror = function(error){
        console.log(`Error Occurred ${error}`);
    }


    // initiate a HTTP Request 
    // by default the open() method will execute asynchronously
    // to run it synchronously pass the third parameter as 'false'

    http.open('GET', 'https://localhost:7013/api/category', false);
    // send the request
    http.send();
    console.log('Request send and now existing from the method');
   
    // return data
    return categories;
}