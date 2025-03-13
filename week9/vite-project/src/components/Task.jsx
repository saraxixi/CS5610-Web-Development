import React from 'react';

function Task({ task }) {
    return (
        <li>
            <div className="task-container">
                <p>{task.title}</p>
                <p>{task.date}</p>
            </div>
        </li>
    );
}

export default Task;
