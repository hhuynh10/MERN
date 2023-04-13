import React, { useState, useEffect } from 'react'

const UseEffect = () => {

    const [age, setAge] = useState(0)

    useEffect(() => {
        console.log("Age was called", age)
    }, [age])

    return (
        <div>
            Age: {age}
            <button onClick={() => setAge(currentage => (currentage+1))} >Increase Age</button>
        </div>
    )
}

export default UseEffect