import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
}

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({ type: "ADD_TODO", payload: text });
            setText("");
        }
    };

    return (
        <div>
            <h1>To Do List</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {state.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        >
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
