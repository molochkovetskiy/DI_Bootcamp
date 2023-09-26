import React, { useState } from 'react';
import { useTaskContext, TaskActions } from './TaskContext';

const TaskManager = () => {
    const { state, dispatch } = useTaskContext();
    const [newTaskText, setNewTaskText] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskText, setEditedTaskText] = useState('');

    // Add a new task
    const addTask = () => {
        if (newTaskText.trim() !== '') {
            dispatch({ type: TaskActions.ADD_TASK, payload: { id: Date.now(), text: newTaskText, completed: false } });
            setNewTaskText('');
        }
    };

    // Delete a task by ID
    const deleteTask = (id) => {
        dispatch({ type: TaskActions.DELETE_TASK, payload: id });
    };

    // Toggle a task's completion status by ID
    const toggleTask = (id) => {
        dispatch({ type: TaskActions.TOGGLE_TASK, payload: id });
    };

    // Edit a task's text by ID
    const editTask = (id, text) => {
        setEditingTaskId(id);
        setEditedTaskText(text); // Initialize the edited text
    };

    const saveEditedTask = (id) => {
        editTask(id, editedTaskText); // Update the text in state
        dispatch({ type: TaskActions.EDIT_TASK, payload: { id, text: editedTaskText } }); // Dispatch the edit action
        setEditingTaskId(null);
    };

    // Filter tasks by completion status
    const filterTasks = (filter) => {
        dispatch({ type: TaskActions.FILTER_TASKS, payload: filter });
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a task..."
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <button onClick={() => filterTasks('all')}>All</button>
                <button onClick={() => filterTasks('completed')}>Completed</button>
                <button onClick={() => filterTasks('active')}>Active</button>
            </div>
            <ul>
                {state.tasks
                    .filter((task) => {
                        if (state.filter === 'all') return true;
                        if (state.filter === 'completed') return task.completed;
                        if (state.filter === 'active') return !task.completed;
                        return true;
                    })
                    .map((task) => (
                        <li key={task.id}>
                            {editingTaskId === task.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editedTaskText}
                                        onChange={(e) => setEditedTaskText(e.target.value)}
                                    />
                                    <button onClick={() => saveEditedTask(task.id)}>Save</button>
                                </div>
                            ) : (
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.id)}
                                    />
                                    <span>{task.text}</span>
                                    <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default TaskManager;
