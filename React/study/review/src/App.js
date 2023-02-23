import logo from './logo.svg';
import './App.css';
import Review from './components/Review';
import Display from './components/Display';
import {useState} from 'react'

function App() {

  const [entries, setEntries] = useState([])
  return (
    <div className="App">
      <Review entries={entries} setEntries={setEntries} />
      <Display entries={entries} setEntries={setEntries}/>
    </div>
  );
}

export default App;
