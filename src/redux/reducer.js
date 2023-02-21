import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // Add tasks
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        // Remove task 
        removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        // Update Task 
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todo;
            });
        },
        // Completed Task 
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
        },
        // Not Complete Task 
        notCompleteTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: false,
                    };
                }
                return todo;
            });
        }
    }
})

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;