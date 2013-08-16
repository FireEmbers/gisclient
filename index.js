module.exports = function (bodyObj, type, cb){

  var request = require('request');

  baelishURL = 'ec2-54-227-182-120.compute-1.amazonaws.com';

  var URL;
  if (type === 'postgis')
    URL = 'http://'+ baelishURL + ':8080/postgisdata';
  else
    URL = 'http://'+ baelishURL + ':8081/grassdata';

  request.post({
    url: URL,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyObj)
  }, function(error, response, body){
    if (error) throw error;
    cb(body);
  });
}