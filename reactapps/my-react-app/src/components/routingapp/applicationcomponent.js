import React from 'react';
// Import Router Object Model to define Route Table
import { Router, Routes, Route } from 'react-router-dom';
import CreateDepartmentComponent from './createdepartmentcomponent';
import EditDepartmentComponent from './editdepartmentcomponent';
import LayoutComponent from './layoutcomponent';
import ListDepartmentsComponent from './listdepartmentscomponent';
import DeleteDepartmentComponent from './deletedepartmentcomponent';
import DepartmentAppComponent from './departmentappcomponent'
import LayoutAppComponent from './layoutappcomponent'
import NotFoundComponent from './notfoundcomponent';
import ListDeptComponent from './listdeptcomponent';
import ListEmployeeComponent from './listemployeecomponent'
import ListEmpComponent from './listempcomponent'
import EditEmployeeComponent from './editemployeecomponent'
import DeleteEmployeeComponent from './deleteemployeecomponent'
import CreateEmployeeComponent from './createemployeecomponent'
const ApplicationComponent = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<LayoutAppComponent />}>
                    {/* index is a property that represents that this is default UI*/}
                    <Route path="/dept" element={<ListDeptComponent />} />
                    <Route path="/list" element={<DepartmentAppComponent />} />
                    <Route path="/employee" element={<ListEmpComponent />} />
                    <Route path="/employeelist" element={<ListEmployeeComponent />} />
                    <Route path="/create" element={<CreateDepartmentComponent />} />
                    <Route path="/create-employee" element={<CreateEmployeeComponent />} />

                    <Route path="/edit/:deptno" element={<EditDepartmentComponent />} />
                    <Route path="/edit-emp/:empno" element={<EditEmployeeComponent />} />
                    <Route path="/delete-emp/:empno" element={<DeleteEmployeeComponent />} />

                    <Route path="/delete/:deptno" element={<DeleteDepartmentComponent />} />
                    {/* Route with the Route Parameter */}
                    <Route path="*" element={<NotFoundComponent />} />
                </Route>
            </Routes>
        </div>
    );
};

export default ApplicationComponent;