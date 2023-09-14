import React, { useState } from 'react';
import Quotes from './components/Quotes';

function App() {
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [randomColor, setRandomColor] = useState(generateRandomColor());

  const handleRandomColor = () => {
    setRandomColor(generateRandomColor());
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: randomColor }}>
      <Quotes randomColor={randomColor} getNewColor={handleRandomColor} />
    </div>
  );
}

export default App;
