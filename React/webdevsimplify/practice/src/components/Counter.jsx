import { useState } from 'react'

const Counter = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const plus = () => {
        setAge (currentAge => {
            return currentAge + 1
        })
    }

    const minus = () => {
        setAge (currentAge => {
            return currentAge - 1
        })
    }
    
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div>
                {age > 0 && <button onClick={minus}>-</button>}
                {age}
                <button onClick={plus}>+</button>
            </div>
            <p>My name is {name} and I am {age} years old</p>
        </div>
    )
}

export default Counter