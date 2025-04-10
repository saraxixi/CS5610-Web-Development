import React from "react";
import { IoTrashSharp } from "react-icons/io5";
import { NavLink } from "react-router";

export default function Task({ taskObj, onDelete }) {
  function deletePressed() {
    onDelete(taskObj._id);
  }
  return (
    <li>
      <div className="taskContainer">
        <div className="taskTitleIconContainer">
          <NavLink to={`/tasks/${taskObj._id}`}> {taskObj.title}</NavLink>
          <IoTrashSharp
            onClick={deletePressed}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                deletePressed();
              }
            }}
          />
        </div>
        <p>{taskObj.date}</p>
      </div>
    </li>
  );
}