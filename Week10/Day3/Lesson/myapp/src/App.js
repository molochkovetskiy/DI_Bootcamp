// import Hello from './components/Hello';
import { useState } from 'react';
import User from './components/User';
// import users from './data.json';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// JSX
function App() {
  // const [state, setState] = useState();
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('Hello hooks');
  // State
  // const users = [];
  console.log('users=>', users);

  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log("error=>", err);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <h2>{text}</h2>
      <input type='text' onChange={(e) => handleChange(e)} />
      <button onClick={() => getData()}>Get Users!</button>
      <div>
        {users.map((item, indx) => {
          return <User info={item} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default App;
