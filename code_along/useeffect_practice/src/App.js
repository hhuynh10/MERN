import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [state, setState] = useState([])

  useEffect(()=>{
    fetch('https://swapi.dev/api/people')
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
        state.map((character)=>(
          <div>
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birthyear: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Homeworld: <a href={character.homeworld}>{character.homeworld}</a> </p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
