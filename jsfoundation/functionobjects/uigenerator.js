// the Constructor function accepts a dataSource
// this will be a collection 
var UIGenerator = function(dataSource){
    // this function wil be used to generate a
    // HTML <select> element
    this.select = function(){
        
        // check if the data is passed to generate the UI
        if(dataSource === undefined || dataSource.length === 0){
            return 'No Data So No UI will be generated'    
        } else {
            var select = '<select>';
            // iterate over the dataSource and Generate a UI
            for(var i=0;i<dataSource.length;i++){
                 select+= '<option value="'+ dataSource[i] +'">'+ dataSource[i] + '</options>';   
            }  
            select += '</select>';
            return select;
        }
    };
}