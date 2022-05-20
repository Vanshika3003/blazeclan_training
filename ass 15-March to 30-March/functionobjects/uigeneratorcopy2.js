// the Constructor function accepts a dataSource
// this will be a collection 
var UIGenerator = function(dataSource){
    // this function wil be used to generate a
    // HTML <select> element
    console.log("here"+dataSource);
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

    this.table = function(){ 
       // var p = Object.keys(dataSource.);
       // console.log("Keys are "+p);
        if(dataSource === undefined || dataSource.length === 0){
            return 'No Data So No UI will be generated'    
        } else{
            var k =0;
            var table = '<table border="1" ><thead><tr><th>ProductRowId</th><th>ProductId</th><th>ProductName</th><th>CategoryName</th><th>Manufacturer</th><th>Description</th><th>Price</th></tr></thead><tbody>';
           for(j of dataSource){
            for(var i=0;i<dataSource.length;i++){
                console.log("here 3"+dataSource[i]['ProductRowId']);
                table+= '<tr><td>'+dataSource[i]['ProductRowId']+'</td><td>'+dataSource[i]['ProductId']+'</td><td>'+dataSource[i]['ProductName']+'</td><td>'+dataSource[i]['CategoryName']+'</td><td>'+dataSource[i]['Manufacturer']+'</td><td>'+dataSource[i]['Description']+'</td><td>'+dataSource[i]['Price']+'</td></tr>';
            }
            table +='</tbody></table>';
            return table;
        }}
    };
}