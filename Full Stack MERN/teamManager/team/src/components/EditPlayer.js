import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditPlayer = () => {

    const [name, setName] = useState('')

    const [position, setPosition] = useState('')

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/team/${id}`)
        .then((res)=> {
            console.log(res)
            setName(res.data.name)
            setPosition(res.data.position)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {
            name,
            position
        }).then((res)=> {
            console.log(res)
            navigate('/players/list')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="col-8 mx-auto mt-3">
                <label className="form-label fs-5">Player Name:</label>
                <input type="text" className="form-control bg-light" value={name} onChange={(e)=>setName(e.target.value)} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null }<br></br>
                <label className="form-label fs-5">Preferred Position:</label>
                <input type="text" className="form-control bg-light" value={position} onChange={(e)=>setPosition(e.target.value)} />
                {errors.position ? <span className='text-danger'>{errors.position.message}</span> : null }<br></br>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-warning mt-3 fs-5">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditPlayer