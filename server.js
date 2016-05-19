var app = require('./server/main.js');


app.listen(process.env.PORT || 3000, function(){
  console.log("Prompter listening on port 3000.");
});
