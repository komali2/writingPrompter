var http = require('http');


var redditPromptsArray = [];
var options = {
  host: 'www.reddit.com',
  path: '/r/writingprompts/new.json?sort=new'
};

var redReq = http.get(options, function(res){
  //filled with chunks from the response
  var bodyChunks = [];
  res.on('data', function(chunk){
    bodyChunks.push(chunk);
  }).on('end', function(){
    var body = Buffer.concat(bodyChunks);
    body = JSON.parse(body);
    //adds the titles from the /new prompts into an array
    for(var i = 0; i < body.data.children.length; i++){
      redditPromptsArray.push(body.data.children[i].data.title);
    }
  });
});
//reddit request error handling
redReq.on('error', function(e){
  console.log('ERROR: ' + e.message);
});

function randArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = function(req, res){


  res.send(randArrayElement(redditPromptsArray));

};
