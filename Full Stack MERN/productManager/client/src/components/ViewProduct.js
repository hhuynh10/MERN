import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ViewProduct = () => {


    const [product, setProduct] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

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
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=> {
            console.log(res)
            setProduct(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div className="mt-3">
            <h4>{product.title}</h4>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button className="btn btn-outline-success me-2"><Link className="edit" to={`/editproduct/${product._id}`}>Edit</Link></button> <button onClick={(e)=>deleteHandler(product._id)} className="btn btn-outline-danger">Delete</button>
        </div>
    )
}

export default ViewProduct