import { useState } from "react"
import './App.css';

import Todo from "./components/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos]= useState([]);
  return (
    <div className="App">
      <Todo todos={todos} inputText={inputText} setInputText={setInputText} setTodos={setTodos} />
    </div>
  );
}

export default App;
