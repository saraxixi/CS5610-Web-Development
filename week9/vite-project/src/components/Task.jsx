import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

function Task({ task }) {
    return (
        <li>
            <div className="task-container">
                <p>{task.title}</p>
                <p>{task.date}</p>
            </div>
            <RiDeleteBin5Line className='delete-icon'/>
        </li>
    );
}

export default Task;
