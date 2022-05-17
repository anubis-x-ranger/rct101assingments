import React from 'react'
import TodoList from './TodoList';

const Todo = ({todos,setTodos,inputText,setInputText}) => {
    const inputTextHandler=(e)=>{
        // console.log(e.target.value);
        if(e.target.value!==""){
        setInputText(e.target.value);        
        }
      }
    
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:inputText, completed: false, id:Math.random()*1000 }]);
        setInputText("");
      }

  return (
    <div className='container'>
    <TodoList todos={todos} setTodos={setTodos}/>
    <form className='inputForm'>
        <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} placeholder="Write Something"/>
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>Add</button>
    </form>
    </div>
  )
}

export default Todo