import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [pet, setPet] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPets')
        .then((res)=> {
            console.log(res)
            setPet(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div className='col-8 mx-auto mt-3'>
            <Link to="/pets/new" className="text-success">add a pet to the shelter</Link>
            <h5 className="text-dark mt-2">These pets are looking for a good home:</h5>
            <table className='table fs-5 mt-3'>
                <thead>
                    <tr className='table-success'>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pet.map((pet)=>(
                        <tr className='table-success'>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><Link to={`/pets/${pet._id}`} className='link'>details</Link> | <Link to={`/pets/${pet._id}/edit`} className='link'>edit</Link></td>
                        </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home