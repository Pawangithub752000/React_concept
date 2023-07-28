
import { useState,useRef, useEffect } from 'react';
import { FaSistrix } from "react-icons/fa";
import './App.css';


function App() {
  // focus on search input:-
  const[showInput, setShowInput] = useState(false)
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current?.focus();
  },[showInput]);
  return (
    <div className="App">
     <FaSistrix onClick={()=>setShowInput(!showInput)}/>
     <br/>
     {showInput && <input type="text" ref={inputRef}/>}
    </div>
  );
}

export default App;

/*
useRef hook ka 

*/
