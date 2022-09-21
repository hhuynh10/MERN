import React, {useState} from 'react'

const Form = (props) => {
    const {colorEntries, setColorEntries} = props

    const [color, setColor] = useState('')
    const [size, setSize] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setColorEntries([...colorEntries, {color: color, size: size + 'px'}])
        setColor('')
        setSize(50)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color:
                <input type="text" value={color} onChange={ (e) => setColor(e.target.value) }/>
            </label>
            <label>
                Size:
                <input type="text" value={size} onChange={ (e) => setSize(e.target.value) }/>
            </label>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form