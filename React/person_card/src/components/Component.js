import React from 'react'

const Component = (props) => {
    const {firstName, lastName, age, hairColor} = props;

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <br></br>
        </div>
    )
}

export default Component