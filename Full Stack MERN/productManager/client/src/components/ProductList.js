import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
        .then((res)=> {
            console.log(res)
            setProduct(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div className="col-4 mx-auto list">
            <h2 className="text-dark mt-2">Product List:</h2>
            {
                product.map((product)=>(
                    <div>
                        <h5><Link to={`/viewproduct/${product._id}`} className="title">{product.title}</Link></h5>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList