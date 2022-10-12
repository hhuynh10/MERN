import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const NewAuthor = () => {
    
    const [name, setName] = useState('')

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addAuthor', {
            name
        }).then((res)=> {
            console.log(res)
            navigate('/')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <Link to="/" className="text-success fs-5">Home</Link>
            <h5 className="text-dark mt-2">Add a new author:</h5>
            <form onSubmit={submitHandler} className="col-4 mx-auto">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control bg-light" value={name} onChange={(e)=>setName(e.target.value)} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null }<br></br>
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </div>
    )
}

export default NewAuthor