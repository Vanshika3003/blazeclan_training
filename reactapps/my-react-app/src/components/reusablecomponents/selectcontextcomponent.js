import React, {useContext} from 'react';
// Use DataContext to Subscribew data from it
import {DataContext} from './../datacontext.js';
// use props to receive data from parent 
const SelectContextComponent=()=>{
 
    // subscribe to the data
    let dataSource = useContext(DataContext);

    if(dataSource === undefined || dataSource.length === 0) {
        return (
            <div className='container alert alert-danger'>
                <strong>
                    No Data to Display
                </strong>
            </div>
        );
    }

    return(
        <select className='form-control'>
            {
                dataSource.map((record,index)=>(
                    <option key={index} value={record}>{record}</option>
                ))
            }    
        </select>
    );
};

export default SelectContextComponent;