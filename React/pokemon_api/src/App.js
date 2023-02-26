import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  
  const [state, setState] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((result)=>{
      return result.json()
    }).then((res)=>{
      console.log(res)
      setState(res.results)  
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

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
