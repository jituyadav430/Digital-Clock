import './App.css';
import {useState} from 'react';



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
  </>
  );
}



export default App;
