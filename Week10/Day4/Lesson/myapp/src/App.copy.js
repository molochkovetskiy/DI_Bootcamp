import { useState } from 'react';
import './App.css';

function App() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [inputs, setInputs] = useState({
    email: '',
    pass: '',
    uname: '',
    yesno: '',
  });

  const handleInputs = (e) => {
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inputs=>', inputs);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          Email: <input name='email' onChange={(e) => handleInputs(e)} />
          <br />
          Password: <input name='pass' onChange={(e) => handleInputs(e)} />
          <br />
          Username: <input name='uname' onChange={(e) => handleInputs(e)} />
          <br />
          Yes/No: {' '}
          <input
            type='checkbox'
            name='yesno'
            onChange={(e) => handleInputs(e)}
          />
          <br />
          <select name='color' onChange={(e) => handleInputs(e)}>
            <option value='1'>Red</option>
            <option value='2'>Yellow</option>
            <option value='3'>Green</option>
          </select><br />
          <input type='submit' value='Submit' />
        </form>
      </header>
    </div>
  );
}

export default App;
