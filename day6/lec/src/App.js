import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import axios from "axios";

function App() {
  const [page,setPage]= useState(1);
  const [limit,setLimit]= useState(5);
  const [totalCount,setTotalCount]= useState(0)
  const [todos,setTodos]= useState([])
  useEffect(() => {
    const getTodo =async ()=>{
      axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`).then((r)=>{setTodos(r.data);
      setTotalCount(Number(r.headers["x-total-count"]));
    });
    }
    getTodo();
    
  }, [page,limit])
  






  return (
    <div className="App">
      <button disabled={page<=1} onClick={()=>{setPage(page-1)}}>{` < `}</button>
      <select onChange={(e)=>setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={7}>7</option>
        <option value={9}>9</option>
        <option value={12}>12</option>
      </select>
      <button disabled={totalCount <= page*limit} onClick={()=>{setPage(page+1)}}>{` > `}</button>
      {todos.map((todo)=>(
        <div key={todo.id}>{todo.id}{` : `}{todo.title}</div>
      ))}
      
    </div>
    
  );
}

export default App;
