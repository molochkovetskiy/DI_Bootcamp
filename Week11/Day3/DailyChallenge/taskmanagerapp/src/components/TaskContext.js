import React, { createContext, useContext, useReducer } from 'react';

// Initial state for tasks
const initialState = {
    tasks: [],
    filter: 'all',
};

// Define actions
const TaskActions = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    EDIT_TASK: 'EDIT_TASK',
    FILTER_TASKS: 'FILTER_TASKS',
};

// Reducer function to manage tasks
const taskReducer = (state, action) => {
    switch (action.type) {
        case TaskActions.ADD_TASK:
            // Add a new task
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case TaskActions.DELETE_TASK:
            // Delete a task by ID
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case TaskActions.TOGGLE_TASK:
            // Toggle a task's completion status by ID
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                ),
            };
        case TaskActions.EDIT_TASK:
            // Edit a task's text by ID
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, text: action.payload.text }
                        : task
                ),
            };
        case TaskActions.FILTER_TASKS:
            // Update the filter
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

const TaskContext = createContext();

const useTaskContext = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskProvider, useTaskContext, TaskActions };
