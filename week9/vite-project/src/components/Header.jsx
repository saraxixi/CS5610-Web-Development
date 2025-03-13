import React from "react";

function Header({ appName, toggleForm, showForm }) {
  return (
    <header className="header">
      <h1>{appName}</h1>
      <button className="add-task" onClick={toggleForm}>
        {showForm ? "Close Form" : "Add A Task"}
      </button>
    </header>
  );
}

export default Header;