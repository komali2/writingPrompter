var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/../client/index.html');
});

app.get('/prompter.js', function(req, res){
  res.sendFile(__dirname + '/../client/prompter.js');
})

app.listen(3000, function(){
  console.log("Prompter listening on port 3000.");
});
