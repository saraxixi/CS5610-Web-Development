import React from "react";

function Header({ appName }) {
  return (
    <header className="header">
      <h1>{appName}</h1>
      <button className="add-task">Add A Task</button>
    </header>
  );
}

export default Header;