import React from 'react';

const TodoList = () => {
  return (
    <div>
      <h1>Soy TodoList</h1>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title text-end'>
            Título de la tarea
            <button className='btn btn-sm btn-outline-success ms-2'> Terminar </button>
          </h3>
          <p className='card-text text-end'>
            Descripción de la tarea
          </p>
          <hr />
          <div className='d-flex justify-content-end'>
            <button className='btn btn-sm btn-outline-primary me-2'>Editar</button>
            <button className='btn btn-sm btn-outline-danger'>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;