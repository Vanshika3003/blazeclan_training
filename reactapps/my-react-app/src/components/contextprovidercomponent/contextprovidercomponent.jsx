import React, {useState} from 'react';
import SelectContextComponent from '../reusablecomponents/selectcontextcomponent';
import SelectContextEventComponent from '../reusablecomponents/selectcontexteventcomponent';
import {DataContext} from './../datacontext.js';

const ContexctProviderComponent=()=>{
  const cities = ['Mumbai', 'Pune', 'Aurangabad', 'Nagpur', 'Kolhapur', 'Nashik'];
  const [city,setCity] = useState('');
  
  return(
      <div className='container'>
          <h3>Using Context to Pass Data to a Specific Child Component</h3>
          {/* Provide value to specific child component  */}
          <DataContext.Provider value={cities}>
                <SelectContextComponent></SelectContextComponent>    
          </DataContext.Provider>
          <hr/>
          <h3>Using Context to Pass Data and Callback to a Specific Child Component and receive data from it</h3>

           {/* The Parent Component is passing Data and its callback to the child using Context.
             The Child will subscribe to the context and read data from it and callback to emit
             data back to parent
           */} 

          <DataContext.Provider value={{cities, setCity}}>
                 <SelectContextEventComponent></SelectContextEventComponent>
          </DataContext.Provider>
          <hr/>
          <div className='container'>
              <strong>
                  Select City is = {city}
              </strong>
          </div>
      </div>
  );
  

};

export default ContexctProviderComponent;