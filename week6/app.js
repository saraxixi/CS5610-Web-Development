// const fs = require('fs')

// fs.writeFile('data.txt', 'This is a message for you!', (err) => {
//   if (err) {
//     console.error('Write failed')
//   } else {
//     console.log('File written successfully');
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       if (err) {
//         console.error(err)
//       } else {
//         console.log('File content:', data)
//       }
//     });
//   }
// });

const logger = require('./logger.js');
logger.log();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello and welcome to my site!');
});

app.get('/tasks', (req, res) =>{
  res.send('<h1>List of all the tasks</h1>');
  console.log(req.params);
  console.log(req.query);
});

app.get('/tasks/:taskId', (req, res) => {
  // res.send('<h1>List of all the tasks</h1>');
  const taskId = req.params.taskId;
  console.log(req.params.taskId);
  res.send(`<p>You are viewing task ${taskId}</p>`);
});

app.listen(port, function() { 
  console.log(`Example app listening on port ${port}!`); 
});