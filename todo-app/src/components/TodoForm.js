import React, { useState } from 'react';

const TodoForm = () => {
  const initialFormValues = {
    title: '',
    description: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;

  const handleInputChange = (e) => {

    const changedFormValues = {
      ...formValues, [e.target.name]: e.target.value
    }
    setFormValues(changedFormValues)
  }
  return (
    <div>
      <h1>Nueva Tarea</h1>
      <form>
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
          Agregar tarea
        </button>
      </form>
    </div>
  );
}

export default TodoForm;