
import './App.css';

function App() {
  const data = [
    {"id":1, name:'pawan'},
    {"id":2, name:"rakesh"},
    {"id":3, name:"sitesh"},
    {"id":4, name:"rahul"},
    {"id":5, name:"rahul"}
  
  ]
  return (
    <div className="App">
      <h1>Hello</h1>
  {data.map((person)=>{
    return(
      <div key={person.id}>{person.name}</div>
    )
  })}
    </div>
  );
}

export default App;

/*
keys:- key is just a string attribute & helps React identify which items have changed,are added, or are removed.
--> jab hamare list update hoti hai koi item add hota hai update hota hai delete hota hai usko track karne ke liye taki
//hamare jitni bhi item hai usko uniquely identify kr shake ki kis item ko delete karna hai update karna hai

//Note :- item ko uniquely identify karne ke liye index ka use nhi kiya jata hai kyuki index recommended nhi hota hai and
backend se jo data aata hai useme id diya rahta hai item ko uniquely identify karne ke liye isliye hum key ka use karte hai 
item ko uniquelt identify karne ke liye
*/

