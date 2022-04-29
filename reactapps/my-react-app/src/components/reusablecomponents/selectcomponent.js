import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";

// use props to receive data from parent 
const SelectComponent = (props) => {
    console.log("propssss", props);

    // lets write a method that will be used to emit the selected value from this component
    // to its parent 

    const [selected, setSelected] = useState([]);

    const handleChange = (evt) => {
        // the selected option's value will be
        // passed to the props object's  getSelectedValue() method
        // the parent MUST Subscribe to this method  

        props.getSelectedValue(evt.target.value);
    };


    console.log({ selected });
    if (props.dataSource === undefined || props.dataSource.length === 0) {
        return (
            <div className='container alert alert-danger'>
                <strong>
                    No Data to Display
                </strong>
            </div>
        );
    }
    const isMulti = props.multi;

    return (

        <div>
            {isMulti === false ? (
                <select className='form-control' value={props.valueProperty}
                    onChange={props.onSelect} name={props.name}>
                    {
                        props.dataSource.map((record, index) => (
                            <option key={index} value={record}>{record}</option>
                        ))
                    }

                </select>
            ) : (
                <MultiSelect
                    options={props.dataSource}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                />
            )}
        </div>

    );
}

export default SelectComponent;