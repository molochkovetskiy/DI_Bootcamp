import { useState, useEffect } from 'react';
import Text from './components/Text';
import './App.css';

function App() {

  const [text, setText] = useState('');

  // useEffect(() => {
  //   if (text == 'Vitaly') console.log("text=>", text);
  // }, [text]);

  return (
    <>
      <h1><Text txt={text} /></h1>
      <input onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default App;
