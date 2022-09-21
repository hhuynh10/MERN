import React from 'react'

const ColorEntry = (props) => {
    const {colorEntries} = props
    
    return (
        <div>
            {
                colorEntries.map((entry, index) => (
                    <div key={index} style={{
                        marginTop: "20px",
                        display: "inline-block",
                        marginRight: "10px",
                        height: entry.size,
                        width: entry.size,
                        backgroundColor: entry.color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default ColorEntry