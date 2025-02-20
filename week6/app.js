var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
const util = require('util');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

app.get('/write-then', (req, res) => {
  writeFile('data.txt', 'This is a message for you!')
    .then(() => {
      console.log('File written successfully');
      return readFile('data.txt', 'utf-8'); // 读取文件
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

module.exports = app;
