import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {Todo} from './Todo'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todos);
    }
    return (
        <div className='todo-wrapper'>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo,index)=>(
                  <Todo key={index} todo={todo} />
            ))}
        </div>
    )
}
