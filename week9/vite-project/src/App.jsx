import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import {Routes, Route, Link } from "react-router"

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

      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Header toggleForm={toggleForm} showForm={showForm} appName={appName} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} setTasks={setTasks} onDelete={deleteTask} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
