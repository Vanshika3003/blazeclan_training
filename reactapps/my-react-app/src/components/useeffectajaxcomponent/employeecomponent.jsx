import React, { useEffect, useState } from 'react';
import EmployeeService from '../../services/employeeservice';

const EmployeeComponent = () => {

    const [records, setRecords] = useState([]);
    const [message, setMessage] = useState('');
    const serv = new EmployeeService();

    useEffect(() => {
        serv.getData().then((response) => {
            setRecords(response.data.data);
        }).catch((error) => {
            setMessage(`Error Occurred ${error}`);
        });
    }, []); // any state property that will be modified  (aka make sure that when the state is updated, uswEffect will stop)

    const save = () => {
        const emp = {
            empno: 212,
            empname: "Dev",
            designation: "eng",
            salary: 15,
            deptno: 1
        };
        serv.postData(emp).then((response) => {
            setRecords([...records, response.data.data]);
        }).catch((error) => {
            setMessage(`Error Occurred ${error}`);
        });
    };

    return (
        <div className='container'>
            <button className='btn btn-primary'>Get Data</button>
            <hr />
            <button className='btn btn-success' onClick={save}>Save Data</button>
            <hr />
            <div className='container'>
                {message}
            </div>
            <hr />
            <div className='container'>
                {JSON.stringify(records)}
            </div>
        </div>
    );
};

export default EmployeeComponent;