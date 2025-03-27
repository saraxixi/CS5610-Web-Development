import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function AddTask() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    const newTask = { title: title, date: date };

    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const savedTask = await response.json();
        navigate(`/tasks/${savedTask.id}`);
      } else {
        console.error('Failed to save task');
      }
    } catch (error) {
      console.error('handleSubmit error:', error);
    }

    setTitle('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default AddTask;
