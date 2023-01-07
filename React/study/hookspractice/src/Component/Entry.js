import React, {useState} from 'react'

const Entry = ({entries, setEntries}) => {
    return (
        <div>
            <h1>Your entries:</h1>
            <h3>
                {
                entries.map(entry => 
                    <div>
                        <p>{entry.num}</p>
                        <p>Username: {entry.namename} </p>
                        <p>Email: {entry.emailemail}</p>
                    </div>
                )}
            </h3>
        </div>
    )
}

export default Entry