import react, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import EmployeeService from '../../services/employeeservice';
// import the select component
import SelectComponent from './../reusablecomponents/selectcomponent';


const CreateEmployeeComponent = (props) => {

    let [department, setDepartment] = useState({ empno: 0, empname: '', designation: '', salary: 0, deptno: 0 });

    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const serv = new EmployeeService();
    const [message, setMessage] = useState("");
    const Designations = ['Director', 'CTO', 'Accountant', 'Project Manager', 'Manager', 'Lead', 'Engineer'];

    // lets define a navigate object
    const navigate = useNavigate();



    const save = async () => {
        try {
            let response = await serv.postData(department);
            setMessage('Add is Successful');
            // Navigate to the default page
            navigate("/employeelist")
        } catch (ex) {
            setMessage(ex.message);
        }
    };
    const clear = () => {
        // reset department properties
        setDepartment({ deptno: 0, deptname: '', location: '', capacity: 0 });
    }
    const handleChange = (evt) => {
        console.log("event", evt);

        if (evt.target.name === 'designation') {
            setDepartment({ ...department, designation: evt.target.value })
        }
        if (evt.target.name === 'salary') {
            setDepartment({ ...department, salary: parseInt(evt.target.value) })
        }

    }
    return (
        <Fragment>
            <h1>{props.message} Employees</h1>
            <div className='form-group'>
                <label>EmpNo</label>
                <input type="text" value={department.empno} onChange={(evt) => setDepartment({ ...department, empno: parseInt(evt.target.value) })} className="form-control" />
            </div>
            <div className='form-group'>
                <label>EmpName</label>
                <input type="text" value={department.empname} onChange={(evt) => setDepartment({ ...department, empname: evt.target.value })} className="form-control" />
            </div>
            <div className='form-group'>
                <label>Designation</label>


                <SelectComponent multi={false} name="designation" dataSource={Designations} valueProperty={department.designation}
                    onSelect={handleChange} ></SelectComponent>
            </div>
            <div className='form-group'>
                <label>Salary</label>


                <SelectComponent multi={false} name="salary" dataSource={capacities} valueProperty={department.salary}
                    onSelect={handleChange} ></SelectComponent>
            </div>
            <div className='form-group'>
                <label>Deptno</label>
                <input type="text" value={department.deptno} onChange={(evt) => setDepartment({ ...department, deptno: evt.target.value })} className="form-control" />
            </div>
            <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                    onClick={clear} />
                <input type="button" className='btn btn-success' value="Save" onClick={save} />
            </div>



        </Fragment>
    );
};

export default CreateEmployeeComponent;