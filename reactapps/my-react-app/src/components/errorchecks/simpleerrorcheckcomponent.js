import React, {useState} from 'react';

const MyComponent=()=>{
    let [counter, updateCounter] = useState(0);
    const clickMe=()=>{
      
        updateCounter(counter++);
    }

    const counterChecker=()=>{
        
         return (  <div className='container'>
            <h2>The Child Component</h2>
            <div className='container'>
                Current Counter Value is = {counter}
            </div>
            <button className='btn btn-danger' onClick={clickMe}>Click Me Till Collapse</button>
        </div>);  
       
    };

    const fallBackUI =(error)=>{
        return (  <div className='container'>
            <h2>The Child Component</h2>
            <div className='container'>
              { `Error Occurred ${error.message}`}
            </div>
            
        </div>);  
    };

// Use a JavaScript mechanism to handle the error
    try {
        if(counter > 10){
            throw new Error('You are Collapsed.....');
        } else {
            return counterChecker();
        }
    }catch(error){
        return fallBackUI(error);
    }
     
};

const ContainerComponent=()=>{
const click=()=>{
    alert('Primary');
}
return (
    <div className='container'>
        <h1>The Container Component</h1>
        <MyComponent></MyComponent>
        <hr/>
        <h6>Still the Container Component</h6>
        <button className='btn btn-primary' onClick={click}>Parent</button>
    </div>
);
};

export default ContainerComponent;