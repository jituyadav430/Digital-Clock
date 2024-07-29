import './App.css';
import {useState} from 'react';
import Demo1 from './Demo1';



function App(){
 
  let NewTime=new Date().toLocaleTimeString();
  let [newt,setTime]=useState(NewTime);

  function changeData(){
    newt= new Date().toLocaleTimeString();
   setTime(newt);
    
    
  }
  return (
  <>
  <h1 className="heading_style"> Get Time </h1>
   <div className="main">
   <h4 className="time"> {NewTime} </h4>
  <button className="time_btn" onClick={changeData}>Click me!</button>
   </div>
   <div>
    <h6>Jitu Yadav</h6>
    <h5>New changes</h5>
    <h5>Developing mode</h5>
    <h5>New developing mode</h5>
    <h5>Jitu kumar</h5>
    <h3>main pe changes</h3>
   </div>
   <Demo1/>
  </>
  );
}



export default App;
