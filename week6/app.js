const fs = require('fs')

fs.writeFile('data.txt', 'This is a message for you!', (err) => {
  if (err) {
    console.error('Write failed')
  } else {
    console.log('File written successfully');
  }
});

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log('File content:', data)
  }
});