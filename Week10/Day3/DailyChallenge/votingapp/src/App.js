import { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const increaseVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language.votes} {language.name}
            <button onClick={() => increaseVote(index)}>Click Here</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;