import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos }) => {

  return (
    <div>
      <h1>Soy TodoList</h1>
      {
        todos.map(todo => <Todo todo={todo} key={todo.id} />)
      }
    </div>
  );
}

export default TodoList;