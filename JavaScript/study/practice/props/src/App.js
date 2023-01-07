import logo from './logo.svg';
import './App.css';
import Props from './Component/Props';
import Form from './Component/Form';
import {useState} from 'react'

function App() {
  const [entries, setEntries] = useState([]);

  return (
    <div className="App">
      <Props firstName={'Hung'} lastname={'Huynh'} age={30} hairColor={"Black"}/>
      <Props firstName={'Hoa'} lastname={'Nguyen'} age={64} hairColor={'Brown'}/>
      <Props firstName={'Nam'} lastname={'Huynh'} age={60} hairColor={'Black'}/>
      <Props firstName={'Thinh'} lastname={'Huynh'} age={33} hairColor={'Black'}/>
      <Form  entries={entries} setEntries={setEntries} />
    </div>
  );
}

export default App;
