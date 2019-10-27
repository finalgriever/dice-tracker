var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

var sessionsRouter = require('./routes/sessions');

const port = 3001;

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/sessions', sessionsRouter);

console.log(`Started local server on localhost:${port} 🚀`);
app.listen(port);
