
import React, { Fragment, useState } from 'react';
// use props to receive data from parent 
const DatagridComponent = (props) => {

    console.log("propss", props);
    // lets write a method that will be used to emit the selected value from this component
    // to its parent 
    const onChange = (e) => {
        const html = e.target.innerHTML;
        console.log("jtmm", html);
    };

    const headers = Object.keys(props.dataSource);
    const data = Object.values(props.dataSource2);

    console.log("dataa", data);
    return (
        <Fragment>
            DATA GRID TABLE
            <table className='table table-bordered table-striped'>

                <thead>
                    <tr >
                        {

                            headers.map((header) => (
                                <th >{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {

                        data.map((dept, idx) => (
                            <tr key={idx}>

                                <td onInput={onChange} contenteditable='true'>{dept.deptno}</td>
                                <td onInput={onChange} contenteditable='true'>{dept.deptname}</td>
                                <td onInput={onChange} contenteditable='true'>{dept.location}</td>
                                <td>{dept.capacity}</td>

                                <td>   <input type="button" className='btn btn-warning' value="Delete" onClick={() => props.delete(dept.id)} />

                                </td>

                                <td><input type="button" className='btn btn-success' value="Update" /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    )

};

export default DatagridComponent;