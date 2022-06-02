import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export const Todo = ({todo}) => {
const { deletetodo } = useContext(GlobalContext);


  return (
    <div>
        <li className={todo.isCompleted==true ? 'completed':'incompleted'}>
            <h5>{todo.text}</h5>
            <button className="delete-btn" onClick={()=>deletetodo(todo.id)}>x</button>
        </li>
    </div>
  )
}