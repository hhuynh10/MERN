import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddMovie = ({movie, setMovie}) => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addMovie', {
            title,
            year,
            rating,
            description,
            boxArt : image
        }).then((res)=> {
            console.log(res)
            setMovie(prevState=>[...prevState, res.data])
            navigate('/')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h2 className="text-dark mt-2">Add Movie</h2>
            <form onSubmit={submitHandler} className="col-4 mx-auto">
                <label className="form-label">Title:</label>
                <input type="text" className="form-control bg-light" value={title} onChange={(e)=>setTitle(e.target.value)} />
                {errors.title ? <span className='text-danger'>{errors.title.message}</span> : null }<br></br>
                <label className="form-label">Year:</label>
                <input type="number" className="form-control bg-light" value={year} onChange={(e)=>setYear(e.target.value)} />
                {errors.year ? <span className='text-danger'>{errors.year.message}</span> : null }<br></br>
                <label className="form-label">Rating:</label>
                <select className="form-control bg-light" value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <option>Select one:</option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                </select>
                {errors.rating ? <span className='text-danger'>{errors.rating.message}</span> : null }<br></br>
                <label className="form-label">Description:</label>
                <input type="text" className="form-control bg-light" value={description} onChange={(e)=>setDescription(e.target.value)} />
                {errors.description ? <span className='text-danger'>{errors.description.message}</span> : null }<br></br>
                <label className="form-label">Image:</label>
                <input type="text" className="form-control bg-light" value={image} onChange={(e)=>setImage(e.target.value)} />
                {errors.boxArt ? <span className='text-danger'>{errors.boxArt.message}</span> : null }<br></br>
                <button type="submit" className="btn btn-info m-2">Create</button>
            </form>
        </div>
    )
}

export default AddMovie