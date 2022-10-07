import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-light col-12 no-gutter fluid">
            <h1 className="text-success">Product Manager</h1>
            <NavLink to="/" className="m-3 text-info">Home</NavLink>
            <NavLink to="/addProduct" className="text-info">Add Product</NavLink>
        </div>
    )
}

export default Header