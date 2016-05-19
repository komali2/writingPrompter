var express = require('express');
var app = express();

var apiRouter = express.router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/app/client'));
app.use('/external', apiRouter);

require('./api/apiRouter.js')(apiRouter);
