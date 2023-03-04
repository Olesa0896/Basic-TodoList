import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialTodos = [
  {
    id: 1,
    title: 'Todo #1',
    description: ' Desc del Todo #1',
    completed: false
  },
  {
    id: 2,
    title: 'Todo #2',
    description: ' Desc del Todo #2',
    completed: false
  }
];


const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
          <TodoList todos={todos} />
        </div>
        <div className='col-4'>
          <TodoForm />
        </div>

      </div>
    </div>
  );
}

export default App; 