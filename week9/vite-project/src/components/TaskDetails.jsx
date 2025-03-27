import React from "react";
import { useParams } from "react-router";

function TaskDetails() {
  const { taskId } = useParams();
  return <div>TaskDetails of task {taskId}</div>;
}

export default TaskDetails;