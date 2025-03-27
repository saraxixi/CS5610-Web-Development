import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router';

function Task({ task, onDelete }) {
    return (
        <li>
            <NavLink
              to={`/tasks/${task.id}`}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: 'none',
                color: 'blue'
              })}
            >
              {task.title}
            </NavLink>
            <div className="task-container">
                <div className="task-content">
                    {/* <p className="task-title">{task.title}</p> */}
                    <p className="task-date">{task.date}</p>
                </div>
                <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
            </div>
        </li>
    );
}

export default Task;
