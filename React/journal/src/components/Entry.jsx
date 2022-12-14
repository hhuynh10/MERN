import React from 'react'

const Entry = (props) => {
    const {entries, setEntries} = props

    const deleteEntry = (index) => {
        const newEntries = entries.filter((entry, i) => {
        return i !== index
    })
        setEntries(newEntries)
    }
    
    return (
        <div>
            {
                entries.map((entry, index)=> (
                    <p key={index}>{entry} <button onClick={(e)=> deleteEntry}>Delete</button></p>
                ))
            }
        </div>
    )
}

export default Entry