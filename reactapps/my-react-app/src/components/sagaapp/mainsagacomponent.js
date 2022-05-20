import React from 'react';
import AddDepartmentComponent from './components/adddepartmentsagacomponent';
import ListDepartmentsComponent from './components/listdepartmentssagacomponent';
import LoginComponent from './components/loginsagacomponent'
//import store from './../../index';
import reducers from './reducers/reducers'
const MainReduxSAGAomponent = () => {
    const state = reducers.check;
    console.log("vkkk", state);
    return (
        <div className='container'>

            <AddDepartmentComponent></AddDepartmentComponent>
            <hr />
            <ListDepartmentsComponent></ListDepartmentsComponent>
            <LoginComponent></LoginComponent>
        </div>
    );
};

export default MainReduxSAGAomponent;