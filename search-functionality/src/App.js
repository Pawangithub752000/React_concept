
import './App.css';
import {mockData} from "./mockdata";
import { useState,useEffect } from 'react';

function App() {
  const [searchItem, setSearchItem] =  useState("");
  const [newList, setNewList] = useState([]);

  function handleChange(event){
    // console.log(event)
    setSearchItem(event?.target?.value)
  }

  let filteredList = mockData.filter((curItem)=>{
    if(searchItem === ""){
      return curItem;
    }else if(curItem?.item?.toLowerCase().includes(searchItem?.toLowerCase())){
      return curItem;
    }
  });

  useEffect(()=>{
    setNewList(filteredList)
  },[searchItem]);

  return (
    <div className="App">
      <div>
        <input type="search" 
        placeholder='Search Item...'
        value = {searchItem}
        onChange = {(e) => handleChange(e)}
        
        />
      </div>
      <div className='item_div'>
        {newList.map((val)=>{
          return(
            <div>
              <span>{val.item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
