type NewTodoFormProps = {
    onSubmit: (newItem: string) => void;
    }

type NewItemState = {
    newItem: string;
    }

type TodosState = {
    id: string;
    title: string;
    completed: boolean;
    }

type TodoItemProps = {
        completed: boolean;
        id: string;
        title: string;
        toggleTodo: (id: string, completed: boolean) => void;
        deleteTodo: (id: string) => void;
    }

type TodoListProps = {
        todos: {
            id: string;
            title: string;
            completed: boolean;
        }[];
        toggleTodo: (id: string, completed: boolean) => void;
        deleteTodo: (id: string) => void;
    }

export type {NewTodoFormProps, NewItemState, TodosState, TodoItemProps, TodoListProps};