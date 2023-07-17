
import "./App.css"
function App() {
  const faang = ["fb","amz","appl","nfl","ggl"]
  
return (
    <div className="App">
 <h1>Hello</h1>
  {faang.map((newFaang)=>{
   return(
    <div>{newFaang}</div>
    )
  })}
    </div>
  );
}

export default App;
/* 
Output:-

Hello
fb
amz
appl
nfl
ggl
*/

//means ki map function use karne pr koi bhi element array me add karne ya delete karne pr wo automatic 
//ui pr update ho jata hai isliye hum map function use karte hai actually map function me jo callback function use
// kiya jata hai yaha pr aal hi argument pass kr ke bataya gya hai but callbck three argument keta hai dusra argument key hota 
// hai jo ki next video me explain kiya jaiga

/*Map function:-
const arr = [1,2,3,4,5]
const arr1 = arr.map((newArr)=>{
  return(newArr*2)
})
console.log("arr1",arr1)

output:-arr1 = 2,4,6,10
*/