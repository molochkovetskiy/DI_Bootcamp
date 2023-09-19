import { useState, useRef, useEffect } from 'react';
import './App.css';

// useRef
// ref to DOM element
// cache a value that not to be re-render

function App() {
  const [count, setCount] = useState(10);

  const inputRef = useRef();
  const inputEmailRef = useRef();

  const txt = useRef('');
  let txtOne = 'txt one';

  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputEmailRef.current.value);
  }

  const handleRef = () => {
    txt.current = txt.current + '0'
    txtOne = 'text two';
    console.log(txt.current, txtOne);
  }

  const reRender = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>useRef</h2>
        <h4>{txt.current}</h4>
        <h4>{txtOne}</h4>
        {/* <input ref={inputRef} />
        <input type='email' ref={inputEmailRef} />
        <button onClick={handleClick}>input focus</button> */}
        <button onClick={handleRef}>Change Ref</button>
        <button onClick={reRender}>reRender</button>
      </header>
    </div>
  );
}

export default App;
