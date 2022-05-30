import './App.css';
import Card from './components/Card';
import cards from "./data/cards.json";

function App() {
  return (
    <div className="App">
      <Card cards={cards} />
      
    </div>
  );
}

export default App;
