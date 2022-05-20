import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent, waitFor, screen } from '@testing-library/react'

import ReactDOM from "react-dom/client";
import { act } from 'react-dom/test-utils'
// import the component being tested
import FormValidationComponent from './../components/validationcomponent/FormValidationComponent';

// test suit and test case
describe('Test Suit for the DepartmentTestComponent', () => {

    //define a DOM Container, this will be created in memory with DOM

    let DOMContainer = null;

    let root = null;

    beforeEach(() => {
        DOMContainer = document.createElement("div");
        document.body.appendChild(DOMContainer);
        //root =  ReactDOM.createRoot(DOMContainer)
    });

    //write the test cases
    it('Validating the form', () => {
        act(() => {
            render(<FormValidationComponent />, DOMContainer);
        });

        // lets look for the button from the DOM
        const empNo = document.getElementsByName('EmpNo')[0];
        fireEvent.change(empNo, {
            target: { value: "-10" }
        })
        const empName = document.getElementsByName('EmpName')[0];
        fireEvent.change(empName, {
            target: { value: "vanshika" }
        })
        // lets look for the element that is having class as 'table'
        const alertBox = document.getElementsByClassName('alert-danger')[0];
        const expectedAlertBox = 'EmpNo MUST be +ve integer and not have more than 8 Digit Numbers'
        expect(alertBox).toBeTruthy();
        expect(alertBox.innerHTML).toBe(expectedAlertBox);

        const alertBoxName = document.getElementsByClassName('alert-danger')[1];
        const expectedAlertBoxName = 'EmpName must be minimum 2 characters long'
        expect(alertBoxName).toBeTruthy();
        expect(alertBoxName.innerHTML).toBe(expectedAlertBoxName);

        const alertBoxName1 = document.getElementsByClassName('alert-danger')[2];
        const expectedAlertBoxName1 = 'First digit of EmpName should be capital'
        expect(alertBoxName1).toBeTruthy();
        expect(alertBoxName1.innerHTML).toBe(expectedAlertBoxName1);
        // lets dispatch the click event on button

        // expect(tableRows.length).toBeTruthy();

    });

});
