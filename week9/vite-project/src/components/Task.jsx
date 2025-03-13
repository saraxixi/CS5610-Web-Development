import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Task({ task, onDelete }) {
    return (
        <li>
            <div className="task-container">
                <div className="task-content">
                    <p className="task-title">{task.title}</p>
                    <p className="task-date">{task.date}</p>
                </div>
                <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
            </div>
        </li>
    );
}

export default Task;
