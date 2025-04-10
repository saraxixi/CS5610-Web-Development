import React from 'react';
import Task from './Task';
import { Outlet } from 'react-router';

function TasksList({ tasks=[], onDelete}) {

  return (
	  <div>
		  {tasks.length > 0 ? (
			  <ul>
				  {tasks.map(task => (
					  <Task key={task.id} task={task} onDelete={onDelete} />
				  ))}
			  </ul>
		  ) : (
			  <p>No Tasks Left</p>
		  )}
      <Outlet />
	  </div>
  );
}

export default TasksList;
