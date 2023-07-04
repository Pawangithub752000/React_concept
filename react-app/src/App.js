
import './App.css';
// import Child from "./components/Child"
// import Content from "./components/Content"

import { useState } from "react"
import Child from './components/Child';

// function App() {
//   const name = "pawan";
//   return (
//     //jsx:-
//     <div className='App'>
//       {/* <h1>my name is {name}</h1> */}
//       <Child myName={name}/>
//       <Content />
//     </div>
//   );
// }

// export default App;

//CONCEPT OF STATE,HOOK,USESTATE WITH EXAMPLE :-
/*
function App(){
  var name = "deepak"

  function changeName(){
    name = "nitu"
  }
console.log(name)
return(
  <>
    <h1>my name is {name} </h1>
  <button onClick={changeName}>Click</button>
  </>
)
}
export default App
//NOTE:---> 
//React js me directly hum data ko update nhi kr shakte hai 

//-->state,useState ya hook ka jrurat react js me isliye parta hai kyuki hum react js me directly data ko update 
//nhi kr shakte hai, jaisa ki yaha pr deepak ko update kr ke nitu name nhi kr shakte hai after click button
*/
//USESTATE HOOK IN REACT JS
/*function App(){
  const[name,setName] = useState("akash");
  function changeName(){
    setName("pawan")
  }
return(
<>
<h1>my name is {name}</h1>
<button onClick = {changeName}>click</button>
</>
)
}
export default App
*/
//SOME REAL WORLD SANARIO FOR USERsTATE HOOK:-
function App(){
const [show,setShow] = useState(false);

function handleShow(){
  setShow(!show)
}
return(
  <div className={show ?"App1" :"App"} onClick = {handleShow}>
  <h1>react tutorial</h1>
  {/* {show && <h3>this is content</h3>}  */}
  {show && <Child/>} 
  </div>
)
}
export default App;
//yaha pr two typews ke conditional randring lga hai first me ternery operator yadi if and else dono part me kuch 
//show karana hota hai tab question mark wala condition lagta hai yadi only if wala aak condition show karana hota hai means else condition
//show nhi karna hota hai toh doubleAnd wala condition apply karna hata hai
