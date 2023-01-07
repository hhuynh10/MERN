import React, {useState} from 'react'

const Form = (entries, setEntries) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const createUser = (e) => {

        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setEntries([...entries, username])
            setUsername("");
            setEmail("");
            setPassword("");
    };

    return (
        <div>
            <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <h1>User: {username}</h1>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
        </div>
    )
}

export default Form