
import { useState } from 'react';
import './App.css';

function App() {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [speed, setSpeed] = useState();

  function handleDistance(e) {
    //  console.log(e)
    // console.log(e.target.value)
    setDistance(e.target.value)
  }
  function handleTime(e) {
    // console.log(e.target.value)
    setTime(e.target.value)
  }
  function calculateSpeed() {
    setSpeed(distance / time)
  }
  function clearSpeed() {
    setSpeed()
  }

  return (
    <div className="App">
      <h1>Speed Calculator</h1>

      <div className='input-div'>
        <input type="number" placeholder="Distance" value={distance} onChange={handleDistance} />
        <input type="number" placeholder="Time" value={time} onChange={handleTime} />
      </div>

      <div className='button-div'>
        <button onClick={calculateSpeed} className='btn'>Calculate Speed</button>
        <button onClick={clearSpeed} className='btn'>Clear Speed</button>
      </div>

      <div>
        <h1>{speed <= 60 ? `slow ${speed} km/hr.`
          : speed > 60 && speed < 100 ? `Fast ${speed} km/hr.`
            : speed >= 100 ? `Very Fast ${speed} km/hr.`
              : null}
        </h1>
      </div>
    </div>
  );
}
export default App;
