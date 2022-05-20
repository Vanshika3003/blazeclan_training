import q from "q";
import http from "http";

class DataAccess {
  // method to make call to REST API using http module
  getData(options) {
    // start monitoring
    let defer = q.defer();
    let result;
    let responseData;
    if (!options) {
      defer.reject("Server Configuration is missing");
    } else {
      result = http.request(options, (res) => {
        // receive the Data over the request
        res.on("data", (d) => {
          responseData = d;
        });

        // tell to defer that the data is available so that it can be
        // delivered to client
        res.on("end", () => {
          try {
            // success
            defer.resolve(responseData);
          } catch (ex) {
            defer.reject(`Some Error Occurred ${ex}`);
          }
        });
      });
    }
    // end the execution
    result.end();
    // return Final Final Promise from the defer
    return defer.promise;
  }
}

export default DataAccess;
