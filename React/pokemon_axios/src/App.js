import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const [state, setState] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((result)=>{
      console.log(result)
      setState(result.data.results)
    }).catch((error)=>{
      console.log(error)
    })
  })
  return (
    <div className="App">
      {
        state.map((poke)=>(
          <div>
            <h1>{poke.name}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;
