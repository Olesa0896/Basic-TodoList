import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/auth-contex';

const TodoForm = () => {
  const { initialFormValues, todoAdd, todoEdit, setTodoEdit, formValues, setFormValues, error, setError, todoUpdate, successMessage, setSuccessMessage } = useAuth();
  const { title, description } = formValues;

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {

    const changedFormValues = {
      ...formValues, [e.target.name]: e.target.value
    }
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setError('Debes indicar un título')
      return;
    }
    if (description.trim() === '') {
      setError('Debes indicar un descripción')
      return;
    }
    if (todoEdit) {
      todoUpdate(formValues)
      setSuccessMessage('Actualizado con exito');
    } else {
      todoAdd(formValues);
      setSuccessMessage('Agregado con exito');
      setFormValues(initialFormValues);
    }


    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000)

    setError(null);
  };

  return (
    <div>
      <h2 className='text-center display-5'>{todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
      {todoEdit &&
        <button
          onClick={() => setTodoEdit(null)}
          className='btn btn-sm btn-warning mb-2'
        >
          Cancelar edición
        </button>

      }
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Título'
          className='form-control'
          value={title}
          name='title'
          onChange={handleInputChange}
        />
        <textarea
          placeholder='Descripción'
          className='form-control mt-2'
          value={description}
          name='description'
          onChange={handleInputChange}
        ></textarea>
        <button
          className='btn btn-primary w-100 mt-2'
        >
          {todoEdit ? 'Actualizar Tarea' : 'Agregar Tarea'}
        </button>
      </form>
      {
        error &&
        (<div className='alert alert-danger mt-2'>
          {error}
        </div>)
      }
      {
        successMessage &&
        (<div className='alert alert-success mt-2'>
          {successMessage}
        </div>)
      }
    </div>
  );
}

export default TodoForm;