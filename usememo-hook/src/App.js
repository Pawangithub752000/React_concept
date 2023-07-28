
import { useMemo,useState } from 'react';
import './App.css';


function App() {
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  const maleMemo = useMemo(function () {
    console.log('updateMale Called');
    return male * 10;
    // heavy calculation
  },[male]);
  

  return (
    <div className="App">
      <h2>Male:{male}</h2>
      <h2>Female:{female}</h2>
      <h2>updateMale:{maleMemo}</h2>
      <button onClick={() => setMale(male + 1)}>update Male</button>
      <button onClick={() => setFemale(female + 1)}>update Female</button>
    </div>
  );
}
export default App;

/*
useMemo hook ka use karte hai application ke performance ko inhence karne ke liye kiya jata hai
means jaise yaga pr updateMale button and updateFemale button dono ko click hone pr component
update hota tha but dependency array me male dene pe only jab male update hoga usi ke case me 
component rerender hoga update female button ko click karne pr component rerender nhi hoga means yaha pr
unNecessary havy calculation jo ho raha tha wo ab call nhi ho raha hai means application ka performance inhence ho raha hai
umeMemo hook ke use karne pr

*/