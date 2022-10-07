import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
        <div>
            <h2>Product List:</h2>
            {
                product.map((product)=>(
                    <div>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList