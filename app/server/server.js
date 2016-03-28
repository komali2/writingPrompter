var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/prompter.js', function(req, res){
  res.sendFile(__dirname + '/../prompter.js');
})

app.listen(3000, function(){
  console.log("Prompter listening on port 3000.");
});
