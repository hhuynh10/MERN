import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="list col-12 no-gutter fluid pt-1 pb-2 bg-dark">
            <h1 className="text-light">Movie DB</h1>
            <Link to="/" className="m-3 text-info edit fs-5">Home</Link>
        </div>
    )
}

export default Header