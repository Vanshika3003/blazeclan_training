// lets create a IIFE as a Module that return various functions

var module = (function(){

    function sortArray(arr){
        console.log('in Module ' + arr
        );
        var sortedArray = arr.sort(function(a,b){
            return a - b; 
        });

        return sortedArray;
    };

    function reverseStr(str){
        var result;
        for(var i=str.length; i >= 0; i--){
            result+=str[i];
        }
        return result;
    }

    // return the object from a module (IIFE) that will
    // expose functions from the module for public access 
    return {
        sort:sortArray,
        reverse:reverseStr
    }

})();