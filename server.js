var express = require('express');
var app = express();
var http = require('http');

var options = {
  host: 'www.reddit.com',
  path: '/r/writingprompts/new.json?sort=new'
};

var redReq = http.get(options, function(res){
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  var bodyChunks = [];
  res.on('data', function(chunk){
    bodyChunks.push(chunk);
  }).on('end', function(){
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
  })
});

redReq.on('error', function(e){
  console.log('ERROR: ' + e.message);
});

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
