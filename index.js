module.exports = function (bodyObj, type, cb){

  var request = require('request');

  baelishURL = 'demo.crowdprocess.com';

  var URL;
  if (type === 'postgis')
    URL = 'http://'+ baelishURL + '/postgisdata';
  else
    URL = 'http://'+ baelishURL + '/grassdata';

  request.post({
    url: URL,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyObj)
  }, function(error, response, body){
    if (error) throw error;
    cb(body);
  });
}