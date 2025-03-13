import React from "react";
import Header from "../components/Header";

const tasks = [
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
];

function App() {
  const appName = "My React App";

  return (
    <div className="app-container">
      <Header appName={appName} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;