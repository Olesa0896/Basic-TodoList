import React, { useState } from 'react';

const TodoForm = () => {
  return (
    <div>
      <h1>Nueva Tarea</h1>
      <form>
        <input
          type='text'
          placeholder='Título'
          className='form-control'
        />
        <textarea
          placeholder='Descripción'
          className='form-control mt-2'
        ></textarea>
        <button
          className='btn btn-primary w-100 mt-2'
        >
          Agregar tarea
        </button>
      </form>
    </div>
  );
}

export default TodoForm;