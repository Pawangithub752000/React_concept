
import './App.css';
import Content from "./components/Content"

function App() {
  const name = 'pawan'
  return (
    //jsx:-
    <div className='App'>
      <h1>my name is {name}</h1>
      <Content />
    </div>
  );
}

export default App;

