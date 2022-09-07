import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 


    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Comfirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
    </form>
    );
};

export default Form;