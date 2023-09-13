import './App.css';
// import Parent from './components/Parent';
// import Child from './components/Child';
import Counter from './components/Counter';
import ErrorHandler from './ErrorHandler';

function App() {
  return (
    <>
      <ErrorHandler>
        <Counter />
      </ErrorHandler>
      <ErrorHandler>
        <Counter />
      </ErrorHandler>
      <h1>Something...</h1>

      {/* <Parent user="admin">
        <Child />
      </Parent> */}
    </>
  );
}

export default App;
