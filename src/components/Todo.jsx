import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='todo'>
            <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'completed' : 'incompleted'}`}>{todo.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}
