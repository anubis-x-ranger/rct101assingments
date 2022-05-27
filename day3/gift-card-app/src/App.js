import './App.css';
import Card from './components/Card';
import cards from "./data/cards.json";
import logo from './logo.jpg'
function App() {
  return (
    <div className="App">
      <Card cards={cards} />
      <img src={logo}></img>
      
    </div>
  );
}

export default App;
