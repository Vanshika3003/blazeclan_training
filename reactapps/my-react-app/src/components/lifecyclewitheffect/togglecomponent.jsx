import React, {Fragment, useState} from 'react';
import MouseMoveComponent from './mousemovecomponent';
const ToggleComponent=()=>{
    const [show, canShow] = useState(true);
    return(
        <Fragment>
            <h1>Toggel to Load/UnLoad the Mouse Move Component</h1>
            <button onClick={()=>{
                canShow(!show)
            }}>Toggle</button>
            {
                show && <MouseMoveComponent></MouseMoveComponent>
            }

            <div className='container'>
                <strong>
                    Currently Rendering the Toggle Component
                </strong>
            </div>
        </Fragment>
    );
};

export default ToggleComponent;