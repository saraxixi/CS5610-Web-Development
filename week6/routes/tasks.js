const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    console.log("req.body", req.body);
    await db.addToDB(req.body)
    // res.send('data received');
    res.redirect('/tasks');
  } catch (err) {
    console.error("Error adding to DB", err);
  }
});

router.get("/newtask", (req, res) => {
  res.render('taskForm');
});

router.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch tasks' });
    });
});

router.get('/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
    .then(taskResponse => {
      const task = taskResponse.data;
      return axios.get(`https://jsonplaceholder.typicode.com/users/${task.userId}`)
        .then(userResponse => {
          const user = userResponse.data;
          res.render('task', {
            id: task.id,
            title: task.title,
            completed: task.completed,
            userName: user.name
          });
        });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).send('Failed to fetch task details');
    });
});

module.exports = router;