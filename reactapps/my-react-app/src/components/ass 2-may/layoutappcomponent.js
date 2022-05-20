import React from 'react';
// Router Object Model
import { Link, Outlet } from 'react-router-dom';

const LayoutAppComponent = () => {
    return (
        <div className='container'>
            <table className='table table-bordered table-striped'>
                <tbody>
                    <tr>
                        <td>
                            {/* This will map to the index in route table
                          refer mainroutingcomponent.js and Route with index attribute  */}
                            <Link to="/dept"> Departments</Link>
                        </td>
                        <td>
                            <Link to="/employee">Employees</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {/* Components will be Mounted Here */}
            <Outlet />
        </div>
    );
};

export default LayoutAppComponent;