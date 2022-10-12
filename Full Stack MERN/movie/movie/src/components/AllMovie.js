import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllMovie = () => {

    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allMovies')
        .then((res)=> {
            console.log(res)
            setMovie(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <hr></hr>
            <h2 className="text-dark mt-2">Movie List:</h2>
            {
                movie.map((movie)=>(
                    <div className="d-inline-block col-3 mb-4 mt-4">
                        <img src={movie.boxArt} className="col-8 border border-dark border-4 mb-2"/>
                        <h5><Link to={`/viewmovie/${movie._id}`} className="text-dark fs-2 edit">{movie.title}</Link></h5>
                    </div>
                ))
            }
        </div>
    )
}

export default AllMovie