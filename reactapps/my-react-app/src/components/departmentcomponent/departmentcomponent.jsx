import React, { useState, Fragment } from 'react';

// import the select component
import SelectComponent from '../reusablecomponents/selectcomponent';
import DatagridComponent from '../reusablecomponents/datagridcomponent';
import { MultiSelect } from "react-multi-select-component";

function DepartmentComponent(props) {

    let [department, setDepartment] = useState({ deptno: 0, deptname: '', location: '', capacity: 0 });
    let [departments, updateDepartments] = useState([]);

    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" },
        { label: "Watermelon 🍉", value: "watermelon" },
        { label: "Pear 🍐", value: "pear", disabled: true },
        { label: "Apple 🍎", value: "apple" },
        { label: "Tangerine 🍊", value: "tangerine" },
        { label: "Pineapple 🍍", value: "pineapple" },
        { label: "Peach 🍑", value: "peach" }
    ];

    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const headers = Object.keys(department);
    const save = () => {
        // mutate the departments array with new department object
        updateDepartments([...departments, department]);
    };
    const clear = () => {
        // reset department properties
        setDepartment({ deptno: 0, deptname: '', location: '', capacity: 0 });
    }
    departments.forEach((item, i) => {
        item.id = i + 1;
    });
    const updateDept = (id) => {

        console.log("deleteDept", id);
        //  departments.splice(id, 1);
        console.log("deptsss", department);
        document.getElementById('dv3').innerHTML = JSON.stringify(department);


    }
    const deleteDept = (id) => {

        console.log("deleteDept", id);
        //  departments.splice(id, 1);
        departments = departments.filter((item) => item.id != Number(id))
        updateDepartments(departments);
        console.log("departments", departments);
    }
    // console.log("departments", departments);
    const handleChange = (evt) => {
        console.log("event", evt);

        if (evt.target.name === 'location') {
            setDepartment({ ...department, location: evt.target.value })
        }
        if (evt.target.name === 'capacity') {
            setDepartment({ ...department, capacity: parseInt(evt.target.value) })
        }

    }

    return (
        <>
            <Fragment>
                <h1>{props.message} Department</h1>
                <div className='form-group'>
                    <label>DeptNo</label>
                    <input type="text" value={department.deptno} onChange={(evt) => setDepartment({ ...department, deptno: parseInt(evt.target.value) })} className="form-control" />
                </div>
                <div className='form-group'>
                    <label>DeptName</label>
                    <input type="text" value={department.deptname} onChange={(evt) => setDepartment({ ...department, deptname: evt.target.value })} className="form-control" />
                </div>
                <div className='form-group'>
                    <label>Location</label>
                    {/* <input type="text" value={department.location} onChange={(evt)=>setDepartment({...department, location:evt.target.value})} className="form-control"/> */}
                    {/* <select className='form-control'
                  value={department.location} onChange={(evt)=>setDepartment({...department, location:evt.target.value})}>
                      {
                          locations.map((loc,idx)=>(
                              <option key={idx} value={loc}>{loc}</option>
                          ))
                      }
                  </select> */}
                    {/* The valueProperty will be a prop type that will be used to pass the value to
                  changed/selected from the child aka SelecctComponent*/}
                    <SelectComponent multi={false} name="location" dataSource={locations} valueProperty={department.location}
                        onSelect={handleChange} ></SelectComponent>
                </div>
                <div className='form-group'>
                    <label>Capacity</label>
                    {/* <input type="text" value={department.capacity} onChange={(evt)=>setDepartment({...department, capacity:parseInt(evt.target.value)})} className="form-control"/>
                 */}
                    {/* <select className='form-control'
                  value={department.capacity} onChange={(evt)=>setDepartment({...department, capacity:parseInt(evt.target.value)})}>
                      {
                          capacities.map((cap,idx)=>(
                              <option key={idx} value={cap}>{cap}</option>
                          ))
                      }
                  </select> */}
                    <SelectComponent multi={false} name="capacity" dataSource={capacities} valueProperty={department.capacity}
                        onSelect={handleChange}></SelectComponent>
                </div>
                <div className='form-group'>
                    <input type="button" className='btn btn-warning' value="Clear"
                        onClick={clear} />
                    <input type="button" className='btn btn-success' value="Save" onClick={save} />
                </div>
                <hr />
                <div className='container'>
                    <strong>
                        {/* {JSON.stringify(departments)} */}
                    </strong>
                </div>
                <hr />
                <div>
                    <DatagridComponent getData={(value) => { setDepartment({ ...department, deptno: value }) }}
                        getDataName={(value) => { setDepartment({ ...department, deptname: value }) }} delete={(id) => deleteDept(id)} update={(id) => updateDept(id)} canDelete={true} dataSource={department} dataSource2={departments}
                    ></DatagridComponent>
                </div>
                <div id='dv3'>

                </div>
                {/* Hard-Coding of the table */}
                {/* <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>DeptNo</th>
                        <th>DeptName</th>
                        <th>Location</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         
                        departments.map((dept,idx)=>(
                            <tr key={idx}>
                                <td>{dept.deptno}</td>
                                <td>{dept.deptname}</td>
                                <td>{dept.location}</td>
                                <td>{dept.capacity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            {
                                headers.map((h, idx) => (
                                    <th key={idx}>{h}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map((dept, i) => (
                                <tr key={i}>
                                    {
                                        headers.map((h, idx) => (
                                            <td key={idx}>{dept[h]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </Fragment>
        </>
    );
};

export default DepartmentComponent;
