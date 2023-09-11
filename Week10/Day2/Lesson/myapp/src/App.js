// import Hello from './components/Hello';
import User from './components/User';
import users from './data.json';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

// JSX
function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  console.log("users=>", users);
  return (
    <div>
      <div>
        <Button variant="contained">Contained</Button>
        <Switch {...label} defaultChecked />
      </div>
      {users.map((item, indx) => {
        return <User info={item} key={uuidv4()} />;
      })}
    </div>
  );
}

export default App;
