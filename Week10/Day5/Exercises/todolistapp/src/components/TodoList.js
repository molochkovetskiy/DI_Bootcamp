import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTaskList([...taskList, newTask]);
            setNewTask('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    const removeTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            {taskList.length === 0 ? (
                <p id='no-tasks-message'>You have no todo's left, yay!</p>
            ) : (
                <ul className="task-list">
                    {taskList.map((task, index) => (
                        <li
                            key={index}
                            onClick={() => removeTask(index)}
                            className='task-item'
                        >
                            {task}
                        </li>
                    ))}
                </ul>
            )}
        </div >
    );
}

export default TodoList;