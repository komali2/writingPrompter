var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var apiRouter = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../app/client')));
app.use('/external', apiRouter);

require('./api/apiRouter.js')(apiRouter);

module.exports = app;
