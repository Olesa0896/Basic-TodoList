import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

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
function AuthProvider({ children }) {
  const initialFormValues = {
    title: '',
    description: ''
  };

  const localTodos = JSON.parse(localStorage.getItem('todos'));

  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  // const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const todoDelete = (todoId) => {

    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null)
    }
    const changedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(changedTodos);
  }

  const todoToogleCompleted = (todoId) => {
    const changedTodos = todos.map(todo => (
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    ))

    setTodos(changedTodos)
  }

  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }

    const changedTodos = [
      newTodo, ...todos
    ]
    setTodos(changedTodos)
  };

  const todoUpdate = (todoEdit) => {

    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id
        ? todoEdit
        : todo
    ))
    setTodos(changedTodos)
  }

  return (
    <AuthContext.Provider
      value={{
        initialFormValues,
        todos,
        setTodos,
        todoEdit,
        setTodoEdit,
        formValues,
        setFormValues,
        error,
        setError,
        successMessage,
        setSuccessMessage,

        todoDelete,
        todoToogleCompleted,
        todoAdd,
        todoUpdate

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
