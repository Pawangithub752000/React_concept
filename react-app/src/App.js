
// import './App.css';
// import Child from "./components/Child"
// import Content from "./components/Content"

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


