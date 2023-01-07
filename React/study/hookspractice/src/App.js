import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import Entry from './Component/Entry';
import React, {useState} from 'react'

function App() {

  const [entries, setEntries] = useState([])

  return (
    <div className="App">
      <Form entries = {entries} setEntries = {setEntries}/>
      <Entry entries = {entries} setEntries = {setEntries}/>
    </div>
  );
}

export default App;
