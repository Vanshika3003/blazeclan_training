import React, {useEffect, useState} from 'react';
import DepartmentService from '../../services/departmentservice';

const AjaxCallComponent=()=>{

    const [records, setRecords] = useState([]);
    const [message, setMessage] = useState('');
    const serv = new DepartmentService();

    useEffect(()=>{
        serv.getData().then((response)=>{
            setRecords(response.data.data);
        }).catch((error)=>{
            setMessage(`Error Occurred ${error}`);
        });
    },[]); // any state property that will be modified  (aka make sure that when the state is updated, uswEffect will stop)

    const save=()=>{
        const dept = {
            deptno:8002, deptname:'dept_8002', location: 'area_51', capacity:78687
        };
        serv.postData(dept).then((response)=>{
            setRecords([...records, response.data.data]);
        }).catch((error)=>{
            setMessage(`Error Occurred ${error}`);
        });
    };

    return(
        <div className='container'>
            <button className='btn btn-primary'>Get Data</button>
            <hr/>
            <button className='btn btn-success' onClick={save}>Save Data</button>
            <hr/>
            <div className='container'>
                {message}
            </div>
            <hr/>
            <div className='container'>
                {JSON.stringify(records)}
            </div>
        </div>
    );
};

export default AjaxCallComponent;