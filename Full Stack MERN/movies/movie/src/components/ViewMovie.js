import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ViewMovie = () => {
    const [movie, setMovie] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`, {withCredentials:true})
        .then((res)=> {
            console.log(res)
            navigate('/home')
        }).catch((err)=> {
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movie/${id}`, {withCredentials:true})
        .then((res)=> {
            console.log(res)
            setMovie(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])
    return (
        <div className="mt-3 col-6 mx-auto">
            <h4>{movie.title}</h4>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <p>{movie.description}</p>
            <button className="btn btn-outline-success"><Link className="edit" to={`/editmovie/${movie._id}`}>Edit</Link></button> <button onClick={(e)=>deleteHandler(movie._id)} className="btn btn-outline-danger">Delete</button>
        </div>
    )
}

export default ViewMovie