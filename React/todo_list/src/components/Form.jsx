
import React, { useState } from 'react'

const Form = (props) => {
    const {lists, setLists} = props
    const [text, setText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setLists([...lists, 
            {
                content: text,
                markedDelete: false,
                id: Math.floor(Math.random() * 100000000).toString()
            }
        ])
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Your Lists:
                <input type="text" value={text} onChange={ (e) => setText(e.target.value) }/>
            </label>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form