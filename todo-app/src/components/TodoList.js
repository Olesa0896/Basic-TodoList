import React from 'react';
import Todo from './Todo';
import { useAuth } from '../context/auth-contex';


const TodoList = () => {

  const { todos } = useAuth();

  return (
    <div>
      <h2 className='text-end display-4'>Soy TodoList</h2>

      {
        todos.length === 0
          ? (
            <div className='alert alert-primary'>
              No hay tareas, Por favor agregar una nueva tarea🤓
          </div>
          )
          : (
            todos.map(todo => (
              <Todo
                todo={todo}
                key={todo.id}
              />
            ))
          )
      }
    </div>
  );
}

export default TodoList;