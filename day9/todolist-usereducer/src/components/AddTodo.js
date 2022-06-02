import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTodo = () => {
    const [text, setText] = useState("");

    const {todos, addtodo } = useContext(GlobalContext);

    const onSubmit= (e) =>{
      e.preventDefault();

      const newTodo={
        id:Math.floor(Math.random() * 100000000),
        text,
        isCompleted:false
      }

      addtodo(newTodo);
      console.log(todos);
    }
  return (
    <>
      <h3>Add new todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text{` : `}</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <button className="btn">Add todo</button>
      </form>
    </>
  )
}