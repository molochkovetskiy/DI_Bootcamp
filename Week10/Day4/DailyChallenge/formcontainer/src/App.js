import FormCompomnent from './components/FormComponent';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: '',
    lactoseFree: '',
    vegan: '',
  });

  const handleInputs = (e) => {
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value })
  };

  return (
    <div id='appStyle'>
      <div>
        <form>
          <input name='firstName' placeholder='First Name' onChange={(e) => handleInputs(e)} />
          <br />
          <input name='lastName' placeholder='Last Name' onChange={(e) => handleInputs(e)} />
          <br />
          <input name='age' placeholder='Age' onChange={(e) => handleInputs(e)} />
          <br />
          <br />

          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value='male' id="male" onChange={(e) => handleInputs(e)} />
          <br />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" value='female' id="female" onChange={(e) => handleInputs(e)} />
          <br />
          <br />

          <label>Select your destination</label>
          <br />
          <select name='destination' onChange={(e) => handleInputs(e)}>
            <option value="">-- Please choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
          <br />
          <br />

          <label htmlFor="nutsFree">Nuts free</label>
          <input
            type='checkbox'
            name='nutsFree'
            onChange={(e) => handleInputs(e)}
          /><br />
          <label htmlFor="lactoseFree">Lactose free</label>
          <input
            type='checkbox'
            name='lactoseFree'
            onChange={(e) => handleInputs(e)}
          /><br />
          <label htmlFor="vegan">Vegan</label>
          <input
            type='checkbox'
            name='vegan'
            onChange={(e) => handleInputs(e)}
          /><br />
          <br />

          <input type='submit' value='Submit' id='submitButtonStyle' />
        </form>
      </div >
      <FormCompomnent info={inputs} />
    </div>
  );
}

export default App;