import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductForm = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addProduct', {
            title,
            price,
            description
        }).then((res)=> {
            console.log(res)
            navigate('/')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className="col-4 mx-auto list">
            <h2 className="text-dark mt-2">Add Product</h2>
            <form onSubmit={submitHandler}>
                <label className="form-label">Title:</label>
                <input type="text" className="form-control bg-light" value={title} onChange={(e)=>setTitle(e.target.value)} />
                {errors.title ? <span className='text-danger'>{errors.title.message}</span> : null }<br></br>
                <label className="form-label">Price:</label>
                <input type="number" className="form-control bg-light" value={price} onChange={(e)=>setPrice(e.target.value)} />
                {errors.price ? <span className='text-danger'>{errors.price.message}</span> : null }<br></br>
                <label className="form-label">Description:</label>
                <input type="text" className="form-control bg-light" value={description} onChange={(e)=>setDescription(e.target.value)} />
                {errors.description ? <span className='text-danger'>{errors.description.message}</span> : null }<br></br>
                <button type="submit" className="btn btn-info m-2">Create</button>
            </form>
        </div>
    )
}

export default ProductForm