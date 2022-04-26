import React, {useState} from 'react';

const FormValidationComponent=()=>{
    const [emp,setEmp] = useState({EmpNo:0,EmpName:''});
    const [isEmpNoValid,checkEmpNo] = useState(true);
    const [isEmpNameValid,checkEmpName] = useState(true);
    const [isFormValid,checkForm] = useState(true);
    const save=()=>{
        setEmp(emp);
    };

    const handleChange=(evt)=>{
        if(evt.target.name === 'EmpNo'){
            setEmp({...emp, EmpNo:parseInt(evt.target.value)});
        }
        if(evt.target.name === 'EmpName'){
            setEmp({...emp, EmpName:evt.target.value});
        }
      validateForm(evt.target.name,evt.target.value);
    }

    const validateForm=(name,value)=>{
        if(name === "EmpNo"){
            if(parseInt(value)<0){
                checkEmpNo(false);
                checkForm(false);
            }else {
                checkEmpNo(true);
                checkForm(true);
            }
        }

        if(name === "EmpName"){
            if(value.length<2){
                checkEmpName(false);
                checkForm(false);
            }else {
                checkEmpName(true);
                checkForm(true);
            }
        }

    };
    return (
        <div className='container'>
            <h2>The Form Validations</h2>
            <form name="frmEmp">
                <div className='form-group'>
                    <label>EmpNo</label>
                    <input type="text" className='form-control' name="EmpNo"
                     value={emp.EmpNo} onChange={handleChange}/>
                     <div className='alert alert-danger' hidden={isEmpNoValid}>
                         EmpNo MUST be +ve integer
                     </div>
                </div>
                <div className='form-group'>
                    <label>EmpName</label>
                    <input type="text" className='form-control' name="EmpName"
                    value={emp.EmpName} onChange={handleChange}/>
                     <div className='alert alert-danger' hidden={isEmpNameValid}>
                         EmpName must be minimum 2 characters long 
                     </div>
                </div>
                <div className='form-group'>
                   <input type="reset" value="Reset" className='btn btn-warning'/>
                   <input type="submit" value="Save" className='btn btn-success'
                    disabled={!isFormValid}
                    onClick={save}/>
                </div>
            </form>
            <hr/>
            <div className='container'>
               <strong>
                   {JSON.stringify(emp)}
               </strong>
            </div>    
        </div>
    );
};

export default FormValidationComponent;