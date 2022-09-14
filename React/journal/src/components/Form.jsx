import React , {useState} from 'react'

const Form = ({setEntries, entries}) => {
    const [thought, setThought] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setEntries([...entries, thought])
        setThought('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Your Thoughts:
                <textarea cols="10" rows="5" value={thought} onChange={ (e) => setThought(e.target.value) }/>
            </label>
            <input type="submit" value="Think it" />
        </form>
    )
}

export default Form