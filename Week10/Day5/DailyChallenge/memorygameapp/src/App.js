import Game from './components/Game';
import './App.css';

const cardsData = require('./superheroes.json').superheroes;

function App() {
  return (
    <div className="App">
      <Game cardsData={cardsData} />
    </div>
  );
}

export default App;
