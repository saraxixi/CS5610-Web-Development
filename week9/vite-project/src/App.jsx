import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      console.log("fetchData", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteTask(id) {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error(`Failed to delete task with id ${id}`);
      }
    } catch (error) {
      console.error("deleteTask error:", error);
    }
  }

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const appName = "My React App";

  return (
    <div className="app-container">
      <Header toggleForm={toggleForm} showForm={showForm} appName={appName} />
      {showForm && <AddTask />}
      <TaskList tasks={tasks} setTasks={setTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
