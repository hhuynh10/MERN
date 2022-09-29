import React from 'react'
import { useParams } from "react-router"; 

const Word = (props) => {

    const { word, color, backgroundCol } = useParams()

    return (
        <div>
            { isNaN(word) &&
            <h1 style={{textAlign : "center",
                        color : color,
                        backgroundColor: backgroundCol
            }}>The word is: { word }</h1>
            }
        </div>
    )
}

export default Word