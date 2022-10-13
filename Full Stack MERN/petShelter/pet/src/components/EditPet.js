import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditPet = () => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    
    const [errors, setErrors] = useState({})
    
    const {id} = useParams()
    
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res)=> {
            console.log(res)
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }).then((res)=> {
            console.log(res)
            navigate('/')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className="col-6 mx-auto mt-3">
            <Link to="/" className="text-success">back to home</Link>
            <h4 className="text-dark mt-2">Edit {name}</h4>
            <form onSubmit={submitHandler}>
                <label className="form-label">Name:</label>
                <input type="text" className="form-control bg-light" value={name} onChange={(e)=>setName(e.target.value)} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null }<br></br>
                <label className="form-label">Type:</label>
                <input type="text" className="form-control bg-light" value={type} onChange={(e)=>setType(e.target.value)} />
                {errors.type ? <span className='text-danger'>{errors.type.message}</span> : null }<br></br>
                <label className="form-label">Description:</label>
                <input type="text" className="form-control bg-light" value={description} onChange={(e)=>setDescription(e.target.value)} />
                {errors.description ? <span className='text-danger'>{errors.description.message}</span> : null }<br></br>
                <label className="form-label">Skill 1:</label>
                <input type="text" className="form-control bg-light" value={skillOne} onChange={(e)=>setSkillOne(e.target.value)} />
                <br></br>
                <label className="form-label">Skill 2:</label>
                <input type="text" className="form-control bg-light" value={skillTwo} onChange={(e)=>setSkillTwo(e.target.value)} />
                <br></br>
                <label className="form-label">Skill 3:</label>
                <input type="text" className="form-control bg-light" value={skillThree} onChange={(e)=>setSkillThree(e.target.value)} />
                <br></br>
                <button type="submit" className="btn btn-success mt-3">Edit Pet</button>
            </form>
        </div>
    )
}

export default EditPet