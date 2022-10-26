import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email,
            password
        }, {withCredentials:true, credentials: 'include'})
            .then((res)=> {
            console.log(res)
            navigate('/home')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h2 className="text-dark mt-2">Login</h2>
            <form onSubmit={submitHandler} className="col-4 mx-auto">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control bg-light" value={email} onChange={(e)=>setEmail(e.target.value)} />
                {errors.email ? <span className='text-danger'>{errors.email.message}</span> : null }<br></br>
                <label className="form-label">Password:</label>
                <input type="password" className="form-control bg-light" value={password} onChange={(e)=>setPasword(e.target.value)} />
                {errors.password ? <span className='text-danger'>{errors.password.message}</span> : null }<br></br>
                <button type="submit" className="btn btn-info m-2">Login</button>
            </form>
        </div>
    )
}

export default Login