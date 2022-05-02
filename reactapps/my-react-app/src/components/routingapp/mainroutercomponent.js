import React from 'react';
// Import Router Object Model to define Route Table
import {Router, Routes, Route} from 'react-router-dom';
import CreateDepartmentComponent from './createdepartmentcomponent';
import EditDepartmentComponent from './editdepartmentcomponent';
import LayoutComponent from './layoutcomponent';
import ListDepartmentsComponent from './listdepartmentscomponent';
import NotFoundComponent from './notfoundcomponent';
const MainRouterComponent=()=>{
    return(
        <div className='container'>
            <Routes>
                <Route path="/" element={<LayoutComponent/>}>
                    {/* index is a property that represents that this is default UI*/}
                    <Route index element={<ListDepartmentsComponent/>}/>
                    <Route path="/create" element={<CreateDepartmentComponent/>}/>
                    {/* Route with the Route Parameter */}
                    <Route path="/edit/:deptno" element={<EditDepartmentComponent/>}/>
                    <Route path="*" element={<NotFoundComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default MainRouterComponent;