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

app.get('/', function(req, res) {
  res.send('Hello and welcome to my site!');
});

const port = 3000;
app.listen(port, function() { 
  console.log(`Example app listening on port ${port}!`); 
});
