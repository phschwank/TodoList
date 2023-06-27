import React, { ReactElement, useEffect, useState } from 'react';
import { TodosState } from './types/types';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const App = () : ReactElement => {
  const [todos, setTodos] = useState<TodosState[]>(() => {
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addTodo (newItem: string) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
  }

  function toggleTodo(id: string, completed: boolean) : void {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo (id: string) : void {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App;