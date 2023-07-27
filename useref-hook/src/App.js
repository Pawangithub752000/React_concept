import {  useState } from 'react';
// import {useRef} from 'react'
import './App.css';

function App() {
  const[count,setCount] = useState(0)
  // const ref = useRef(0)
  // console.log("ref",ref.current)
/*
  function handleRef(){
  ref.current = ref.current+1
  console.log(ref.current)
  }
*/
function handleCount(){
  setCount(count+1);
}

console.log("Render");
  return ( 
  <div className="App">
    {/* {ref.current} */}
    {count}
    {/* <button onClick={handleRef}>Ref</button> */}
    <button onClick={handleCount}>count</button>
  </div>);
}

export default App;
/*
Notes:-
1. Updating a reference does not trigger component re-rendering[means yaha pr ref button value update kr raha hai console
  me but count show nhi ho raha hai browser pr]

2. Updating a state triggers component re-rendering

3. Reference update is synchronous but state update is asynchronous.
-->Reference update is synchronous means jab hum reference ko update karte hai tab updated value console pr dikh jata
but browser pr nhi dikhta hai 

--> state update is asynchronous means jab hum reference ko update karte hai tab updated value console ke saath browser 
pr bhi display ho jata hai


Quest:- what is difference between useState hook and useRef hook
ans:- useState hook me state change hone ke baad component rerender ho jata jai but reference change hone ke baad component
rerender nhi hota hai

*/