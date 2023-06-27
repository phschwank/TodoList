import React, { ReactElement } from 'react';
import { TodoListProps } from '../types/types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo } : TodoListProps) : ReactElement => {
    return (
    <ul>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
            return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
        }
        )}
    </ul>
    )
}

export default TodoList;