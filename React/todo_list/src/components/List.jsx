import React from 'react'

const List = (props) => {
    const {lists, setLists} = props

    const handleCompleted = (todo) => {
    
        todo.markedDelete = !todo.markedDelete;
        setLists([...lists]);
    };

    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };

    const deleteButton = (idFromBelow) => {
        setLists(
            lists.filter((todo, index) => {
            return todo.id !== idFromBelow;
        })
        );
    };

    return (
        <div>
            {lists.map((todo, index)=>(
                <p className={styled(todo.markedDelete)} key={todo.id}>{todo.content}
                <input type="checkbox" onChange={() => handleCompleted(todo)} /> 
                <button onClick={() => deleteButton(todo.id)}>Delete</button></p>
            ))}
        </div>
    )
}

export default List