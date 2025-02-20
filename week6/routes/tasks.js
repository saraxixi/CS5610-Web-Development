const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>List of all the tasks</h1>');
  console.log(req.params);
  console.log(req.query);
});

router.get('/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  console.log(req.params.taskId);
  res.send(`<p>You are viewing task ${taskId}</p>`);
});

module.exports = router;