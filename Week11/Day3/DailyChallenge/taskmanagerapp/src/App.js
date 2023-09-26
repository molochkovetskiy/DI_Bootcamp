import { TaskProvider } from './components/TaskContext';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TaskManager />
      </TaskProvider>
    </div>
  );
}

export default App;
