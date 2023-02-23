import React from 'react'

const Display = ({entries, setEntries}) => {
    return (
        <div>
            {
                entries.map((entry) => 
                <div style={{height:'100px', width:'100px', backgroundColor: entry}}>
                    <p>{entry}</p>
                </div>
                )}
        </div>
    )
}

export default Display