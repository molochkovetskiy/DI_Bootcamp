import './App.css';
import { useTheme, ThemeProvider } from './components/ThemeContext';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/ToDoList';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This is some content</p>
    </div>
  );
}

function App() {
  return (
    // Exercise 1
    // <ThemeProvider>
    //   <ThemeSwitcher />
    // </ThemeProvider >

    // Exercise 2
    // <>
    //   <CharacterCounter />
    // </>

    // Exercise 3
    <>
      <TodoList />
    </>
  );
}

export default App;
