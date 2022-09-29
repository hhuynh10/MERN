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
      entries={entries}
      setEntries={setEntries}
      />
      <Entry
      entries={entries}
      setEntries={setEntries}
      />
    </div>
  );
}

export default App;
