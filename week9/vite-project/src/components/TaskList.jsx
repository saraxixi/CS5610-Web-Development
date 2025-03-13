import React, { useState } from 'react';
import Task from './Task';

function TasksList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Review week 9 material",
            date: "June 4th at 1 pm",
        },
        {
            id: 2,
            title: "Do quiz 9",
            date: "June 4th at 6 pm",
        },
        {
            id: 3,
            title: "Work on assignment 2",
            date: "June 5th at 8 am",
        },
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map(task => (
                        <Task key={task.id} task={task} onDelete={deleteTask} />
                    ))}
                </ul>
            ) : (
                <p>No Tasks Left</p>
            )}
        </div>
    );
}

export default TasksList;
