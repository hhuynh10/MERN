import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [person, setPerson] = useState([]);

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then((result)=>{
      return result.json()
    }).then((res)=>{
      console.log(res)
      setPerson(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      {
        person.map((p)=>(
          <div>
            <h1>{p.first_name} {p.last_name}</h1>
            <p>{p.email}</p>
            <img src={p.avatar}/>
          </div>
        ))
      }
    </div>
  );
}

export default App;