function randArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function cleanArray(array){
  if(array.length > 50){
    return array.slice(2);
  }
  else{
    return array;
  }
}
var userPromptsArray = [];

function validateString(data) {
    //iterate through the string, add escape characters for dangerous characters
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };

    function escapeHtml (string) {
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
        return entityMap[s];
      });
    }
    return escapeHtml(data);
}

module.exports = {
  get: function(req, res){
    res.send(randArrayElement(userPromptsArray));
  },
  post: function(req, res){
    userPromptsArray.push(validateString(req.body.prompt));
    userPromptsArray = cleanArray(userPromptsArray);
    res.send(userPromptsArray);
  },
  delete: function(req, res){
    userPromptsArray.length = 0;
    res.send('received delete request');
  }
};
