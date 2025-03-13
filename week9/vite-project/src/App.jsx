import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const appName = "My React App";

  return (
    <div className="app-container">
      <Header appName={appName} />
      <TaskList />
    </div>
  );
}

export default App;