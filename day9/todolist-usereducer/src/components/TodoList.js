import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Todo } from './Todo.js'
import { useContext } from 'react'
export const TodoList = () => {
    const {todos}=useContext(GlobalContext)
    return (
    <>
        <h3>TodoList</h3>
        <ul className="list">
            {todos.map(todo =>(
               <Todo key={todo.id} todo={todo} />
            ))}
            
        </ul>
    </>
  )
}