import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [author, setAuthor] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allAuthors')
        .then((res)=> {
            console.log(res)
            setAuthor(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=> {
            console.log(res)
            const filterAuthor = author.filter((author)=>(author._id !== id))
            setAuthor(filterAuthor)
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div className="col-6 mx-auto mt-2">
            <Link to="/new" className="text-success fs-5">Add an author</Link>
            <h5 className="mt-2">We have quotes by:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                author.map((author)=>(
                    <tr className="table-success">
                        <td className="text-dark fs-3">{author.name}</td>
                        <td><button className="btn btn-success me-2"><Link className="edit" to={`/edit/${author._id}`}>Edit</Link></button><button className='btn btn-danger mt-1' onClick={(e)=>deleteHandler(author._id)}>Delete</button></td>
                    </tr>
                ))
            }
                </tbody>
            </table>
        </div>
    )
}

export default Home