import React, {useState} from 'react'

const Review = ({entries, setEntries}) => {
    
    const [color, setColor] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { color };
        console.log("Welcome", newUser);
            setColor("");
            setEntries([...entries, color])
            setHasBeenSubmitted( true );
    };
    
    return (
        <div>
            <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
                <div>
                    <label>Color: </label> 
                    <input type="color" value={color} onChange={ (e) => setColor(e.target.value) } />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Review