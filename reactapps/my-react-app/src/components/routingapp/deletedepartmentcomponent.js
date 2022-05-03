import react, { useState, Fragment, useEffect } from 'react';
// import hooks to read the parameters from the Route Link and navigate after saving the data
import { useParams, useNavigate } from 'react-router-dom';

import DepartmentService from '../../services/departmentservice';
// import the select component
import SelectComponent from './../reusablecomponents/selectcomponent';


const DeleteDepartmentComponent = (props) => {

    let [department, setDepartment] = useState({ deptno: 0, deptname: '', location: '', capacity: 0 });

    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const serv = new DepartmentService();
    const [message, setMessage] = useState("");

    // define navigate and params object
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.deptno);

    // use useEffect() to load the department data for edit purpose  
    useEffect(() => {
        async function loadData() {
            try {
                let response = await serv.deleteData(id);
                setDepartment(response.data.data);

            } catch (ex) {
                setMessage(`Error Occurred in Loading data ${ex.message}`);
            }
        }
        loadData();
    }, []);

    const save = async () => {
        try {
            let response = await serv.putData(department);
            setMessage('Edit is Successful');
            // navigate to root
            navigate("/");
        } catch (ex) {
            setMessage(ex.message);
        }
    };
    const clear = () => {
        // reset department properties
        setDepartment({ deptno: 0, deptname: '', location: '', capacity: 0 });
    }

    return (
        <Fragment>
            Deleted Successfully



        </Fragment>
    );
};

export default DeleteDepartmentComponent;