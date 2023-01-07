import React, {useState} from 'react'

const Props = ({firstName, lastname, age, hairColor}) => {

    const [birthday, setBirthday] = useState(age);

    const birthdayButton = () => {
        setBirthday(birthday + 1)
    }

    
    return (
        <div>
            <h1>My name is {firstName} {lastname}</h1>
            <h3>I am {birthday} years old</h3>
            <h3>My hair color is {hairColor}</h3>
            <button onClick={birthdayButton}>Birthday Button for {firstName}</button>
        </div>
    )
}

export default Props