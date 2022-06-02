
import './App.css';
import { AddTodo } from './components/AddTodo.js';
import {TodoList} from './components/TodoList'
function App() {
  return (
    <div className="App">
      <TodoList/>
      <AddTodo/>

    </div>
  );
}

export default App;
