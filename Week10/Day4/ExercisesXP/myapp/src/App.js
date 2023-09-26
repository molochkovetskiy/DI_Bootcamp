import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div>
      <b>Click on the numbers to increase the counters.</b><br/>
      <b>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</b>
      <hr />
      These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      This counter is not inside of boundary. So if crashes, all other components are deleted.
      <BuggyCounter />
    </div>
  );
}

export default App;
