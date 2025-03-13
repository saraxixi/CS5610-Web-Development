import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  }

  const appName = "My React App";

  return (
    <div className="app-container">
      <Header toggleForm={toggleForm} showForm={showForm} appName={appName} />
      {showForm && <AddTask />}
      <TaskList />
    </div>
  );
}

export default App;