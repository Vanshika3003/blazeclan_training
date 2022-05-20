import react, { useState, Fragment } from 'react';
const CheckboxComponent = () => {

    let [courses, setCourses] = useState([
        { CourseName: 'Nestjs', Fees: 120000, isselected: false },
        { CourseName: 'Angular', Fees: 340000, isselected: false },
        { CourseName: 'React', Fees: 40000, isselected: false },
        { CourseName: 'Node.js', Fees: 90000, isselected: false },
        { CourseName: 'Java', Fees: 20000, isselected: false },
    ]
    );
    let [sum, setSum] = useState(0);

    const onValueChange = (items, evt) => {
        alert("I am in" + items)
        if (evt.target.checked) {
            console.log("here");
            setSum(sum + items++)
        } else {
            setSum(sum - items--)
        }
    }
    return (
        <Fragment>
            <div className='container'>
                <h1>CheckBoX List  (ASS-22-April)</h1>
                <table>
                    <tbody>

                        {
                            courses.map((course, idx) => (
                                <tr key={idx}>
                                    <td>{course.CourseName}</td>
                                    <td><input type="checkbox" value={course.Fees} onChange={(evt) => onValueChange(course.Fees, evt)} /></td>

                                </tr>

                            ))
                        }

                    </tbody>
                </table>
                <strong>Total Fees: {sum}</strong>
            </div>
        </Fragment>
    )
}
export default CheckboxComponent;