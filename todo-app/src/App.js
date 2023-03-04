import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useAuth } from './context/auth-contex';


const App = () => {
  const { todos } = useAuth();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
          <TodoList />
        </div>
        <div className='col-4'>
          <TodoForm />
        </div>

      </div>
    </div>
  );
}

export default App; 