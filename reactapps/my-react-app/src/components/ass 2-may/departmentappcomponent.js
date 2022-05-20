import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';

import DepartmentService from "../../services/departmentservice";
const DepartmentAppComponent = () => {
    const [departments, setDepartments] = useState([]);
    const [message, setMessage] = useState("");
    const serv = new DepartmentService();

    useEffect(() => {
        async function loadData() {
            try {
                let response = await serv.getData();
                setDepartments(response.data.data);
            } catch (ex) {
                setMessage(`Error Occurred in Loading data ${ex.message}`);
            }
        }
        loadData();

    }, []);

    if (departments.length === 0) {
        <div className="container">
            <h2>No records to Show</h2>
        </div>
    } else {
        return (
            <div className="container">
                <h1>List of Departments</h1>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                                Object.keys(departments[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map((dept, idx) => (
                                <tr key={idx}>
                                    {
                                        Object.keys(departments[0]).map((header, index) => (
                                            <td key={index}>{dept[header]}</td>
                                        ))
                                    }
                                    <td>
                                        <button className="btn btn-warning">
                                            <Link to={`/edit/${dept.deptno}`}>Edit</Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning">
                                            <Link to={`/delete/${dept.deptno}`}>Delete</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};

export default DepartmentAppComponent;
