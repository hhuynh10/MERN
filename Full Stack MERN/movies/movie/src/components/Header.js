import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Header = () => {

    const navigate = useNavigate()

    const logout = (e)=>{
        axios.get('http://localhost:8000/api/logout',{withCredentials:true})
        .then((res)=> {
            console.log('logged out')
            navigate('/')
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div className="list col-12 no-gutter fluid pt-1 pb-2 bg-dark">
            <h1 className="text-light">Movie DB</h1>
            <Link to="/login" className="m-3 text-info edit fs-5">Log In</Link>
            <Link to="/" className="m-3 text-info edit fs-5" onClick={logout}>Logout</Link>
        </div>
    )
}

export default Header