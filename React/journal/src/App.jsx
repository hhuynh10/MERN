import logo from './logo.svg';
import Header from './components/Header';
import Form from './components/Form';
import Entry from './components/Entry';
import './App.css';
import {useState} from 'react'

function App() {
  const [entries, setEntries] = useState([])
  return (
    <div className="App">
      <Header />
      <Form
      setEntries={setEntries}
      entries={entries}
      />
      {entries.map((entry, index)=>{
        return <Entry key={index} entry={entry}/>
    })}
    </div>
  );
}

export default App;
