import './App.css';
import React from 'react';
import Board from './components/Board';
import Game from './components/Game'

function App() {
  const [turn, setTurn] = React.useState('X')
  return (
    <div className="App">
      <Game 
        turn={turn}
      />
      <Board 
        turn={turn}
        setTurn={setTurn}
      />
    </div>
  );
}

export default App;
