import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({ todo }) => {
    return (
        <div className='todo'>
            <p className={`${todo.completed ? 'completed' : ''}`}>{todo.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} />
            </div>
        </div>
    )
}
