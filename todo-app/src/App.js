import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const App = () => {
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