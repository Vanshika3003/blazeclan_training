function getData1() {
  return new Promise((resolve, reject) => {
    let http = new XMLHttpRequest();
    http.onload = function () {
      resolve(http.response);
    };

    http.onerror = function (error) {
      reject(`Error Occurred ${error}`);
    };
    http.open("GET", "https://localhost:7013/api/category");
    // send the request
    http.send();
    console.log("Request send and now existing from the method");
  });
}

function getData2() {
  return new Promise((resolve, reject) => {
    let http = new XMLHttpRequest();
    http.onload = function () {
      resolve(http.response);
    };

    http.onerror = function (error) {
      reject(`Error Occurred ${error}`);
    };
    http.open("GET", "https://localhost:7013/api/category");
    // send the request
    http.send();
    console.log("Request send and now existing from the method");
  });
}

// using  async/await
// ES 7 : async means the method is returning a promise object 
async function getData(){
    let res1 = await getData1();
  //  console.log(`First Call ${res1}`);
    let res2 = await getData2();
//    console.log(`Second Call ${res2}`);
    // return resolved values 
    return [res1,res2];
}

 

let result  = getData();
console.log('Calling Async Method');
result.then((resp)=>{
  console.log(resp[0]);
  console.log();
  console.log(resp[1]);
}).catch((error)=>{
console.log('====================================');
console.log('Error Occurred');
console.log('====================================');
});