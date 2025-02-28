var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
const util = require('util');
const port = 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/write-then', (req, res) => {
  writeFile('data.txt', 'This is a message for you!')
    .then(() => {
      console.log('File written successfully');
      return readFile('data.txt', 'utf-8');
    })
    .then((data) => {
      res.send(`File content: ${data}`);
    })
    .catch((err) => {
      res.status(500).send('Error writing or reading file');
      console.error(err);
    });
});

app.get('/write-async', async (req, res) => {
  try {
    await writeFile('data.txt', 'This is a message for you!');
    console.log('File written successfully');

    const data = await readFile('data.txt', 'utf-8');
    res.send(`File content: ${data}`);
  } catch (err) {
    res.status(500).send('Error writing or reading file');
    console.error(err);
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const db = require('./db');
require('dotenv').config();
console.log(process.env);

app.listen(port, async function () {
  console.log(`Server running on port ${port}`);
  await db.connect();
  console.log('Connected to MongoDB');
  // db.addToDB({name: 'task1', description: 'first task'});
  }
);

module.exports = app;
