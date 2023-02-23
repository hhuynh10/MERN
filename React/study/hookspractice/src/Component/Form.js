import React, {useState} from 'react'

const Form = ({entries, setEntries}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const [num, setNum] = useState(1)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {username, email};
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setSubmitted(true);
        setEntries([...entries, {namename: username, emailemail: email, num:num}])
        setNum(num+1)
    };
    return (
        <div>
            {
                submitted ?
                <h3>Thank you for submitting your form</h3> :
                <h3>Please submit your form</h3>
            }
            <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    )
}

export default Form