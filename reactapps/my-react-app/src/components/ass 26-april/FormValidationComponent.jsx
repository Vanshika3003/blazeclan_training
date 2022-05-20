import React, { useState, Fragment } from 'react';
import SelectComponent from '../reusablecomponents/selectcomponent';

const FormValidationComponent = () => {
    const [emp, setEmp] = useState({ EmpNo: 0, EmpName: '', Designation: '', DeptName: '', Salary: '', TechnicalExpertise: '' });
    const [isEmpNoValid, checkEmpNo] = useState(true);
    const [isEmpNameValid, checkEmpName] = useState(true);
    const [isEmpNameCapital, checkEmpNameCap] = useState(true);
    const [isEmpNameChar, checkEmpNameChar] = useState(true);

    const [isFormValid, checkForm] = useState(true);

    const [employees, updateEmployees] = useState([]);


    const nospecial = /^[^* | \ " : < > [ ] { } ` \ ( ) '' ; @ & $]+$/;
    const [selected, setSelected] = useState([]);


    const regex = new RegExp('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$');

    const Designations = ['Director', 'CTO', 'Accountant', 'Project Manager', 'Manager', 'Lead', 'Engineer'];
    // const locations  =undefined;
    const DeptName = ['Dev', 'Test', 'Accounts', 'HR', 'System'];
    //  const TechnicalExpertise = ['Management', 'Teacher', 'C++', 'JAVA', 'Python', 'Angular', 'React'];
    const TechnicalExpertise = [
        { label: "Management", value: "Management" },
        { label: "Teacher", value: "Teacher" },
        { label: "C++", value: "C++" },
        { label: "Watermelon", value: "watermelon" },
        { label: "JAVA", value: "JAVA" },
        { label: "Python", value: "Python" },
        { label: "Tangerine", value: "tangerine" },
        { label: "Angular", value: "Angular" },
        { label: "React", value: "React" }
    ];
    const handleChange = (evt) => {
        console.log("event", evt);

        if (evt.target.name === 'EmpNo') {
            setEmp({ ...emp, EmpNo: parseInt(evt.target.value) });
        }
        if (evt.target.name === 'EmpName') {
            setEmp({ ...emp, EmpName: evt.target.value });
        }
        if (evt.target.name === 'Salary') {
            setEmp({ ...emp, Salary: evt.target.value });
        }
        if (evt.target.name === 'Designation') {
            setEmp({ ...emp, Designation: evt.target.value });

        }
        if (evt.target.name === 'DeptName') {
            setEmp({ ...emp, DeptName: evt.target.value });

        }
        if (evt.target.name === 'TechnicalExpertise') {
            setEmp({ ...emp, TechnicalExpertise: evt.target.value });

        }

        validateForm(evt.target.name, evt.target.value);
    }

    const validateForm = (name, value) => {
        if (name === "EmpNo") {
            if (parseInt(value) < 0 || value.length >= 8) {
                checkEmpNo(false);
                checkForm(false);
            } else {
                checkEmpNo(true);
                checkForm(true);
            }
        }

        if (name === "EmpName") {
            if (value.length < 2) {
                checkEmpName(false);
                checkForm(false);
            }
            else if (value[0] == value[0].toLowerCase()) {
                checkEmpNameCap(false);
                checkForm(false);
            }
            else if (!regex.test(value)) {
                checkEmpNameChar(false);
                checkForm(false);
            }

            else {
                checkEmpName(true);
                checkForm(true);
            }
        }
    };
    const save = () => {
        updateEmployees([...employees, emp]);
        // setEmp(emp);
    };

    return (

        // <div className='container'>
        //     <h2>The Form Validations</h2>
        //     <form name="frmEmp">
        //         <div className='form-group'>
        //             <label>EmpNo</label>
        //             <input type="text" className='form-control' name="EmpNo"
        //                 value={emp.EmpNo} onChange={handleChange} />
        //             <div className='alert alert-danger' hidden={isEmpNoValid}>
        //                 EmpNo MUST be +ve integer and not have more than 8 Digit Numbers
        //             </div>
        //         </div>
        //         <div className='form-group'>
        //             <label>EmpName</label>
        //             <input type="text" className='form-control' name="EmpName"
        //                 value={emp.EmpName} onChange={handleChange} />
        //             <div className='alert alert-danger' hidden={isEmpNameValid}>
        //                 EmpName must be minimum 2 characters long
        //             </div>
        //         </div>
        //         <div className='form-group'>
        //             <label>Designation</label>
        //             <SelectComponent multi={false} dataSource={Designations} name='Designation' onSelect={handleChange}></SelectComponent>
        //         </div>
        //         <div className='form-group'>
        //             <label>DeptName</label>
        //             <SelectComponent multi={false} dataSource={DeptName} name='DeptName' onSelect={handleChange}></SelectComponent>
        //         </div>
        //         <div className='form-group'>
        //             <label>Salary</label>
        //             <input type="text" className='form-control' name="Salary"
        //                 value={emp.Salary} onChange={handleChange} />

        //         </div>
        //         <div className='form-group'>
        //             <label>Technical Expertise</label>
        //             <SelectComponent multi={true} dataSource={TechnicalExpertise} valueProperty={emp.TechnicalExpertise}
        //                 selected={(value) => { setEmp({ ...emp, TechnicalExpertise: value }) }}></SelectComponent>
        //         </div>
        //         <div className='form-group'>
        //             <input type="reset" value="Reset" className='btn btn-warning' />
        //             <input type="submit" value="Save" className='btn btn-success'
        //                 disabled={!isFormValid}
        //                 onClick={save} />
        //         </div>
        //     </form>
        //     <hr />
        //     <div className='container'>
        //         <strong>
        //             {JSON.stringify(employees)}
        //         </strong>
        //     </div>
        // </div>
        <Fragment>

            <h1 className="text-center">ASS -26-APRIL</h1>
            {/* { isEmpNameValidRule1 && <ValidationSummaryComponent dataSource={isEmpNameValidRule1}/>}
    { isEmpNameValidRule2 || <ValidationSummaryComponent dataSource={isEmpNameValidRule2}/>} */}
            <form name="frmEmp">
                <div className="container">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label>EmpNo</label>
                                        <input type="text" className="form-control" name="EmpNo" value={emp.EmpNo} onChange={handleChange} />

                                        <div className='alert alert-danger' hidden={isEmpNoValid}>
                                            EmpNo MUST be +ve integer and not have more than 8 Digit Numbers
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label>EmpName</label>
                                        <input type="text" className="form-control" name="EmpName" value={emp.EmpName} onChange={handleChange} />
                                    </div>
                                    <div className='alert alert-danger' hidden={isEmpNameValid}>
                                        EmpName must be minimum 2 characters long
                                    </div>
                                    <div className='alert alert-danger' hidden={isEmpNameCapital}>
                                        First digit of EmpName should be capital
                                    </div>
                                    <div className='alert alert-danger' hidden={isEmpNameChar}>
                                        EmpName must not contain any character

                                    </div>


                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label>Designation</label>
                                        <SelectComponent dataSource={Designations} name="Designation" multi={false} valueProperty={emp.Designation}
                                            onSelect={handleChange}></SelectComponent>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label>Department Name</label>
                                        <SelectComponent dataSource={DeptName} name="DeptName" multi={false} valueProperty={emp.DeptName}
                                            onSelect={handleChange}></SelectComponent>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input type="text" className="form-control" name="Salary" value={emp.Salary} onChange={handleChange} />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label>Technical Experties</label>
                                        <SelectComponent dataSource={TechnicalExpertise} multi={true} name="TechnicalExpertise"
                                            onSelect={handleChange} ></SelectComponent>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="text-center">
                                        <input type="button" value="Save" className="btn btn-success" disabled={!isFormValid}
                                            onClick={save} />
                                    </div>
                                </td>
                                <td>
                                    <div className="text-center">
                                        <input type="reset" value="Clear" className="btn btn-warning" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <div className='container'>
                        <strong>

                            {JSON.stringify(employees)}
                        </strong>
                    </div>

                </div>
            </form>
        </Fragment>
    );
};

export default FormValidationComponent;