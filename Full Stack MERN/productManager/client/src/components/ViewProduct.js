import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

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
        </div>
    )
}

export default ViewProduct