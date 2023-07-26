
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('photos');
  const [count,setCount] = useState(0);

  useEffect(() => {
    console.log("Render")

    return(()=>{
      console.log("Unmount");
    })
    //Yaha pr iss return ka use kiya gya hai piche wale jo bhi video ya photo section ka data hota hai usko clean karne
    //ke liye before press to video ya photo section button
  },[tab])

  return (
    <div className="App">
      <button onClick={() => setTab('photos')}>photos</button>
      <button onClick={() => setTab('videos')}>videos</button>
      <button onClick={() => setCount(count+1)}>count</button>
       
      <div>
        {tab === "photos" && <span>Photos</span>}
        {tab === "videos" && <span>videos</span>}
        {count}
      </div>

    </div>
  );
}

export default App;
