import styles from "./../../styles/Home.module.css";
import Navigator from "./navigator";
import { table } from 'react-bootstrap';
import React, { useState } from 'react';

// component with props object
const AboutComponent = ({ departments, departmentPost }) => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const save = () => {

    };
    if (departments === undefined || departments.length === 0) {
        return (
            <div className={styles.container}>
                <Navigator></Navigator>
                <h2>The About Component</h2>
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <Navigator></Navigator>
                <h2>The About Component</h2>
                <div>
                    <strong>
                        Received Data:
                        <br />
                        {JSON.stringify(departments)}
                    </strong>
                    <strong>
                        Recived Data after Adding:
                        <br />
                        {/* {JSON.stringify(departmentPost)} */}
                    </strong>
                    <strong>
                        Recived Data after Deleting:
                        <br />
                        {JSON.stringify(departments)}
                    </strong>
                    {/* <table className={styles.table}>
                        <tr>
                            <td>EmpNo</td>
                            <td><input type="text" id="txtEmpNo" className="form-control" /></td>
                        </tr>
                        <tr>
                            <td>EmpName</td>
                            <td><input type="text" id="txtEmpName" className="form-control" /></td>
                        </tr>
                        <tr>
                            <td>Designation</td>
                            <td><input type="text" id="designation" className="form-control" /></td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td><input type="text" id="salary" className="form-control" /></td>
                        </tr>
                        <tr>
                            <td>Dept No</td>
                            <td><input type="text" id="deptno" className="form-control" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" id="btnSave" value="ADD" className="btn btn-primary" />
                                <input type="button" id="btnUpdate" value="Update" className="btn btn-warning" />
                                <input type="button" id="btnDelete" value="Delete" className="btn btn-danger" />
                                <input type="button" id="btnClear" value="Clear" className="btn btn-secondary" />
                            </td>
                        </tr>
                    </table> */}

                    <div className={styles.container}>
                        X:<input type="text" value={x} onChange={(evt) => setX((evt.target.value))} />
                        <br />
                        Y:<input type="text" value={y} onChange={(evt) => setY((evt.target.value))} />
                        <br />

                        <br />
                        <button className='btn btn-success' onClick={save}>Save Data</button>
                        <hr />
                    </div>

                </div>
            </div>
        );
    }
};

// the following method will be executed during build
export async function getStaticProps() {
    console.log(`Making an AJAX Call`);

    let response = await fetch("http://localhost:7013/api/departments");
    const departments = await response.json();
    console.log(`Received data = ${JSON.stringify(departments)}`);
    // let cat = {
    //     "deptno": 110,
    //     "deptname": "IT",
    //     "location": "Hyderabad",
    //     "capacity": 23
    // }
    // let res = await fetch("http://localhost:7013/api/departments", {
    //     method: "POST",
    //     body: JSON.stringify(cat),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });
    // const departmentPost = await res.json();
    let del = await fetch("http://localhost:7013/api/departments/456", {
        method: "DELETE",
        // body: JSON.stringify(cat),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const departmentDel = await del.json();
    return {
        props: {
            departments,
            //  departmentPost,
            departmentDel
        },
    };

}

export default AboutComponent;