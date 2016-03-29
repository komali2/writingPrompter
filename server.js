var express = require('express');
var app = express();
var http = require('http');

var options = {
  host: 'www.reddit.com',
  path: '/r/writingprompts/new.json?sort=new'
};
var promptsArray = [];

/*----------------------
REDDIT API
------------------------*/

//will send a GET request to the reddit api
var redReq = http.get(options, function(res){
  //filled with chunks from the response
  var bodyChunks = [];
  res.on('data', function(chunk){
    bodyChunks.push(chunk);
  }).on('end', function(){
    var body = Buffer.concat(bodyChunks);
    body = JSON.parse(body);
    //adds the titles from the /new prompts into an array
    promptsArray.push(body.data.children[i].data.title);
  });
});
//reddit request error handling
redReq.on('error', function(e){
  console.log('ERROR: ' + e.message);
});

/*----------------------
ROUTING
------------------------*/

app.use(express.static(__dirname + '/app/client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/client/index.html');
});

app.get('/prompter.js', function(req, res){
  res.sendFile(__dirname + '/app/client/prompter.js');
});

app.get('/style.css', function(req, res){
  res.sendFile(__dirname + '/app/client/style.css');
});

app.get('/reddit', function(req, res){
  res.send(promptsArray[0]);
});

/*----------------------
SERVER INIT
------------------------*/


app.listen(process.env.PORT || 3000, function(){
  console.log("Prompter listening on port 3000.");
});
