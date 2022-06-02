
import './App.css';
import {useReducer} from 'react'
const reducer=(state,{type,payload})=>{
  switch(type){
    case "INCREMENT":{
      return state+payload;
    }
    case "DECREMENT":{
      return state-payload;
    }
    default:{
      console.log("Type Incorrect");
      return state
    }
  }
}
function App() {
  const [counter,dispatch]=useReducer(reducer,0);
  return (
    <div className="App">
      Counter:{counter}
     <button onClick={()=>dispatch({type:'INCREMENT',payload:1})}>+</button>
     <button onClick={()=>dispatch({type:'DECREMENT',payload:1})}>-</button>

    </div>
  );
}

export default App;
