import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function TaskDetails() {
  const { taskId } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`http://localhost:5000/users?task=${taskId}`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
        console.error("Failed to fetch users");
        }
      } catch (error) {
      console.error("fetchUsers error:", error);
      }
    }
    fetchUsers();
  }, [taskId]);

  return (
    <div>
      <h3>Task Details of task {taskId}</h3>
      {users.length > 0 ? (
        users.map((user) => (
          <p key={user.id}>
            {user.name} is responsible for this task
          </p>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default TaskDetails;