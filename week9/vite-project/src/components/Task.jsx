import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

function Task({ task }) {
    return (
        <li>
            <div className="task-container">
              <div className="task-content">
                <p className='task-title'>{task.title}</p>
                <p className='task-date'>{task.date}</p>
              </div>
              <RiDeleteBin5Line className='delete-icon'/>
            </div>
        </li>
    );
}

export default Task;
