import React, { useState } from 'react'

export const EditTodoForm = ({todo,editTodo}) => {
    const [value, setValue] = useState(todo.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value,todo.id);
        setValue('');
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' placeholder='Update Task' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
