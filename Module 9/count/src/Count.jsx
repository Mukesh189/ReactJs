import React,{useState} from 'react'
import './Count.css'
function Count() {
  const [count,setCount]=useState(0);
    return (
        <>
        <h1 id='title'>React Web</h1>
        <div>
            <button id='minus' onClick={()=>setCount(count=>count - 1)} style={{marginRight:10}}>-</button>&nbsp;
            <span id='center'>{count}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button id='plus'  onClick={()=>setCount(count=>count + 1)} style={{marginRight:10}}>+</button>
        </div>
        </>
  )
}

export default Count