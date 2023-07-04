
import './App.css';
import Child from "./components/Child"
import Content from "./components/Content"

function App() {
  const name = "pawan";
  return (
    //jsx:-
    <div className='App'>
      {/* <h1>my name is {name}</h1> */}
      <Child myName={name}/>
      <Content />
    </div>
  );
}

export default App;

