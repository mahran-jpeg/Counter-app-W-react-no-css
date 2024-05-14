import { useState } from "react";

function Counter(){
const[count,setCount]= useState(0);

function stopCount(){
if(setCount(0) <= 0){
  return;
}
}
  return(
    <div className="container">
    <>
  <h1>Counter:{count}</h1>
  <button onClick={()=>{
   setCount(count+1)
  }}>Increment</button>
 <button onClick={() => { setCount(count - 1); stopCount(); }}>Decrement</button>
  <button onClick={()=>{
   setCount(0)
  }}>Reset</button>
    </>
    </div>


  )
}

export default Counter