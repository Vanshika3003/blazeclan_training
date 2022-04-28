import React, {useState,useEffect, Fragment} from 'react';

const MouseMoveComponent=()=>{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);


    const getMouseCoordinates=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);

        console.log('====================================');
        console.log(`x = ${x} and y = ${y}`);
        console.log('====================================');
    };

    useEffect(()=>{
        // subscribe to the global event (Initialization)
        window.addEventListener('mousemove', getMouseCoordinates);

        // Kill or de-register the event (Clean-Up)
        return(()=>{
            window.removeEventListener('mousemove', getMouseCoordinates);
        })
    },[]);


    return(
        <Fragment>
            <h2>The Mouse Movement Capture</h2>
            <div className='container'>
                <strong>
                    X-Position : {x} && Y-Position : {y}
                </strong>
            </div>
        </Fragment>
    );
};

export default MouseMoveComponent;