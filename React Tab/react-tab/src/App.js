
import { useState } from 'react';
import './App.css';
import { mockData } from './mockdata';

function App() {
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber){
    setTab(tabNumber);
  }
  const mobiles = mockData.filter((product)=>product.item==="Mobile");
  const shirts = mockData.filter((product)=>product.item==="Shirt");
  const pants = mockData.filter((product)=> product.item==="Pant");

  const data = tab === 1? mobiles : tab === 2? shirts : tab === 3? pants : null;
  return (
    <div className="App">
      <div className='category'>
        <div onClick={() => activeTab(1)} 
        style={{borderBottom: tab === 1 ? "5px solid yellow" : ""}}>Mobiles</div>

        <div onClick={() => activeTab(2)}
         style={{borderBottom: tab === 2 ? "5px solid yellow" : ""}}>Shirts</div>

        <div onClick={() => activeTab(3)}
         style={{borderBottom: tab === 3 ? "5px solid yellow" : ""}}>Pants</div>
      </div>
      <div className='item_div'>
        {data && data.map((value)=>{
          return (
            <div>
              <span>{value.item}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
