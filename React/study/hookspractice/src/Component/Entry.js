import React, {useState} from 'react'

const Entry = ({entries, setEntries}) => {
    const deleteEntry = (delIdx) => {
        const newEntries = entries.filter((entry, i)=>(
            i !== delIdx
        ))
        setEntries(newEntries)
    }
    return (
        <div>
            <h1>Your entries:</h1>
            <h3>
                {
                entries.map((entry, index) => 
                    <div key={index}>
                        <p>{entry.num}</p>
                        <p>Username: {entry.namename} </p>
                        <p>Email: {entry.emailemail}</p>
                        <p><button onClick={()=>deleteEntry(index)}>Delete Entry</button></p>
                    </div>
                )}
            </h3>
        </div>
    )
}

export default Entry