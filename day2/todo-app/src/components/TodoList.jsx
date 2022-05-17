import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,setTodos}) => {
  return (
    <div className="todo-container">
      
      <ul className="todo-list">
      {todos.map((todo)=>(
      <TodoItem setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text}/>
      ))}
      </ul>
    </div>
  )
}

export default TodoList