// creating a reference function
var Mathematics = function(){
    // define a private function
    function Validate(a,b){
        if(a <= 0 || b <= 0){
            return false;
        } else {
            return true;
        }
    }
    // public functions scoped using 'this' object-
    this.add =  function(a,b) {
       // return a + b;
       var res;
       if(!Validate(a,b)){
           res = 0;
       } else {
           res = a + b;
       }
       return res;
    };
    this.addSquare =  function(a,b) {
        // return (a * a) + a*a*b + (b*b);
        var res;
       if(!Validate(a,b)){
           res = 0;
       } else {
           res = (a * a) + 2*a*b + (b*b);
       }
       return res;
    };
}