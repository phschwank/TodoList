import React, { useState, FormEvent } from 'react';
import { NewTodoFormProps, NewItemState } from '../types/types';

const NewTodoForm = ({ onSubmit }: NewTodoFormProps) => {
    const [newItem, setNewItem] = useState<NewItemState>({ newItem: '' });
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!newItem.newItem) return;
        onSubmit(newItem.newItem);
        setNewItem({ newItem: '' });
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="item">Enter Todo Item</label>
        <input
            value={newItem.newItem}
            onChange={(e) => setNewItem({ newItem: e.target.value })}
            type="text"
            id="item"
        />
        </div>
        <button>Add Todo</button>
    </form>
    );
};

export default NewTodoForm;
