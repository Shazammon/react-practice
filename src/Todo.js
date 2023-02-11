import React from 'react'

export default function Todo( {todo, toggleTodo} ) {
    const handleTodoClick = async e => {
        e.preventDefault
        toggleTodo(todo.id)
    }
  return (
    <div>
        <label>
            <input 
                type="checkbox" 
                checked={todo.complete} 
                onChange={handleTodoClick} 
            />
            {todo.name}
        </label>
    </div>
  )
}
