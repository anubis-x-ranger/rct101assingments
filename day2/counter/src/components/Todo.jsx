import React,{useState} from 'react'

const Todo = () => {
    const [todo,setTodo]=useState("");
    const [todos, setTodos] = useState([]);


    const handleChange=(e)=>{
        setTodo(e.target.value);
    }

    const addTodo=()=>{
        setTodos([...todos,todo]);
        setTodo("");
    }
  return (
    <div>
        <input type="text" value={todo} onChange={handleChange}/>
        <button onClick={addTodo}> Add </button>

        {todos.map((todo)=>
            (<div key={Math.random()*100000}>{todo}</div>)
            )}
    </div>
  )
}

export default Todo