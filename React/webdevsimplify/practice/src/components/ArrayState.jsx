import { useState } from 'react'

const initial_value = ["A", "B", "C", "D", "F"]

function ArrayState() {
    const [array, setArray] = useState(initial_value)

    // Add the ability to remove the first element from the array
    const removeFirstElement = () => {
        setArray(currentArr => {
        return currentArr.slice(1)
        })
    }

    // Add the ability to remove a specific letter from the array
    const removeSpecificLetter = (letter) => {
        setArray(currentArr => {
        return currentArr.filter(element => element !== letter)
        })
    }

    // Add the ability to add a new element to the start of the array
    const addToFirst = (letter) => {
        setArray(currentArr => {
        return [letter, ...currentArr]
        })
    }

    // Add the ability to add a new element to the end of the array
    const addToLast = (letter) => {
        setArray(currentArr => {
        return [...currentArr, letter]
        })
    }

    // Add the ability to clear the array
    const clearArr = () => {
        setArray([])
    }

    // Add the ability to reset the array to the initial value
    const resetArr = () => {
        setArray(initial_value)
    }

    // Add the ability to update all A elements in the array to H
    const updateLetter = () => {
        setArray(currentArr => {
        return currentArr.map((element)=> {
            if (element === "A"){
            return "H"
            }
            return element
        })
        })
    }

    // Add an input that is connected to state and a button that will add the input value to the start of the array
    const [value, setValue] = useState("")

    // Add the ability to add a new element at any index in the array
    const addToIndex = (letter, index) => {
        setArray(currentArr => {
        return [...currentArr.slice(0, index), letter, ...currentArr.slice(index)]
        })
    }

    return (
        <div>
            <div>
                {array.join(", ")}
            </div>
            <div>
                <button onClick={removeFirstElement}>removeFirstElement</button>
                <br></br>

                <button onClick={(e) => removeSpecificLetter("C")}>removeSpecificLetter</button>
                <br></br>

                <button onClick={(e) => addToFirst("Z")}>addToFirst</button>
                <br></br>

                <button onClick={(e) => addToLast("G")}>addToLast</button>
                <br></br>

                <button onClick={clearArr}>clearArr</button>
                <br></br>

                <button onClick={resetArr}>resetArr</button>
                <br></br>

                <button onClick={updateLetter}>updateLetter</button>
                <br></br>

                <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={(e) => addToFirst(value)}>addToFirst</button>
                <br></br>

                <button onClick={(e) => addToIndex("Z", 2)}>addToIndex</button>
                <br></br>
            </div>
        </div>
    )
}

export default ArrayState
