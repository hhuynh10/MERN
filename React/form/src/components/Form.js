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
        if (firstName && lastName && email && password){
            if (firstName.length > 3) {
                console.log("Welcome", newUser);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            } else {
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }
        } else {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
        
    };

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                {firstName.length < 3 ? 
                <p>First name must be at least 3 characters!</p> : null}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                {lastName.length < 3 ? 
                <p>Last name must be at least 3 characters!</p> : null}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {email.length < 3 ? 
                <p>Email must be at least 3 characters!</p> : null}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {password.length < 3 ? 
                <p>Password must be at least 3 characters!</p> : null}
            </div>
            <div>
                <label>Comfirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
    </form>
    );
};

export default Form;