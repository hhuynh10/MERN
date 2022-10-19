import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const AddPlayer = () => {
    
    const [name, setName] = useState('')

    const [position, setPosition] = useState('')

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addTeam', {
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
        <div className='col-8 mx-auto mt-3'>
            <Link to="/player/addplayer" className="text-warning fs-5">Add Player</Link>
            <form onSubmit={submitHandler} className="col-8 mx-auto mt-3">
                <label className="form-label fs-5">Player Name:</label>
                <input type="text" className="form-control bg-light" value={name} onChange={(e)=>setName(e.target.value)} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null }<br></br>
                <label className="form-label fs-5">Preferred Position:</label>
                <input type="text" className="form-control bg-light" value={position} onChange={(e)=>setPosition(e.target.value)} />
                {errors.position ? <span className='text-danger'>{errors.position.message}</span> : null }<br></br>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-warning mt-3 fs-5">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlayer