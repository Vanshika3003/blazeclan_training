import react,{useState, Fragment} from 'react';
const DepartmentComponent=()=>{

    let [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    let [departments, updateDepartments] = useState([]);
    
    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];

    const save=()=>{
        // mutate the departments array with new department object
        updateDepartments([...departments, department]);
    };
    const clear=()=>{
        // reset department properties
        setDepartment({deptno:0, deptname:'', location:'',capacity:0});
    }

    return(
        <Fragment>
            <div className='form-group'>
                <label>DeptNo</label>
                <input type="text" value={department.deptno} onChange={(evt)=>setDepartment({...department, deptno:parseInt(evt.target.value)})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>DeptName</label>
                <input type="text" value={department.deptname} onChange={(evt)=>setDepartment({...department, deptname:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Location</label>
                {/* <input type="text" value={department.location} onChange={(evt)=>setDepartment({...department, location:evt.target.value})} className="form-control"/> */}
                <select className='form-control'
                  value={department.location} onChange={(evt)=>setDepartment({...department, location:evt.target.value})}>
                      {
                          locations.map((loc,idx)=>(
                              <option key={idx} value={loc}>{loc}</option>
                          ))
                      }
                  </select>
            </div>
            <div className='form-group'>
                <label>Capacity</label>
                <input type="text" value={department.capacity} onChange={(evt)=>setDepartment({...department, capacity:parseInt(evt.target.value)})} className="form-control"/>
            </div>
            <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                 onClick={clear}/>
                <input type="button" className='btn btn-success' value="Save" onClick={save}/>
            </div>
            <hr/>
            <div className='container'>
                <strong>
                    {JSON.stringify(departments)}
                </strong>
            </div>
            <hr/>
            <table className='table table-bordered table-striped'>
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
                        /* Iterate over the departments */
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
            </table>
        </Fragment>
    );
};

export default DepartmentComponent;