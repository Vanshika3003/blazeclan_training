// importing React Object Model
import react, {useState} from 'react'; 
import './App.css';

function App() {
  // 1. Define States 
  let [x,setX] = useState(0);
  let [y,setY] = useState(0);
  let [z,setZ] = useState(0);
  // Logic Methods
  const add =()=>{
    setZ(x+y);
  };
  const sub=()=>{
    setZ(x-y);
  }
  return (
    <div className="container">
        <h1>The First Component</h1>
        <div className='form-group'>
          <label>x</label>
          <input type="text" value={x}
           onChange={(evt)=>{setX(parseInt(evt.target.value))}} className="form-control"/>
        </div>
        <div className='form-group'>
          <label>y</label>
          <input type="text" value={y}
           onChange={(evt)=>{setY(parseInt(evt.target.value))}} className="form-control"/>
        </div>
        <div className='form-group'>
          <label>z</label>
          <input type="text" value={z}
          readOnly className="form-control"/>
        </div>
        <div>
          {/*Binding Methods to UI elements' events*/}
           <input type="button" value="Add" className='btn btn-primary'
            onClick={add}/>
           <input type="button" value="Subst" className='btn btn-success'
           onClick={sub}/>
        </div>
    </div>
  );
}

export default App;
