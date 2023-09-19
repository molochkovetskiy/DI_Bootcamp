import { useState, createContext } from 'react';
import Counter from './components/Counter';
import Text from './components/Text';

import './App.css';

// useContext - state managment

// App - [count, setCount]
//    <Context - count setCount>
//    |_Counter - increase count by 1
//          |_SubCounter - count
//                  |_SubSubCounter
//    </Context>

export const AppContext = createContext();
export const AppTextContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('bla bla bla');
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter</h2>
        {txt}
        <AppContext.Provider value={{ count, setCount, title: 'Zivuch' }}>
          <Counter />
        </AppContext.Provider>
        {/* <Text setTxt={setTxt}/> */}
        <AppTextContext.Provider value={{ setTxt }}>
          <Text />
        </AppTextContext.Provider>
      </header>
    </div>
  );
}

export default App;
