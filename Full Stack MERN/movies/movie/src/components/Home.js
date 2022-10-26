import React, {useState, useEffect} from 'react'
import AddMovie from './AddMovie'
import AllMovie from './AllMovie'
import axios from 'axios'


const Home = () => {

    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allMovies', {withCredentials:true})
        .then((res)=> {
            console.log(res)
            setMovie(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <AddMovie movie={movie} setMovie={setMovie}/>
            <AllMovie movie={movie} setMovie={setMovie}/>
        </div>
    )
}

export default Home