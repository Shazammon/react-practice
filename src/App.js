import React { useState } from 'react';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList />
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
