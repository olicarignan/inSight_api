const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig['development']);
require('dotenv').config();
const dbHelpers = require('./helpers/dbHelpers')(knex);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const appointmentsRouter = require('./routes/appointments');
const notesRouter = require('./routes/notes');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/authToken');
const notificationRouter = require('./routes/save-subscription')
const {authenticateToken} = require('./helpers/tokenHelper');
const jwt = require('jsonwebtoken');

const app = express();

const bodyParser = require('body-parser')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/categories', categoriesRouter(dbHelpers));
app.use('/api/appointments', appointmentsRouter(dbHelpers));
app.use('/api/notes', notesRouter(dbHelpers));
app.use('/api/login', loginRouter(dbHelpers));
app.use('/api/register', registerRouter(dbHelpers));
app.use('/api/logout', logoutRouter(dbHelpers));
app.use('/api/authenticate', authRouter({authenticateToken}))
app.use('/api/save-subscription', notificationRouter(dbHelpers))



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
