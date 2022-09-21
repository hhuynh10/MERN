import React from 'react'

const Entry = (props) => {
    const {entries} = props 
    
    return (
        <div>
            {
                entries.map((color, index) => (
                    <div key={index} style={{
                        marginTop: "20px",
                        display: "inline-block",
                        marginRight: "10px",
                        height: "50px",
                        width: "50px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Entry