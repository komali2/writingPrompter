var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname + '/app/client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/client/index.html');
});

app.get('/prompter.js', function(req, res){
  res.sendFile(__dirname + '/app/client/prompter.js');
});

app.get('/style.css', function(req, res){
  res.sendFile(__dirname + '/app/client/style.css');
})

//deploy-ready
app.listen(process.env.PORT || 3000, function(){
  console.log("Prompter listening on port 3000.");
});
