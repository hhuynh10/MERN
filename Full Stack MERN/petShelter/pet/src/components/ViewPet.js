import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ViewPet = () => {

    const [pet, setPet] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    const [likes, setLikes] = useState(0)

    const likeMe = () =>{
        setLikes(likes + 1)
    }

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=> {
            console.log(res)
            navigate('/')
        }).catch((err)=> {
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res)=> {
            console.log(res)
            setPet(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div className="mt-3 mx-auto col-6">
            <Link to="/" className="text-success">back to home</Link>
            <h4 className='mt-2'>Details about: {pet.name} <button onClick={(e)=>deleteHandler(pet._id)} className='ms-5 btn btn-danger'>Adopt {pet.name}</button></h4>
            <table className='table border border-3 border-success mt-2 '>
                <div className='p-3'>
                    <p className='fs-5'><span className='fs-4'>Pet type: </span>{pet.type}</p>
                    <p className='fs-5'><span className='fs-4'>Description: </span>{pet.description}</p>
                    <p className='fs-5'><span className='fs-4'>Skills: </span> {pet.skillOne} | {pet.skillTwo} | {pet.skillThree}</p>
                    <p><button className='btn btn-outline-success' onClick={likeMe}>Like {pet.name}</button> <span>{likes} like(s)</span></p>
                </div>
            </table>
        </div>
    )
}

export default ViewPet