import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Entry from './components/Entry';
import ColorForm from './components/ColorForm';
import {useState} from 'react'
import ColorEntry from './components/ColorEntry';

function App() {
  const [entries, setEntries] = useState([])

  const [colorEntries, setColorEntries] = useState([])
  
  
  return (
    <div className="App">
      <Header />

      <Form
      setEntries={setEntries}
      entries={entries}
      />

      <Entry entries={entries} />

      <ColorForm
      setColorEntries={setColorEntries}
      colorEntries={colorEntries} 
      />

      <ColorEntry colorEntries={colorEntries} />

    </div>
  );
}

export default App;
