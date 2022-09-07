import React, {useState} from 'react'

const Person = (props) => {
    const [personAge, setPersonAge] = useState(props.age);
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = { (event) => setPersonAge(personAge + 1) }>Birthday button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default Person