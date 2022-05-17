import React from 'react'

const TodoItem = ({text,todo,todos,setTodos}) => {
    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed":"" }`}>{text}</li>
        <input type="checkbox" onClick={completeHandler} className='complete-btn' />
    </div>
  )
}

export default TodoItem