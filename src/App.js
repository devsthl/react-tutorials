import Person from './components/Person/Person';
import './App.css';
import { useState } from 'react';
import Example from './components/Example';

function App() {
  const [person, setperson] = useState([
    { name: 'A1', age: '1' },
    { name: 'A2', age: '2' },
    { name: 'A3', age: '3' }
  ])
  const changeNameHandler = () => {
    setperson([
      { name: 'B1', age: '1' },
      { name: 'B2', age: '2' },
      { name: 'B3', age: '3' }
    ])
  }
  const switchOnChange = (event) => {
    setperson([
      { name: event.target.value, age: '1' },
      { name: 'B2', age: '2' },
      { name: 'B3', age: '3' }
    ])
  }
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <h1>This is demo my project_reactjs_unit1</h1>
      <button onClick={changeNameHandler}>Change name</button>
      <Example />
      <Person click={changeNameHandler} name={person[0].name} age={person[0].age} />
      <Person
        changed={switchOnChange}
        click={changeNameHandler} name={person[1].name} age={person[1].age} />
      <Person click={changeNameHandler} name={person[2].name} age={person[2].age} />
    </div>
  );
}

export default App;
