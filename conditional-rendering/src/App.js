
import './App.css';
/*
//IF ELSE CONDITION IN REACT:-
//IF ELSE CONDITION WILL VERY COMPLICATED FOR CONDITIONAL BECAUSE LARGE CODE WRITE FOR CONDITION
function App() {
  const val = 1;
  if(val === 1){
    return (
      <div>
     <h1>Good morning</h1>
      </div>
    )
  }else{
    return (
      <div>
     <h1>Good evening</h1>
      </div>
    )
  }
 
}
export default App;
OUTPUT:- GOOD MORNING
*/


// CONDITIONAL OPERATOR FOR CONDITIONAL RENDERING:-
// this method is very efficient for if and else both condition

function App(){
  let val = 1
return(
  <div>
 <h1>{val === 1 ? "Good Morning":"Good Evening"}</h1>
  </div>
)
}
export default App


/*
//3rd Method For conditional rendering using logical and(&&) operator:-
//this method also very efficient for only if i want to show if condition result 
function App(){
  let name = "pawan";
  return(
  <div>
    <h1>{name.length === 5 && "length of name is 5"}</h1>
  </div>
  )
  
}
export default App
//output:- length of name is 5
*/