import React from 'react'
import { useParams } from "react-router"; 

const Number = (props) => {

    const { number } = useParams()


    return (
        <div>
                <h1 style={{textAlign : "center" }}>The number is: { number }</h1>
        </div>
    )
}

export default Number