import React, {useState} from 'react'

const Form = (props) => {
    const {entries, setEntries} = props

    const [color, setColor] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setEntries([...entries, color])
        setColor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color:
                <input type="text" value={color} onChange={ (e) => setColor(e.target.value) }/>
            </label>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form