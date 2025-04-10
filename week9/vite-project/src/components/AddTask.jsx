import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTask() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  async function submitHandler(e) {
    //e is the event object
    e.preventDefault();
    const newTask = { title: title, date: date };
    console.log("new task is ", newTask);
    setDate("");
    setTitle("");
    try {
      let token;
      if (isAuthenticated) {
        token = await getAccessTokenSilently();
        console.log(token);
      }
      //send a post request to the server
      const response = await fetch("http://localhost:5001/api/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        if (response.status === 401) {
          console.log("You are not authorized to add a task");
        }
        return;
      }
      const data = await response.json();
      console.log(data);
      if (data.acknowledged) {
        navigate(`tasks/${data.insertedId}`);
      }
      //
    } catch (err) {
      console.log("submitHandler", err);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={function (e) {
            setDate(e.target.value);
          }}
        />
      </div>
      <button type="submit"> Save </button>
    </form>
  );
}