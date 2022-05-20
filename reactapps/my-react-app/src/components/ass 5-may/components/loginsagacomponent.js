import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/action';
import SelectComponent from '../../reusablecomponents/selectcomponent';
const LoginSAGAComponent = () => {

    let [department, setDepartment] = useState({ username: '', password: '', });



    const [message, setMessage] = useState("");


    // define a dispatch object

    const dispatch = useDispatch();


    const save = () => {
        dispatch(login(department));
    };
    const clear = () => {
        // reset department properties
        setDepartment({ deptno: 0, deptname: '', location: '', capacity: 0 });
    }

    return (
        <Fragment>
            <h1>  Department</h1>
            <div className='form-group'>
                <label>Username</label>
                <input type="text" value={department.username} onChange={(evt) => setDepartment({ ...department, username: (evt.target.value) })} className="form-control" />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="text" value={department.password} onChange={(evt) => setDepartment({ ...department, password: evt.target.value })} className="form-control" />
            </div>

            <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                    onClick={clear} />
                <input type="button" className='btn btn-success' value="Save" onClick={save} />
            </div>



        </Fragment>
    );
};

export default LoginSAGAComponent;