
import { useCallback, useState } from 'react';
import Child from "./child"
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("pk1")
  console.log("render")

  const callback = useCallback(function(){
 //calculation
  },[name]);

  // function callback(){
  //   //calculation
  // }

  return (
    <div className="App">
      <h2>Count:-{count}</h2>
      <h2>name:- {name}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={()=>setName("pawan")}>update name</button>
      <Child callback={callback}/>
     
    </div>
  );
}

export default App;
/*
Yaha pr child components ko memonise kiya gya hai means child component me jo console kiya gya hai
wo console pr nhi show ho raha hai state change hone pr only app.js component ka console hi show ho raha hai
kyuki app components me memo hooks use nhi kiya gya hai 

--> yaha pr callback function ko as a props child component me pass karane pr phir se child component rerender hone
lga jabki maine child component ko momoise kr chuka hu, toh iss problem ko solve karne ke liye useCallBack hook ka 
use karte hai

-->jab hame pure component ko memoise karna parta hai tab usememo hook ka use karna parta hai

*/