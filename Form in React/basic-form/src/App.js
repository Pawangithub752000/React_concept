
import { useState } from 'react';
import './App.css';


function App() {
  const [name,setName] = useState('')
const [age, setAge] = useState('')
const [email, setEmail] = useState('')

function handleName(e){
  setName(e.target.value)
  
}

function handleAge(e){
 setAge(e.target.value)
}

function handleEmail(e){
setEmail(e.target.value)
}
function handleDetails(event){
  event.preventDefault()
const details = {name:name, age:age, email:email}
console.log(details);
}

  return (
    <div className="App">
      <form onSubmit = {handleDetails}>
        <label>
          Name:
        </label><br/>
        <input type='text' value = {name} onChange = {handleName}/><br/>

        <label>
          Age:
        </label><br/>
        <input type='text' value = {age} onChange = {handleAge}/><br/>
         
         <label>
          Email
         </label><br/>
         <input type='email' value={email} onChange = {handleEmail}/><br/>

         <input type="submit" value = "Submit" /><br/>
      </form>
    
    </div>
  );
}

export default App;
