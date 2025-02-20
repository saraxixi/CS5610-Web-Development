const express = require('express');
const axios = require('axios');
const router = express.Router();

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
    .then(response => {
      const task = response.data;
      res.render('task', { id: task.id, title: task.title, completed: task.completed });
    })
    .catch(error => {
      console.error('Error fetching task:', error);
      res.status(500).send('Failed to fetch task');
    });
});

module.exports = router;