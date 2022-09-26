import logo from './logo.svg';
import './App.css';
import Hearder from './components/Hearder';
import Form from './components/Form';
import {useState} from 'react'
import List from './components/List';

function App() {
  const [lists, setLists] = useState([])
  
  return (
    <div className="App">
      <Hearder />

      <Form
      setLists={setLists}
      lists={lists}
      />

      <List 
      setLists={setLists}
      lists={lists}
      />
    </div>
  );
}

export default App;
