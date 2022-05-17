import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h1 className={count%2===0 ? "green":"red"}>Counter: {count}</h1>
        <div className='btn-grp'>
        <button className='btn' onClick={()=>setCount(count+1)}>Increment</button> 
        <button className='btn' onClick={()=> {if(count>0){setCount(count-1)}}}>Decrement</button> 
        <button className='btn' onClick={()=>setCount(count*2)}>Double</button>
        </div>
    </div>
  )
}

export default Counter